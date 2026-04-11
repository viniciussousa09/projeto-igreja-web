import { useState } from 'react';

export default function Ministerios() {
  // Estado para controlar qual ministério está aberto na janela (null = nenhum)
  const [ministerioAberto, setMinisterioAberto] = useState(null);

  const listaMinisterios = [
    { 
      id: 1, 
      nome: "Louvor e Adoração", 
      foto: "https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
      resumo: "Conduzindo a igreja em adoração através da música.",
      detalhes: "Nosso ministério de louvor tem a missão de preparar o ambiente para a manifestação do Espírito Santo. Através de cânticos, instrumentos e adoração genuína, buscamos levar cada membro a uma experiência profunda com Deus durante os nossos cultos."
    },
    { 
      id: 2, 
      nome: "Ministério Infantil", 
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGCUK7j_YQR_YAqG-WvqoMEtsv7WuxDmqFA&s", 
      resumo: "Ensinando a palavra de Deus com alegria para as crianças.",
      detalhes: "Cremos que as crianças não são apenas o futuro da igreja, mas o presente! Nosso ministério infantil oferece um ambiente seguro, lúdico e cheio de amor, onde os pequenos aprendem princípios bíblicos através de histórias, músicas e brincadeiras."
    },
    { 
      id: 3, 
      nome: "Jovens e Adolescentes", 
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQm9nw0u15Sq2Y4A8G_Glpy-lBHhuvRidpUQ&s", 
      resumo: "Uma geração apaixonada por Jesus e focada no propósito.",
      detalhes: "Focados em ajudar nossos jovens a enfrentar os desafios da sociedade atual sem perder a essência cristã. Promovemos encontros dinâmicos, retiros e acampamentos para fortalecer a amizade e o compromisso com a Palavra de Deus."
    },
    { 
      id: 4, 
      nome: "Missões e Evangelismo", 
      foto: "https://missoesnacionais.org.br/wp-content/uploads/2025/07/Logo-com-sombra-1024x822.png", 
      resumo: "… e ainda há muitíssima terra para conquistar",
      detalhes: "O Ide de Jesus é o nosso combustível. Este ministério organiza ações sociais na comunidade, visitas em hospitais, evangelismo nas ruas e também apoia missionários que estão pregando o evangelho em outras nações."
    },
    { 
      id: 5, 
      nome: "Ministério de Mulheres", 
      foto: "https://portalcogicbrasil.com/wp-content/uploads/2015/02/mulheres-igreja-vivem-mais-1.jpg", 
      resumo: "…Mulheres Coram Deo",
      detalhes: "Um espaço dedicado ao cuidado, aconselhamento e edificação da mulher cristã. Realizamos chás, congressos e reuniões de oração para fortalecer o papel da mulher na família, na sociedade e na obra de Deus."
    },
    { 
      id: 6, 
      nome: "Ministério de Homens", 
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYVd72T8dv8vaGzB2CA7WCi8e_w1Ke73eivg&s", 
      resumo: "Homens que Amam a Deus",
      detalhes: "Focado em encorajar os homens a assumirem sua posição de liderança espiritual em seus lares. Promovemos cafés, palestras e momentos de comunhão para que os homens cresçam juntos em sabedoria e integridade."
    }
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto relative">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Nossos Ministérios</h1>
      
      {/* Grid de Cards (Agora Clicáveis) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listaMinisterios.map((min) => (
          <div 
            key={min.id} 
            onClick={() => setMinisterioAberto(min)}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-b-4 border-purple-700 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
          >
            <img src={min.foto} alt={min.nome} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{min.nome}</h2>
              <p className="text-gray-600 text-sm mb-4">{min.resumo}</p>
              <span className="text-purple-700 font-bold text-sm flex items-center gap-1">
                Saber mais <span>→</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL: Janela Flutuante que abre ao clicar */}
      {ministerioAberto && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col animate-fade-in-up">
            
            {/* Imagem no topo do modal */}
            <div className="relative h-48">
              <img src={ministerioAberto.foto} alt={ministerioAberto.nome} className="w-full h-full object-cover" />
              <button 
                onClick={() => setMinisterioAberto(null)}
                className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center font-bold shadow hover:bg-gray-200 transition-colors"
              >
                X
              </button>
            </div>

            {/* Conteúdo do modal */}
            <div className="p-8">
              <h2 className="text-3xl font-bold text-green-600 mb-4">{ministerioAberto.nome}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {ministerioAberto.detalhes}
              </p>
              
              <button 
                onClick={() => setMinisterioAberto(null)}
                className="w-full bg-purple-700 text-white font-bold py-3 rounded-lg hover:bg-purple-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}