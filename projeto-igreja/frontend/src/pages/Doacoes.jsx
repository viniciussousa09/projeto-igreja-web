import qrCodePix from '../assets/qrcode-pix.png';

export default function Doacoes() {
  const chavePix = "58.799.784/0001-40"; 

  return (
    <div className="p-8 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Faça sua oferta</h1>
      <p className="text-gray-600 text-lg mb-8">Sua generosidade ajuda a Igreja Batista Novas de Paz a continuar semeando o Evangelho.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Card do PIX */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-purple-700 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Via PIX</h2>
          <p className="text-gray-500 mb-6">Abra o app do seu banco e escaneie o código abaixo:</p>
          
          {/* Imagem do QR Code Local */}
          <div className="p-4 bg-white border-2 border-gray-200 rounded-xl shadow-inner mb-6">
            <img src={qrCodePix} alt="QR Code do PIX" className="w-48 h-48 object-contain" />
          </div>

          <p className="text-sm text-gray-500 font-bold mb-2">Ou copie a chave (CNPJ):</p>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-purple-800 font-bold break-all select-all w-full">
            {chavePix}
          </div>
          <p className="mt-4 text-xs text-gray-400">Titular: Igreja Batista Novas de Paz</p>
        </div>

        {/* Card de Informação */}
        <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200 flex flex-col justify-center h-full">
          <h3 className="text-xl font-bold text-green-700 mb-4">Por que doar?</h3>
          <p className="text-green-800 italic leading-relaxed">
            "Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria."
            <span className="block mt-2 font-bold">— 2 Coríntios 9:7</span>
          </p>
        </div>
      </div>
    </div>
  );
}