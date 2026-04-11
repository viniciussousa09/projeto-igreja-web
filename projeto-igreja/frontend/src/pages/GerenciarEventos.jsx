import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GerenciarEventos() {
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagemUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    // Protegendo a página: Só entra se for Admin
    useEffect(() => {
        const admin = localStorage.getItem('isAdmin');
        if (admin !== 'true') {
            navigate('/admin');
        }
    }, [navigate]);

    const salvarEvento = async (e) => {
        e.preventDefault();
        const novoEvento = { titulo, data, descricao, imagemUrl };

        try {
            const res = await fetch('http://localhost:3000/api/eventos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novoEvento)
            });

            if (res.ok) {
                alert("Evento cadastrado com sucesso!🎉");
                setTitulo(''); setData(''); setDescricao(''); setImageUrl('');
                navigate('/eventos');
            } else {
                alert("Ops! O servidor recusou o evento. Olhe o terminal do Back-end.");
            }
        } catch (err) {
            alert("Erro ao tentar salvar o evento. O servidor está rodando?");
            console.error(err);
        }
    }; 

    return (
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Cadastrar Novo Evento 📅</h1>

            <form onSubmit={salvarEvento} className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 flex flex-col gap-4">
                <div>
                    <label className="block text-gray-700 font-bold mb-1">Título do Evento</label>
                    <input type="text" className="w-full border p-2 rounded" value={titulo} onChange={e => setTitulo(e.target.value)} required placeholder="Ex: Culto de Jovens" />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-1">Data e Horário</label>
                    <input type="text" className="w-full border p-2 rounded" value={data} onChange={e => setData(e.target.value)} required placeholder="Ex: 25 de Outubro às 19:30" />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-1">URL da Imagem (Opcional)</label>
                    <input type="text" className="w-full border p-2 rounded" value={imagemUrl} onChange={e => setImageUrl(e.target.value)} placeholder="Cole o link de uma foto aqui" />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-1">Descrição</label>
                    <textarea className="w-full border p-2 rounded h-32" value={descricao} onChange={e => setDescricao(e.target.value)} required placeholder="Detalhes sobre o evento..."></textarea>
                </div>

                <button type="submit" className="bg-purple-700 text-white font-bold py-3 rounded-lg hover:bg-purple-800 transition-colors">
                    Publicar no Site
                </button>
            </form>
        </div>
    );
} 