import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div 
      className="flex flex-col items-center justify-center min-h-[85vh] text-center px-4 bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      
      <div className="z-10 flex flex-col items-center mt-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight">
          Igreja Batista
          <span className="block text-green-400 mt-2">Novas de Paz</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">
          Um lugar de recomeços, fé, esperança e comunhão.
        </p>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed drop-shadow-md">Seguindo, servindo e amando à Jesus Cristo.</p>
        
        <div className="flex flex-col sm:flex-row gap-5">
          {/* Botão Destaque (Violeta) */}
          <Link 
            to="/pedido-oracao" 
            className="bg-purple-700 text-white font-bold text-lg py-3 px-8 rounded-full shadow-xl hover:bg-purple-600 transition-transform hover:-translate-y-1"
          >
            Fazer um Pedido 🙏
          </Link>

          {/* Botão Secundário (Verde) */}
          <Link 
            to="/ministerios" 
            className="bg-transparent border-2 border-green-500 text-green-400 font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-green-500 hover:text-white transition-all hover:-translate-y-1"
          >
            Conhecer Ministérios
          </Link>
        </div>
      </div>
    </div>
  );
}