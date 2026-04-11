import { useState } from 'react';

// 1. IMPORTANDO AS 9 FOTOS REAIS
// (Certifique-se de que os arquivos estão salvos com esses nomes exatos na pasta assets/galeria/)
import foto1 from '../assets/galeria/galeria-1.jpg';
import foto2 from '../assets/galeria/galeria-2.jpg';
import foto3 from '../assets/galeria/galeria-3.jpg';
import foto4 from '../assets/galeria/galeria-4.jpg';
import foto5 from '../assets/galeria/galeria-5.jpg';
import foto6 from '../assets/galeria/galeria-6.jpg';
import foto7 from '../assets/galeria/galeria-7.jpg';
import foto8 from '../assets/galeria/galeria-8.jpg';
import foto9 from '../assets/galeria/galeria-9.jpg';

export default function Galeria() {
  const [fotoAmpliada, setFotoAmpliada] = useState(null);

  // 2. LISTA ATUALIZADA COM AS 9 FOTOS
  const fotosGaleria = [
    { id: 1, src: foto1, alt: "Momento de Culto - Igreja Batista Novas de Paz" },
    { id: 2, src: foto2, alt: "Comunhão" },
    { id: 3, src: foto3, alt: "Pastor Rodrigo ministrando a palavra" },
    { id: 4, src: foto4, alt: "Irmão Samuel ministrando a palavra" },
    { id: 5, src: foto5, alt: "Equipe de louvor" },
    { id: 6, src: foto6, alt: "Thallys baterista" },
    { id: 7, src: foto7, alt: "PG na Casa da irmã Therezinha" },
    { id: 8, src: foto8, alt: "PG na casa dos irmãos Vinicius e Lais" },
    { id: 9, src: foto9, alt: "Culto de /jovens na PIB Baeta Neves" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto relative">
      <h1 className="text-4xl font-bold text-green-600 mb-2 text-center">Nossa Galeria</h1>
      <p className="text-gray-600 text-center mb-10 text-lg">Registros da nossa caminhada de fé e comunhão.</p>
      
      {/* GRADE DE FOTOS (Grid 3x3 perfeito no desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {fotosGaleria.map((foto) => (
          <div 
            key={foto.id} 
            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[4/3] bg-gray-100"
            onClick={() => setFotoAmpliada(foto)}
          >
            {/* A Imagem na Grade */}
            <img 
              src={foto.src} 
              alt={foto.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            
            {/* Efeito de sobreposição (Overlay invisível até passar o mouse) */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-4xl">
                🔍
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL / LIGHTBOX (Janela de ampliação) */}
      {fotoAmpliada && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setFotoAmpliada(null)}
        >
          {/* Botão Fechar (X) */}
          <button 
            className="absolute top-6 right-6 text-white text-5xl font-light hover:text-red-500 transition-colors z-[110]"
            onClick={() => setFotoAmpliada(null)}
          >
            &times;
          </button>

          {/* O contêiner da imagem ampliada */}
          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img 
              src={fotoAmpliada.src} 
              alt={fotoAmpliada.alt} 
              className="max-w-full max-h-[80vh] rounded shadow-2xl object-contain animate-zoom-in" 
            />
            {/* Legenda abaixo da foto */}
            <p className="text-white mt-4 text-center text-lg bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {fotoAmpliada.alt}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}