"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ProjectDetails() {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/UTKARSHSHARMA718/New-Portfolio/main/README.md"
    )
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 prose prose-invert">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}