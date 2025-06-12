"use client";

import React from "react";

const eventos = [
  {
    data: "01 de Janeiro de 2025",
    titulo: "O dia em que eu conheci meu amor!",
    descricao: "Esse foi de longe um dos dias mais importantes que já tivemos, porque marca um novo comeco, o comeco que o amor da minha vida, apareceu, marca o inicio de uma nova fase. Fase essa que ira durar até que o Senhor venha!",
    imagem: "/ano-novo.jpg", // Caminho da imagem
  },
  {
    data: "11/01/2025",
    titulo: "Nosso primeiro encontro ❤️",
    descricao: "Uma noite mágica cheia de vida, ali eu vi a minha vida ganhando cor, ali eu vi uma mulher que um dia eu levaria ao altar, ela estava tão linda, e eu nunca vou esquecer aquele sorriso cativante, e nem o jeito que você segurou o seu vestido florido, você é uma princesa por completo que me encantou com o seu jeito meigo de ser",
    imagem: "/primeiro-encontro.jpeg",
  },
  {
    data: "25/01/2025",
    titulo: "Nosso segundo Date 💌",
    descricao: "eu mal via a hora de poder te encontrar novamente, e naquele momento eu já estava decidindo como dar um passo a frente na nossa relação, eu queria saber qual era o número do seu dedo, mas não sabia como kkkkk, foi um momento divertido!",
    imagem: "/2.jpeg",
  },
  {
    data: "22/02/2025",
    titulo: "O grande dia!",
    descricao: "Eu estava muito nervoso, mas foi incrivel como tudo aconteceu, foi extraordinário ver os seus olhos cheios de brilho, eu mal podia acreditar que alguém tão especial como você, aparecesse, Deus é maravilhoso em tudo que faz, e eu sou muito grato a Ele por ter me enviado a mais bela de todas as rosas de seu jardim.",
    imagem: "/aliancas.jpeg",
  },
   {
    data: "18/04/2025",
    titulo: "Uma viagem incrível!",
    descricao: "foi um passeio incrível ao lado da minha nova familia, uma viagem que eu nunca irei esquecer",
    imagem: "/familia.jpeg",
  },
  {
    data: "Agora...",
    titulo: "Nossa história continua! 💖",
    descricao: "Cada dia ao seu lado é um novo capítulo de uma história que não tem fim.",
    imagem: '/no.jpeg', // Sem imagem, mas pode adicionar uma personalizada
  },
];

export default function TimelinePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-sky-700 text-gray-900 p-6">
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
