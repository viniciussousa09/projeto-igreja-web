import { useState, useEffect } from 'react';

export default function Mural() {
  const [pedidos, setPedidos] = useState([]);

  // 1. Verificamos se o usuário atual tem a chave de administrador
  const isAdmin = localStorage.getItem('isAdmin') === 'true';

  useEffect(() => {
    const buscarPedidos = async () => {
      try {
        const resposta = await fetch('https://igreja-backend-qbex.onrender.com/api/pedidos');
        const dados = await resposta.json();
        setPedidos(dados);
      } catch (erro) {
        console.error("Erro ao buscar pedidos:", erro);
      }
    };
    buscarPedidos();
  }, []);

  // 1. Nova função para lidar com a exclusão
  const lidarComExclusao = async (idParaApagar) => {
    // Pedimos uma confirmação para evitar cliques acidentais
    const confirmacao = window.confirm("Tem certeza que deseja apagar esta oração?");

    if (confirmacao) {
      try {
        // Chamamos a nossa rota DELETE, passando o ID na URL
        const resposta = await fetch(`https://igreja-backend-qbex.onrender.com/api/pedidos/${idParaApagar}`, {
          method: 'DELETE',
        });

        if (resposta.ok) {
          // Se o servidor apagou com sucesso, atualizamos a tela removendo o card
          // O filter() cria uma nova lista contendo apenas os pedidos que NÃO têm esse ID
          setPedidos(pedidos.filter((pedido) => pedido.id !== idParaApagar));
          alert("Pedido apagado com sucesso!");
        } else {
          alert("Erro ao apagar o pedido no servidor.");
        }
      } catch (erro) {
        console.error("Erro na requisição:", erro);
      }
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Mural de Orações 🙏</h1>

      {pedidos.length === 0 ? (
        <p className="text-gray-500 italic">Nenhum pedido de oração ainda. Seja o primeiro!</p>
      ) : (
        <div className="flex flex-col gap-4">
          {pedidos.map((pedido) => (

            // Layout do Card atualizado com o botão
            <div key={pedido.id} className="bg-white p-4 rounded-lg shadow border border-gray-200 flex justify-between items-start">
              <div>
                <h2 className="font-bold text-lg text-gray-800">{pedido.nome}</h2>
                <p className="text-gray-600 mt-2">{pedido.mensagem}</p>
              </div>

              {/* 2. O botão de excluir usando a Arrow Function para proteger a execução */}
              {isAdmin && (
                <button
                  onClick={() => lidarComExclusao(pedido.id)}
                  className="text-red-500 hover:text-red-700 font-medium text-sm bg-red-50 hover:bg-red-100 px-3 py-1 rounded transition-colors"
                >
                  Excluir
                </button>
                 )}
            </div>
         

          ))}
        </div>
      )}
    </div>
  );
}