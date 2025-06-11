"use client";

import React from "react";

export default function Playlist() {
  const songs = [
    { id: 1, src: "https://www.youtube.com/embed/oj-MFDR2GSE?si=8da8XG6nyCjxPWRp", title: "YouTube video player" },
    { id: 2, src: "https://www.youtube.com/embed/-9DDpOaMlbU?si=EXhsfmTxaGGP3m8N", title: "YouTube video player" },
    { id: 3, src: "https://www.youtube.com/embed/C0ijwdlzltI?si=S5xrfClHyUoXNAun", title: "YouTube video player" },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-50 to-indigo-200 text-gray-900 p-6">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 mt-20 text-center">
        Uma PlayList que reflete um pouco do que sinto por você
      </h1>
      <p className="text-lg mb-8">De repente todas as músicas de amor são sobre você 💖</p>

      {/* Embed do Spotify */}
      <div className="mb-10 w-full max-w-lg">
        <iframe 
          style={{ borderRadius: "12px" }} 
          src="https://open.spotify.com/embed/playlist/70oDCRpmQgViRu1UNbAQFs?utm_source=generator&theme=0" 
          width="100%" 
          height="352" 
          allowFullScreen 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
          loading="lazy">
        </iframe>
      </div>

      {/* Vídeos do YouTube - cada um com seu próprio iframe */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((video) => (
          <div key={video.id} className="bg-white text-gray-900 p-4 rounded-lg shadow-lg flex flex-col items-center">
            <iframe 
              width="560" 
              height="315" 
              src={video.src} 
              title={video.title} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
            </iframe>
          </div>
        ))}
      </div>
    </main>
  );
}
