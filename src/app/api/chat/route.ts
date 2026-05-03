// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";

import { ratelimit } from "@/app/lib/ratelimit";
import { chatSchema } from "@/app/lib/validation";
import { getVectorStore } from "@/app/lib/vectorstore";

// ✅ FIX 2: These chain helpers moved to @langchain/classic in v1.x
import { createStuffDocumentsChain } from "@langchain/classic/chains/combine_documents";
import { createRetrievalChain } from "@langchain/classic/chains/retrieval";
import { getChatSystemPrompt } from "@/app/lib/prompt";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  // 1. Rate Limiting
  const ip = req.headers.get("x-forwarded-for") ?? "anonymous";
  const { success } = await ratelimit.limit(ip);
  if (!success) return new Response("Too many requests", { status: 429 });

  // 2. Validation
  const body = await req.json();
  const parsed = chatSchema.safeParse(body);
  if (!parsed.success) return new Response("Invalid input", { status: 400 });

  const { message } = parsed.data;

  // 3. Setup Components
  const vectorStore = await getVectorStore();
  const retriever = vectorStore.asRetriever({ k: 5 });

  const model = new ChatOpenAI({
    model: "gpt-4o-mini",
    temperature: 0,
    streaming: true,
  });

  // 4. Create the Chain
  const prompt = ChatPromptTemplate.fromMessages([
    ["system", getChatSystemPrompt()],
    ["human", "{input}"],
  ]);

  const combineDocsChain = await createStuffDocumentsChain({
    llm: model,
    prompt,
  });

  const retrievalChain = await createRetrievalChain({
    retriever,
    combineDocsChain,
  });

  // 5. Execute & Stream
  // const stream = await retrievalChain.stream({
  //   input: message,
  // });
  const stream = await retrievalChain.invoke({
    input: message,
  });

  return NextResponse.json({ message: stream.answer });
}
