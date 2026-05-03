import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

// const indexModel = await pinecone.createIndex({
//   name: process.env.PINECONE_INDEX_NAME!,
//   dimension: 1536,
//   metric: "cosine",
//   spec: {
//     serverless: {
//       cloud: "aws",
//       region: "us-east-1",
//     },
//   },
// });

// export const index = pinecone.index({ host: indexModel?.host });

export const index = pinecone.index(process.env.PINECONE_INDEX_NAME!)