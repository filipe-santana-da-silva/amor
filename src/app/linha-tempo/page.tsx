"use client";

import React from "react";

const eventos = [
  {
    data: "12 de Junho de 2020",
    titulo: "Nosso primeiro encontro ❤️",
    descricao: "Aquele dia especial em que nos conhecemos e tudo começou!",
    imagem: "/images/encontro.jpg", // Caminho da imagem
  },
  {
    data: "25 de Dezembro de 2020",
    titulo: "Primeiro Natal juntos 🎄",
    descricao: "Uma noite mágica cheia de amor e carinho!",
    imagem: "/images/natal.jpg",
  },
  {
    data: "14 de Fevereiro de 2021",
    titulo: "Dia dos Namorados 💌",
    descricao: "O dia em que trocamos nossos primeiros presentes românticos!",
    imagem: "/images/namorados.jpg",
  },
  {
    data: "10 de Maio de 2022",
    titulo: "Viagem dos sonhos ✈️",
    descricao: "Exploramos juntos um novo lugar e criamos memórias incríveis!",
    imagem: "/images/viagem.jpg",
  },
  {
    data: "Agora...",
    titulo: "Nossa história continua! 💖",
    descricao: "Cada dia ao seu lado é um novo capítulo especial.",
    imagem: null, // Sem imagem, mas pode adicionar uma personalizada
  },
];

export default function TimelinePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-red-200 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-6 text-red-500">💖 Linha do Tempo do Amor 💌</h1>

      <div className="relative w-full max-w-md">
        {eventos.map((evento, index) => (
  <div key={index} className="mb-6 flex items-center">
    {/* Linha vertical */}
    <div className="w-1 bg-red-400 h-full absolute left-10"></div>

    {/* Ícone do evento */}
    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-md z-10 ml-10">
      ❤️
    </div>

    {/* Texto do evento */}
    <div className="ml-6 bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-lg font-semibold text-red-500">{evento.titulo}</h2>
      <p className="text-sm text-gray-700">{evento.data}</p>
      <p className="mt-2 text-gray-900">{evento.descricao}</p>

      {/* Exibe a imagem se existir */}
      {evento.imagem && (
        <img
          src={evento.imagem}
          alt={evento.titulo}
          className="mt-4 rounded-lg shadow-md w-full"
        />
      )}
    </div>
  </div>
))}

      </div>
    </main>
  );
}
