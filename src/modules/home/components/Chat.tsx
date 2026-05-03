"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: string;
  type: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

interface RAGChatInterfaceProps {
  onSendMessage?: (message: string) => Promise<string>;
  welcomeMessage?: string;
  placeholder?: string;
  className?: string;
}

const RAGChatInterface: React.FC<RAGChatInterfaceProps> = ({
  onSendMessage,
  welcomeMessage = "Welcome to the RAG Assistant. Type your question below.",
  placeholder = "Ask me anything...",
  className = "",
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "0",
      type: "system",
      content: welcomeMessage,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Auto-resize textarea based on content
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);

    // Reset height to auto to get the correct scrollHeight
    e.target.style.height = "auto";
    // Set height to scrollHeight (max 150px)
    e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
    }

    try {
      // 1. Add user message + empty assistant message
      setMessages((prev) => [
        ...prev,
        userMessage,
        {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: "",
          timestamp: new Date(),
        },
      ]);

      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: userMessage.content }),
      });

      if (!res.body) return;

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let fullText = "";

      // 2. Read stream
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        fullText += chunk;

        // 3. Update last assistant message
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            content: fullText,
          };
          return updated;
        });
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "system",
        content: "Error: Failed to get response. Please try again.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      console.log(error);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  // Handle Enter key (submit) and Shift+Enter (new line)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div
      className={`flex-1 flex flex-col rounded-2xl overflow-hidden min-h-96 min-w-[700px] bg-slate-950 text-green-400 font-mono ${className}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-3 text-sm text-slate-400">
            rag-assistant@terminal:~$
          </span>
        </div>
        <div className="text-xs text-slate-500">
          Press Enter to send • Shift+Enter for new line
        </div>
      </div>

      {/* Chat Messages Container */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col gap-1 ${
              message.type === "user" ? "items-end" : "items-start"
            }`}
          >
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>
                {message.type === "user"
                  ? "> user"
                  : message.type === "system"
                    ? "⚡ system"
                    : "🤖 assistant"}
              </span>
              <span>{formatTimestamp(message.timestamp)}</span>
            </div>

            <div
              className={`max-w-[85%] px-4 py-3 rounded-lg ${
                message.type === "user"
                  ? "bg-green-900/30 border border-green-700/50 text-green-300"
                  : message.type === "system"
                    ? "bg-blue-900/20 border border-blue-700/50 text-blue-300"
                    : "bg-slate-800/50 border border-slate-700 text-slate-200"
              }`}
            >
              <p className="whitespace-pre-wrap break-words leading-relaxed">
                {message.content}
              </p>
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-start gap-1">
            <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
              <span>🤖 assistant</span>
            </div>
            <div className="flex gap-1 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg">
              <div
                className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="border-t border-slate-700 bg-slate-900 p-4">
        <form onSubmit={handleSubmit} className="flex items-end gap-3">
          <div className="flex-1 relative">
            <div className="absolute left-3 top-3 text-green-500 text-sm">
              $
            </div>
            <textarea
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={placeholder}
              disabled={isLoading}
              rows={1}
              className="w-full pl-8 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-green-400 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 resize-none disabled:opacity-50 disabled:cursor-not-wait"
              style={{ minHeight: "48px", maxHeight: "150px" }}
            />
          </div>

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 min-w-[100px] justify-center"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending</span>
              </>
            ) : (
              <>
                <span>Send</span>
                <span className="text-xs opacity-70">↵</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

// Mock RAG response for demo purposes
const mockRAGResponse = async (query: string): Promise<string> => {
  // Simulate API delay
  await new Promise((resolve) =>
    setTimeout(resolve, 1000 + Math.random() * 1000),
  );

  return `This is a mock response to your query: "${query}"\n\nIn a real implementation, this would be replaced with your RAG pipeline that:\n1. Retrieves relevant context from your vector database\n2. Augments the query with retrieved information\n3. Generates a contextual response\n\nReplace the onSendMessage prop with your actual RAG API call.`;
};

export default RAGChatInterface;
