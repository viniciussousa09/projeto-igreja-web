// 1. Importamos o hook useState do React
import { useState } from 'react';

export default function PedidoOracao() {
    // 2. Criamos os estados para guardar o que o usuário digita (começam vazios)
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    // 3. Função que roda quando o usuário clica em "Enviar Pedido"
    const lidarComEnvio = async (evento) => {
        evento.preventDefault(); // Evita que a página recarregue (comportamento padrão do HTML)

        try {
            // 2. Usamos o fetch (e o seu palpite, o await!) para fazer o POST
            const resposta = await fetch('http://localhost:5000/api/pedidos', {
                method: 'POST', // O mesmo método que usamos no Thunder Client
                headers: {
                    'Content-Type': 'application/json' // Avisamos o servidor que o pacote é um JSON
                },
                // 3. Transformamos as variáveis de estado do React em um texto JSON
                body: JSON.stringify({
                    nome: nome,
                    mensagem: mensagem
                })
            });

            if (resposta.status === 201) {
                alert("Seu pedido de oração foi enviado com sucesso! 🙏");

                // Limpando os campos do formulário:
                setNome('');
                setMensagem('');

            } else {
                alert("Ops, algo deu errado no servidor.");
            }

        } catch (error) {

        }

        // Por enquanto, vamos apenas mostrar no painel de desenvolvedor para testar
        console.log("Dados prontos para viajar para a nuvem:", { nome, mensagem });
    };

    return (
        <div className="p-8 max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-purple-600 mb-6">Fazer Pedido de Oração 🙏</h1>

            {/* Adicionamos o evento onSubmit na tag form */}
            <form onSubmit={lidarComEnvio} className="flex flex-col gap-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Seu Nome</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome"
                        className="w-full border border-gray-300 rounded-lg p-2"
                        value={nome} // Amarra o valor do campo ao estado do React
                        onChange={(evento) => setNome(evento.target.value)} // Atualiza o estado a cada letra digitada
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">Seu Pedido</label>
                    <textarea
                        rows="4"
                        placeholder="Escreva sua oração aqui..."
                        className="w-full border border-gray-300 rounded-lg p-2"
                        value={mensagem}
                        onChange={(evento) => setMensagem(evento.target.value)}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-700"
                >
                    Enviar Pedido
                </button>
            </form>
        </div>
    );
}