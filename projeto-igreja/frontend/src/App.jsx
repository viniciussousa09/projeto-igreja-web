import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Agenda from './pages/Agenda';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Pastores from './pages/Pastores';
import PedidoOracao from './pages/PedidoOracao';
import Mural from './pages/Mural';
import AdminLogin from './pages/AdminLogin';
import Ministerios from './pages/Ministerios';
import Eventos from './pages/Eventos';
import GerenciarEventos from './pages/GerenciarEventos';
import Doacoes from './pages/Doacoes';
import Galeria from './pages/Galeria';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <BrowserRouter>

      {/* 2. Coloque o Navbar ANTES do Routes */}
      <Navbar />

      <main className="min-h-screen bg-gray-50 pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/pastores" element={<Pastores />} />
          <Route path="/pedido-oracao" element={<PedidoOracao />} />
          <Route path="/mural" element={<Mural />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/admin/eventos" element={<GerenciarEventos />} />
        </Routes>
      </main>

      <WhatsAppButton />

      <Footer />


    </BrowserRouter >
  );
}

export default App;