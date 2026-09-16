// index.js :arquivo principal do back-end

// importando o express.js para o projeto
// const express = require("express") - forma clássica (CommonJS Modules);
import express from 'express';

const app = express() // Criando uma instância do Express

// Importando o Controller de Produto
import ProdutoController from "./controllers/ProdutoController.js";
import ClienteController from './controllers/ClienteController.js';
import ServicoController from './controllers/ServicoController.js';
import UsuarioController from './controllers/UsuarioController.js';

// configurando o ejs
app.set('view engine', 'ejs');

// configurando a pasta "public" para arquivos estáticos
app.use(express.static("public"));

// Configurando as rotas
app.use("/",ProdutoController);
app.use("/",ClienteController);
app.use("/",ServicoController);
app.use("/",UsuarioController)

// aqui irão as rotas do site
// rota principal
// .get() -> cria uma rota na aplicação
app.get("/", (req, res) =>{
    res.render('index');
});

// Método do Express para iniciar o servidor back-end
// app.listen()
const port = 8080;
app.listen(port, (error) => {
    // tratando erros de inicialização
    if(error){
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`)
    // em caso de sucesso
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
})