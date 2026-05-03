// app/api/ingest/route.ts
import { NextRequest } from "next/server";
import { Document } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { getVectorStore } from "@/app/lib/vectorstore";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const text = body.text as string;

    if (!text?.trim()) {
      return new Response("No text provided", { status: 400 });
    }

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 150,
    });

    const docs = await splitter.splitDocuments([
      new Document({
        pageContent: text,
        metadata: {
          source: "manual-input",
        },
      }),
    ]);

    const vectorStore = await getVectorStore();

    await vectorStore.addDocuments(docs, {
      ids: docs.map((_, i) => `manual-input-${i}`),
    });

    return Response.json({
      success: true,
      chunksStored: docs.length,
    });
  } catch (err) {
    console.error(err);
    return new Response("Error processing file", { status: 500 });
  }
}
