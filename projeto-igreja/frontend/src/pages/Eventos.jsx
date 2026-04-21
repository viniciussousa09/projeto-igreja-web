import { useState, useEffect } from 'react';

export default function Eventos() {
    const [eventos, setEventos] = useState([]);

    // 1. Verificamos se quem está acessando é o Admin
    const isAdmin = localStorage.getItem('isAdmin') === 'true';

    useEffect(() => {
        fetch('https://igreja-backend-qbex.onrender.com/api/eventos')
            .then(res => res.json())
            .then(dados => setEventos(dados))
            .catch(erro => console.error("Erro ao buscar eventos:", erro));
    }, []);

    // 2. Função de exclusão 
    const lidarComExclusao = async (idParaApagar) => {
        const confirmacao = window.confirm("Tem certeza que deseja apagar este evento?");

        if (confirmacao) {
            try {
                const resposta = await fetch(`https://igreja-backend-qbex.onrender.com/api/eventos/${idParaApagar}`, {
                    method: 'DELETE',
                });

                if (resposta.ok) {
                    // Atualizando a tela instantaneamente removendo o card
                    setEventos(eventos.filter((evento) => evento.id !== idParaApagar));
                    alert("Evento apagado com sucesso!");
                } else {
                    alert("Erro ao apagar o evento no servidor.");
                }
            } catch (erro) {
                console.error("Erro na requisição:", erro);
            }
        }
    };

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-green-600 mb-8 text-center">Próximos Eventos 📅</h1>

            {eventos.length === 0 ? (
                <p className="text-center text-gray-500 bg-white p-8 rounded-lg shadow">Não há eventos agendados no momento.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {eventos?.map(evento => (
                        <div key={evento.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-purple-700 flex flex-col justify-between">
                            <div>
                                {evento.imagemUrl && <img src={evento.imagemUrl} className="w-full h-48 object-cover" />}
                                <div className="p-6">
                                    <span className="text-purple-700 font-bold">{evento.data}</span>
                                    <h2 className="text-2xl font-bold text-gray-800 my-2">{evento.titulo}</h2>
                                    <p className="text-gray-600">{evento.descricao}</p>
                                </div>
                            </div>

                            {/* 3. Renderização Condicional do Botão Excluir */}
                            {isAdmin && (
                                <div className="px-6 pb-6 mt-auto">
                                    <button
                                        onClick={() => lidarComExclusao(evento.id)}
                                        className="w-full text-red-600 bg-red-50 hover:bg-red-100 font-bold py-2 rounded transition-colors border border-red-200"
                                    >
                                        🗑️ Excluir Evento
                                    </button>
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}