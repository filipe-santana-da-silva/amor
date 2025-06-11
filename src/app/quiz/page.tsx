"use client";

import React, { useState } from "react";

const perguntas = [
  {
    pergunta: "Qual é o símbolo mais associado ao amor?",
    opcoes: ["Estrela", "Coração", "Lua", "Flor"],
    resposta: 1,
  },
  {
    pergunta: "Qual é a flor tradicionalmente dada no Dia dos Namorados?",
    opcoes: ["Tulipa", "Girassol", "Rosa", "Orquídea"],
    resposta: 2,
  },
  {
    pergunta:
      "Qual é o filme romântico que inclui a famosa frase 'Eu sou apenas uma garota, parada na frente de um garoto, pedindo para ele amá-la'?",
    opcoes: [
      "Titanic",
      "Um Lugar Chamado Notting Hill",
      "Diário de uma Paixão",
      "Como Eu Era Antes de Você",
    ],
    resposta: 1,
  },
  {
    pergunta: "Qual é a data oficial do Dia dos Namorados no Brasil?",
    opcoes: ["14 de fevereiro", "12 de junho", "25 de dezembro", "7 de setembro"],
    resposta: 1,
  },
  {
    pergunta: "Qual é o nome do deus romano do amor?",
    opcoes: ["Apolo", "Cupido", "Júpiter", "Marte"],
    resposta: 1,
  },
];

export default function QuizPage() {
  const [indice, setIndice] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<number | null>(
    null
  );

  const verificarResposta = () => {
    if (respostaSelecionada === perguntas[indice].resposta) {
      setPontuacao(pontuacao + 1);
    }
    setIndice(indice + 1);
    setRespostaSelecionada(null);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-red-200 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-6 text-red-500">💖 Quiz do Amor 💌</h1>

      {indice < perguntas.length ? (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-lg font-semibold text-center mb-4">
            {perguntas[indice].pergunta}
          </h2>
          <div className="flex flex-col space-y-3">
            {perguntas[indice].opcoes.map((opcao, i) => (
              <button
                key={i}
                className={`w-full p-3 rounded-lg text-white font-medium ${
                  respostaSelecionada === i
                    ? "bg-red-600"
                    : "bg-red-400 hover:bg-red-500"
                } transition`}
                onClick={() => setRespostaSelecionada(i)}
              >
                {opcao}
              </button>
            ))}
          </div>
          <button
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition w-full"
            onClick={verificarResposta}
            disabled={respostaSelecionada === null}
          >
            Confirmar Resposta ✅
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h2 className="text-2xl font-bold text-red-500">🎉 Parabéns! 🎉</h2>
          <p className="text-lg">Você acertou {pontuacao} de {perguntas.length} perguntas!</p>
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={() => {
              setIndice(0);
              setPontuacao(0);
            }}
          >
            Jogar novamente 🔄
          </button>
        </div>
      )}
    </main>
  );
}
