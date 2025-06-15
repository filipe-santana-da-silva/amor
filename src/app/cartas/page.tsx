"use client";

import React, { useState, useEffect } from "react";

export default function Cartas() {
  const [mensagem, setMensagem] = useState("");
  const [cartas, setCartas] = useState<{ id: string; mensagem: string }[]>([]);

  useEffect(() => {
    const fetchCartas = async () => {
      const response = await fetch("/api/cartas");
      const data = await response.json();
      console.log("Cartas carregadas:", data);
      setCartas(data);
    };

    fetchCartas();
  }, []);

  const adicionarCarta = async () => {
    if (mensagem.trim()) {
      const response = await fetch("/api/cartas", {
        method: "POST",
        body: JSON.stringify({ mensagem }),
        headers: { "Content-Type": "application/json" }
      });

      const novaCarta = await response.json();
      setCartas([...cartas, novaCarta]);
      setMensagem("");
    }
  };

  const excluirCarta = async (id: string) => {
    if (!id) {
      console.error("Erro: ID da carta está indefinido!");
      return;
    }

    try {
      const response = await fetch(`/api/cartas/${id}`, { method: "DELETE" });

      if (!response.ok) {
        console.error("Erro ao excluir carta:", response.statusText);
        return;
      }

      setCartas((prevCartas) => prevCartas.filter((carta) => carta.id !== id));

    } catch (error) {
      console.error("Erro inesperado ao excluir carta:", error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-50 to-indigo-200 text-gray-900 p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">💌 Cartas para Você 💖</h1>
      <p className="text-lg mb-6 text-center">Mensagens sinceras do meu coração para o seu.</p>

      {/* Formulário para adicionar cartas */}
      <div className="mb-8 w-full max-w-md">
        <textarea
          className="w-full p-3 rounded-lg border border-gray-300 shadow-md"
          rows={4}
          placeholder="Escreva uma mensagem especial..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        ></textarea>
        <button
          className="mt-3 px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
          onClick={adicionarCarta}
        >
          Enviar Carta 💌
        </button>
      </div>

      {/* Cartas anexadas com botão de excluir */}
      <div className="relative flex flex-wrap justify-center gap-4 w-full max-w-[90%] sm:max-w-2xl">
        {cartas.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Nenhuma carta ainda... 💌</p>
        ) : (
          cartas.map((carta, index) => (
            <div
              key={index}
              className="relative bg-white text-gray-900 p-4 rounded-lg shadow-lg w-auto min-w-[200px] max-w-[90%] sm:max-w-[600px] min-h-[100px] flex flex-col items-center 
              border-2 border-gray-300 transition-transform transform hover:scale-105 hover:rotate-1"
            >
              {/* Selo postal corretamente posicionado */}
              <div className="w-full flex justify-end">
                <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                  💌
                </div>
              </div>

              <p className="text-lg font-serif text-center break-words overflow-wrap">
                {carta.mensagem}
              </p>

              {/* Botão de excluir abaixo do texto */}
              <button 
                className="mt-3 px-3 py-1 bg-red-500 text-white rounded shadow-md hover:bg-red-600 transition" 
                onClick={() => excluirCarta(carta.id)}
              >
                Excluir ❌
              </button>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
