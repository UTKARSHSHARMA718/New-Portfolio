"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {
  content: string;
  projectName: string;
  repoUrl: string;
};

const ProjectDetailsPage = ({ content, projectName, repoUrl }: Props) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 🌈 Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-20 blur-3xl" />

      {/* 📦 Container */}
      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* 🧠 Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{projectName || 'No Name'}</h1>

          <a
            href={repoUrl}
            target="_blank"
            className="text-blue-500 hover:underline break-all"
          >
            {repoUrl|| 'No link'}
          </a>
        </div>

        {/* 📄 Markdown Content */}
        <div className="markdown-body bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter language={match[1]}>
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...props}>{children}</code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
