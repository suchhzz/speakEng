"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Привет! Как я могу помочь?", from: "bot" },
    { id: 2, text: "Расскажи про Tailwind", from: "user" },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, text: "Новое сообщение", from: "user" },
    ]);
  };

  return (
    <div className="min-h-screen bg-zinc-1150 flex flex-col items-center justify-center">
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-5xl w-full mx-auto max-h-[85vh]">
        <div className="flex flex-col gap-3">
          {messages.map(({ id, text, from }) => (
            <div
              key={id}
              className={`max-w-[80%] px-3 py-2 rounded-lg ${
                from === "bot"
                  ? "self-start bg-zinc-800 text-zinc-100"
                  : "self-end bg-indigo-600 text-white"
              }`}
            >
              {text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="max-w-2xl w-full mx-auto p-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Сообщение"
            className="flex-1 bg-zinc-800 text-zinc-100 px-3 py-2 rounded-lg border border-zinc-700 focus:outline-none focus:border-indigo-500"
          />
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            onClick={sendMessage}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
