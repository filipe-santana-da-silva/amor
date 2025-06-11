"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link"; // Importando o Link do Next.js

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-transparent p-4 flex justify-between items-center z-50">
        <h1 className="text-white text-xl font-bold"></h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl focus:outline-none bg-gray-900 p-2 rounded-lg"
        >
          ☰
        </button>
      </header>

      {/* Menu lateral animado */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: menuOpen ? 0 : -300 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-6 flex flex-col gap-4 shadow-lg z-50"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="self-end text-xl"
        >
          ✖
        </button>
        <nav className="mt-6 flex flex-col gap-4">
          <Link href="/" className="text-lg hover:underline">Página Inicial</Link>
          <Link href="/cartas" className="text-lg hover:underline">Cartas</Link>
          <Link href="/linha-tempo" className="text-lg hover:underline">Linha do Tempo</Link>
          <Link href="/playlist" className="text-lg hover:underline">PlayList</Link>
          <Link href="/quiz" className="text-lg hover:underline">Quiz</Link>
        </nav>
      </motion.div>
    </div>
  );
}
