import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoIgreja from '../assets/logo.png'; 
import { FaInstagram, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  // Estado para controlar se o menu de celular está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false);

  // Função para fechar o menu automaticamente ao clicar em um link
  const fecharMenu = () => setMenuAberto(false);

  return (
    <nav className="bg-white shadow-md border-b-4 border-green-500 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center relative z-50 bg-white">
        
        {/* A Sua Logo Oficial */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src={logoIgreja} alt="Logo Igreja Batista Novas de Paz" className="h-26 object-contain" />
        </Link>

        <div className="hidden lg:flex gap-6 font-medium items-center text-gray-700">
          <Link to="/" className="hover:text-purple-700 transition-colors">Início</Link>
          <Link to="/quem-somos" className="hover:text-purple-700 transition-colors">Quem Somos</Link>
          <Link to="/pastores" className="hover:text-purple-700 transition-colors">Pastores</Link>
          <Link to="/ministerios" className="hover:text-purple-700 transition-colors">Ministérios</Link>
          <Link to="/galeria" className="hover:text-purple-700 transition-colors">Galeria</Link>
          <Link to="/eventos" className="hover:text-purple-700 transition-colors">Eventos</Link>
          <Link to="/mural" className="hover:text-purple-700 transition-colors">Mural</Link>
          
          <div className="h-6 w-px bg-gray-300 mx-2"></div>

          <a href="https://www.instagram.com/ibnovasdepaz/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-purple-700 transition-colors flex items-center">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://www.youtube.com/@IBNP-3" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-red-600 transition-colors flex items-center">
            <FaYoutube className="text-3xl" />
          </a>

          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          
          <Link to="/pedido-oracao" className="text-green-600 border border-green-600 px-4 py-2 rounded-full hover:bg-green-50 transition-colors text-sm">Pedir Oração</Link>
          <Link to="/doacoes" className="bg-purple-700 text-white px-5 py-2 rounded-full shadow hover:bg-purple-800 transition-colors text-sm">Doar</Link>
        </div>

        <button 
          className="lg:hidden text-3xl text-green-600 focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {/* Se estiver aberto, mostra o X. Se estiver fechado, mostra os risquinhos */}
          {menuAberto ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuAberto && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl flex flex-col px-6 py-4 animate-fade-in-up z-40">
          <Link to="/" onClick={fecharMenu} className="py-3 border-b border-gray-100 text-gray-700 font-medium hover:text-green-600">Início</Link>
          <Link to="/quem-somos" onClick={fecharMenu} className="py-3 border-b border-gray-100 text-gray-700 font-medium hover:text-green-600">Quem Somos</Link>
          <Link to="/pastores" onClick={fecharMenu} className="py-3 border-b border-gray-100 text-gray-700 font-medium hover:text-green-600">Pastores</Link>
          <Link to="/ministerios" onClick={fecharMenu} className="py-3 border-b border-gray-100 text-gray-700 font-medium hover:text-green-600">Ministérios</Link>
          <Link to="/galeria" onClick={fecharMenu} className="py-3 border-b border-gray-100 text-gray-700 font-medium hover:text-green-600">Galeria</Link>
          <Link to="/eventos" onClick={fecharMenu} className="py-3 border-b border-gray-100 text-gray-700 font-medium hover:text-green-600">Eventos</Link>
          <Link to="/mural" onClick={fecharMenu} className="py-3 border-b border-gray-100 text-gray-700 font-medium hover:text-green-600">Mural</Link>

          {/* Redes Sociais no Celular */}
          <div className="flex justify-center gap-8 py-6 border-b border-gray-100">
            <a href="https://www.instagram.com/ibnovasdepaz/" target="_blank" rel="noreferrer" className="text-purple-700 text-4xl"><FaInstagram /></a>
            <a href="https://www.youtube.com/@IBNP-3" target="_blank" rel="noreferrer" className="text-red-600 text-4xl"><FaYoutube /></a>
          </div>

          {/* Botões de Ação no Celular */}
          <div className="flex flex-col gap-4 mt-6 mb-4">
            <Link to="/pedido-oracao" onClick={fecharMenu} className="text-center text-green-600 border-2 border-green-600 px-4 py-3 rounded-xl font-bold">Pedir Oração</Link>
            <Link to="/doacoes" onClick={fecharMenu} className="text-center bg-purple-700 text-white px-4 py-3 rounded-xl font-bold shadow-md">Dízimos e Ofertas</Link>
          </div>
        </div>
      )}
    </nav>
  );
}