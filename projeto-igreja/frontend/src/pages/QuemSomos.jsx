export default function QuemSomos() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Quem Somos</h1>
      
      <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-purple-700">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Nossa História e Propósito</h2>
        <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
          <p>
            A Igreja Batista Novas de Paz nasceu no dia 07/09/1962, com o propósito de ser um farol de esperança na nossa comunidade. 
            Acreditamos em semear a palavra de Deus com amor, cultivar uma fé inabalável e colher a paz que só Cristo pode oferecer.
          </p>
          <p>
            Somos uma família espiritual dedicada à adoração, ao ensino bíblico profundo e ao serviço genuíno ao próximo. 
            Nossas portas estão abertas para todos aqueles que buscam um encontro verdadeiro com Jesus e desejam caminhar em comunhão com irmãos na fé.
          </p>
        </div>
        
        <div className="mt-10 p-6 bg-green-50 rounded-xl border border-green-200">
          <p className="text-green-800 leading-relaxed text-center font-bold italic text-lg">
            "E conhecereis a verdade, e a verdade vos libertará."
            <span className="block mt-2 text-sm text-green-600 uppercase tracking-widest">— João 8:32</span>
          </p>
        </div>
      </div>
    </div>
  );
}