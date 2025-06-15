'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [opacityGIF, setOpacityGIF] = useState(1);
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = window.innerHeight;
      setOpacityGIF(Math.max(1 - scrollY / maxScroll, 0));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const startDate = new Date("2025-02-22T00:00:00");
    const updateCounter = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);

      setTimeElapsed(`${years} anos, ${months % 12} meses, ${days % 30} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[250vh] bg-white">
      {/* GIF animado no fundo */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center -z-10"
        animate={{ opacity: opacityGIF }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img src="/akai.gif" alt="Imagem animada" className="w-full h-full object-cover" />
      </motion.div>

      {/* Header transparente */}
      

      {/* Seção de fotos com transição fluida */}
      <div className="mt-[120vh] p-10 flex flex-col gap-10 bg-gradient-to-b from-transparent via-rose-200 to-slate-400 rounded-lg shadow-lg">
        {/* Contador de tempo aparece só ao rolar */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-red-600">Eu te amo há:</h2>
          <p className="text-2xl font-semibold text-gray-800 mt-2">{timeElapsed}</p>
        </motion.div>

        {/* Título da seção de fotos */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl font-bold text-gray-800 text-center"
        >
          Momentos únicos ao seu lado!
        </motion.h2>

        {/* Imagens alternadas com textos abaixo */}
        {[
          { src: "/nos.jpeg", alt: "Foto 1", text: "Nosso momento especial", direction: "right", delay: 0.2 },
          { src: "/maos-dadas.jpeg", alt: "Foto 2", text: "Sempre de mãos dadas", direction: "left", delay: 0.4 },
          { src: "/aliancas.jpeg", alt: "Foto 3", text: "Uma promessa eterna", direction: "right", delay: 0.6 },
          { src: "/quadro-pedido.jpeg", alt: "Foto 4", text: "O grande dia!", direction: "left", delay: 0.8 },
        ].map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: image.direction === "right" ? 150 : -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: image.delay }}
            className={`w-[70%] flex ${image.direction === "right" ? "justify-end" : "justify-start"} items-center mx-auto`}
          >
            <div className="flex flex-col items-center">
              <img src={image.src} alt={image.alt} className="w-[400px] h-[240px] rounded-xl shadow-lg object-cover" />
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: image.delay + 0.3 }}
                className="mt-3 text-lg text-gray-800 font-semibold text-center"
              >
                {image.text}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Seção romântica separada */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center p-10 bg-gradient-to-b from-rose-200 to-slate-400 rounded-lg shadow-lg mt-12 w-[80%] mx-auto"
      >
        <p className="text-xl font-semibold text-gray-100 italic">
          Entrelaçados pelo Amor e pelo Destino<br/>

Dizem que existe um fio invisível, vermelho como o amor verdadeiro, que conecta duas almas destinadas a se encontrar. Ele pode se esticar, se enrolar, até parecer desaparecer… mas jamais se rompe.

E eu acredito que esse fio me trouxe até você.

Mas mais do que o destino, o que nos une é o amor — e não qualquer amor, mas aquele que é descrito com perfeição em 1 Coríntios 13:

 O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se orgulha. Não maltrata, não procura seus interesses, não se ira facilmente, não guarda rancor. O amor não se alegra com a injustiça, mas se alegra com a verdade. Tudo sofre, tudo crê, tudo espera, tudo suporta.

Esse é o amor que quero viver com você. Um amor que não se apressa, que acolhe, que perdoa. Um amor que não se mede por palavras, mas por gestos, por presença, por fé. Ate que o Senhor venha eu quero poder te dizer com todas as minhas forças que Te Amo!  
        </p>
      </motion.div>
    </div>
    
  );
}
