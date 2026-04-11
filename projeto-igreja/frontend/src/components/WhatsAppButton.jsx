import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  
  const numeroWhatsApp = "5511982646391"; 
  
  // 2. Mensagem automática que já vem preenchida quando a pessoa clica
  const mensagem = "A Paz do Senhor! Gostaria de falar com a Igreja Batista Novas de Paz.";
  
  // link oficial da API do WhatsApp
  const linkZap = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  return (
    <a
      href={linkZap}
      target="_blank"
      rel="noreferrer"
      // Classes do Tailwind para fazer o botão flutuar fixo (fixed) no canto inferior direito (bottom-6 right-6)
      // O 'z-50' garante que ele fique na frente das fotos da galeria e outros elementos
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 z-50 hover:scale-110 flex items-center justify-center animate-bounce"
      title="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
}