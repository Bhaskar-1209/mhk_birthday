import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BirthdayPage() {
  const [showNote, setShowNote] = useState(false);

  const staticNote = `
Hey Bestie ❤️,

Wishing you the most magical birthday ever!
You are the sunshine in my life and the reason behind so many of my smiles.
Here’s to your dreams, endless laughter, and all the happiness in the world — because you truly deserve it all.

With all my love,
— Bhaskar 💖
`;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 overflow-hidden text-center px-4 py-10">

      {/* Confetti Background */}
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/confetti.gif"
          alt="confetti"
          className="w-full h-full object-cover opacity-30"
        />
      </div> */}

      {/* Sprinkle CSS */}
      <style>{`
        .sprinkle-text { position: relative; }
        .sprinkle-text::after {
          content: '✨✨✨';
          position: absolute;
          top: -20px; left: 50%;
          transform: translateX(-50%);
          animation: twinkle 1.5s infinite ease-in-out;
          font-size: 1.25rem; color: #f472b6;
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: translateX(-50%) scale(0.9); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.15); }
        }
      `}</style>

      {/* Full-width "HAPPY BIRTHDAY" */}
      <motion.h1
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="sprinkle-text w-full text-5xl sm:text-6xl md:text-7xl font-extrabold text-pink-600 z-10 tracking-wide animate-pulse"
      >
        🎂 HAPPY BIRTHDAY ♥️
      </motion.h1>

      {/* Button to show note */}
      <button
        onClick={() => setShowNote((prev) => !prev)}
        className="mt-8 px-6 py-3 rounded-full bg-pink-500 text-white font-semibold text-lg shadow-lg hover:bg-pink-600 transition z-10"
      >
        {showNote ? "🙈 Hide My Note" : "💌 Read My Birthday Note"}
      </button>

      {/* Note Display */}
      <AnimatePresence>
        {showNote && (
          <motion.div
            key="note"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="z-10 mt-6 w-full max-w-2xl"
          >
            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-2xl text-left">
              <h3 className="text-xl font-bold text-pink-600 mb-4">My Birthday Note 💖</h3>
              <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {staticNote}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
