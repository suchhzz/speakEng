"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Привет! Как я могу помочь?", from: "bot" },
    { id: 2, text: "Расскажи про Tailwind", from: "user" },
  ]);

  const [isBlurred, setIsBlurred] = useState<boolean>(false);
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

  const toggleBlur = () => setIsBlurred(!isBlurred);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Контейнер с расширенной областью для blur */}
      <div className="w-full relative max-w-5xl mx-auto flex flex-col h-[85vh]">
        {/* Blur overlay с анимацией */}
        <div
          className={`fixed inset-0 backdrop-blur-xl z-10 transition-all duration-500 ease-in-out ${
            isBlurred
              ? "opacity-100"
              : "opacity-0 pointer-events-none backdrop-blur-none"
          }`}
          style={{
            width: "calc(100% + 40px)",
            height: "calc(100% + 40px)",
            margin: "-20px",
          }}
        >
          <div className="flex w-full h-full items-center justify-center">
            <div className="rounded-[50%] w-[200px] h-[200px] bg-red-300"></div>
          </div>
        </div>

        {/* Контент чата с анимированным блюром */}
        <div
          className={`flex-1 overflow-y-auto px-4 py-6 relative z-0 transition-all duration-500 ease-in-out ${
            isBlurred ? "backdrop-blur-sm" : "backdrop-blur-none"
          }`}
        >
          <div className="flex flex-col gap-3">
            {messages.map(({ id, text, from }) => (
              <div
                key={id}
                className={`max-w-[80%] px-4 py-3 rounded-xl transition-colors duration-200 ${
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

        {/* Панель ввода с анимированным блюром */}
        <div
          className={`p-4 relative z-0 transition-all duration-500 ease-in-out ${
            isBlurred ? "backdrop-blur-sm" : "backdrop-blur-none"
          }`}
        >
          <div className="max-w-2xl mx-auto flex gap-2">
            <input
              type="text"
              placeholder="Сообщение"
              className="flex-1 bg-zinc-800 text-zinc-100 px-4 py-2 rounded-lg border border-zinc-700 focus:outline-none focus:border-indigo-500 transition-colors duration-200"
            />
            <button
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              onClick={sendMessage}
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Кнопка переключения blur */}
      <button
        className="fixed left-10 top-10 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 z-20"
        onClick={toggleBlur}
      >
        {isBlurred ? "Unblur" : "Blur"}
      </button>
    </div>
  );
}
