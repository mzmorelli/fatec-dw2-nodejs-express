// index.js: arquivo principal do back-end.

// Importando o Express.js para o projeto
const express = require("express"); // Forma clássica (CommonJS Modules)
const app = express() // Criando uma instância do Express

// Configurando o EJS
app.set('view engine', 'ejs'); // EJS renderiza as páginas do site

// Aqui irão as rotas do site:
// Rota principal
// .get() -> cria uma rota na aplicação
app.get("/", (req, res) => {
    res.render("index");
});

// Rota de produtos
app.get("/produtos", (req, res) => {
    res.render("produtos");
});

// Rota de serviços
app.get("/servicos", (req, res) => {
    res.render("servicos");
});

// Rota de clientes
app.get("/clientes", (req, res) => {
    res.render("clientes");
});

// Rota de perfil
app.get("/perfil", (req, res) => {
    res.render("perfil");
});

// Método do Express para iniciar o servidor back-end
// app.listen()

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
    // Tratando erros de inicialização
    if(error){
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`);
    } else{
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
});

