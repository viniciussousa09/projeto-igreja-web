import { useState } from "react";
//  Importamos o UseNavigate para trocar de página via código
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const lidarComLogin = async (evento) => {
        evento.preventDefault();

        try {
            const resposta = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ senha: senha })
            });

            if (resposta.status === 200) {
                // 1. Guardamos a "chave" na memória do navegador
                localStorage.setItem('isAdmin', 'true');

                alert("Acesso concedido! Bem vindo ao painel.");

                // 2. Redirecionamos o pastor para o mural
                navigate('/mural');
            } else {
                alert("Senha incorreta. Acesso negado. ");
                setSenha(''); //Limpa o campo para ele tentar de novo
            }
        } catch (erro) {
            console.error("Erro ao conectar", erro);
        }
    };

    return (
    <div className="p-8 max-w-sm mx-auto mt-10 bg-white rounded-lg shadow-md border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Acesso Restrito 🔒</h1>
      
      <form onSubmit={lidarComLogin} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Senha de Administrador</label>
          <input 
            type="password" 
            placeholder="Digite a senha..."
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button 
          type="submit"
          className="bg-gray-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-black transition-colors"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}