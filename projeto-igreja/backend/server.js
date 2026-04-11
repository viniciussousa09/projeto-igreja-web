// 1. Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importando as ferramentas
const express = require('express');
const cors = require('cors');
// 1. Importando o Prisma Client
const { PrismaClient } = require('@prisma/client');

// 1. Importações do Prisma e do Driver Postgres
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');

// Inicializando o Aplicativo Express
const app = express();

// 2. Configurando o "Tradutor" (Pool de conexões)
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 3. Inicializando o Prisma com o adaptador
const prisma = new PrismaClient({ adapter });

// Configurações (Middlewares)
app.use(cors()); //Permite que o Front-end converse com este Back-end sem bloqueios de segurança
app.use(express.json()); // Ensina o servidor a ler dados no formato JSON (ex: dados de formulários)

// Rota de teste ("Olá Mundo")
app.get('/api/status', (req, res) => {
    res.json({
        mensagem: 'Servidor da Igreja rodando com sucesso! 🙏',
        status: 'Online'
    });
});

// Rota para criar um novo Pedido de Oração
app.post('/api/pedidos', async (req, res) => {
    try {
        // 1. Extraímosos dados que o Front-end enviou no "corpo" (body) da requisição
        const { nome, mensagem } = req.body;

        // 2. Pedimos ao Prisma para criar um novo registro na tabela
        const novoPedido = await prisma.pedidoOracao.create({
            data: {
                nome: nome,
                mensagem: mensagem
            }
        });

        // 3. Devolvemos o registro recém-criado com o status 201 (Created)
        res.status(201).json(novoPedido);
    } catch (erro) {
        // Se algo der errado, avisamos no terminal e devolvemos um erro 500
        console.error("Erro ao criar pedido", erro);
        res.status(500).json({ erro: 'Falha ao salvar o pedido de oração.' });
    }
});

// Rota para LER (Buscar) todos os Pedidos de Oração
app.get('/api/pedidos', async (req, res) => {
    try {
        // O Prisma vai até o banco e "encontra muitos" (findMany) registros
        const todosPedidos = await prisma.pedidoOracao.findMany({
            // Vamos ordenar para que os pedidos mais novos apareçam no topo
            orderBy: {
                id: 'desc'
            }
        });

        // Devolve a lista em formato JSON com status 200 (OK)
        res.status(200).json(todosPedidos);

    } catch (erro) {
        console.error("Erro ao buscar pedidos:", erro);
        res.status(500).json({ erro: 'Falha ao buscar os pedidos de oração.' });
    }
});

// Rota para DELETAR um Pedido de Oração (Área Admin)
app.delete('/api/pedidos/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.pedidoOracao.delete({
            where: {
                id: id // <-- Removemos o parseInt! Agora passamos o 'id' puro.
            }
        });

        // 3. Avisamos que deu tudo certo
        res.status(200).json({ mensagem: 'Pedido apagado com sucesso!' });

    } catch (erro) {
        console.error("Erro ao deletar pedido:", erro);
        res.status(500).json({ erro: 'Falha ao deletar o pedido. Talvez ele não exista.' });
    }
});

// Rota de LOGIN para o painel administrativo
app.post('/api/login', (req, res) => {
    // Pegamos a senha que o React vai nos enviar no corpo da requisição
    const { senha } = req.body;

    // Senha secreta do nosso MVP (em um sistema real, isso ficaria criptografado no banco de dados)
    const SENHA_SECRETA = 'ibnp123';

    if (senha === SENHA_SECRETA) {
        // status 200: Tudo Ok! A senha está certa.
        res.status(200).json({ mensagem: 'Acesso concedido!', admin: true });
    } else {
        // Status 401: Unauthorized (Não autorizado). A senha está errada.
        res.status(401).json({ erro: 'Senha incorreta. Acesso negado.' });
    }
});

// Buscando todos os eventos
app.get('/api/eventos', async (req, res) => {
    const eventos = await prisma.evento.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(eventos);
});

// Criando novo evento
app.post('/api/eventos', async (req, res) => {
    try {
        const { titulo, data, descricao, imagemUrl } = req.body;
        
        const novoEvento = await prisma.evento.create({
            data: { titulo, data, descricao, imagemUrl }
        });
        
        res.status(201).json(novoEvento);
    } catch (erro) {
        console.error("Erro fatal ao criar evento:", erro);
        res.status(500).json({ erro: 'Falha ao salvar evento no banco de dados.' });
    }
});

// Apagando evento
app.delete('/api/eventos/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.evento.delete({ where: { id } });
    res.json({ mensagem: "Evento removido." });
});

// Ligando o servidor para escutar as requisições na porta definida
// Ele tenta pegar a porta do Render. Se não achar, usa a 5000 como segurança.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando perfeitamente na porta ${PORT}`);
});