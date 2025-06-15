"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Importando o Link do Next.js

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora dele, incluindo toque no celular
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // Adicionando suporte para mobile
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-transparent p-4 flex justify-between items-center z-50">
        <h1 className="text-white text-xl font-bold"></h1>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl focus:outline-none active:ring-2 bg-gray-900 p-2 rounded-lg"
        >
          ☰
        </button>
      </header>

      {/* Menu lateral animado */}
      <motion.div
        ref={menuRef}
        initial={{ x: -300 }}
        animate={{ x: menuOpen ? 0 : -300 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 h-full w-[80%] sm:w-64 bg-gray-900 text-white p-6 flex flex-col gap-4 shadow-lg z-50"
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
