import { Link } from 'react-router-dom';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white pt-6 pb-4 mt-8 border-t-4 border-green-500">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Coluna 1: Sobre a Igreja */}
        <div>
          <h2 className="text-2xl font-bold text-white-400 mb-2">Igreja Batista Novas de Paz</h2>
          <p className="text-purple-200 leading-relaxed">
            Semeando a palavra, cultivando a fé e colhendo a paz em Cristo Jesus. Um lugar de comunhão e adoração.
          </p>
        </div>

        {/* Coluna 2: Links Rápidos */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Navegação Rápida</h3>
          <ul className="space-y-2 text-purple-200">
            <li><Link to="/ministerios" className="hover:text-green-400 transition-colors">Nossos Ministérios</Link></li>
            <li><Link to="/eventos" className="hover:text-green-400 transition-colors">Agenda de Eventos</Link></li>
            <li><Link to="/pedido-oracao" className="hover:text-green-400 transition-colors">Pedir Oração</Link></li>
            <li><Link to="/doacoes" className="hover:text-green-400 transition-colors">Dízimos e Ofertas</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contato e Endereço */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Fale Conosco</h3>
          <ul className="space-y-3 text-purple-200">
            <li className="flex items-start gap-2">
              <span className="text-green-400">📍</span>
              <span>Rua Desembargador Silva Pereira, 45<br/>São Paulo - SP</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">📞</span>
              <span>(11) 2015-9669</span>
              <span>(11) 98264-6391</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✉️</span>
              <span>igrejabatistanovaspaz@gmail.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Linha Divisória e Direitos Autorais */}
      <div className="max-w-6xl mx-auto px-4 mt-6 pt-4 border-t border-purple-800 text-center text-purple-300 text-sm">
        <p>&copy; {anoAtual} Igreja Batista Novas de Paz. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}