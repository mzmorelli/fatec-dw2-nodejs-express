// index.js :arquivo principal do back-end

// importando o express.js para o projeto
const express = require("express") // forma clássica (CommonJS Modules);

const app = express() // Criando uma instância do Express

// configurando o ejs
app.set('view engine', 'ejs');

// Configurando a pasta 'public' para arquivos estáticos
app.use(express.static('public'));

// aqui irão as rotas do site
// rota principal
// .get() -> cria uma rota na aplicação
app.get("/", (req, res) =>{
    res.render('index');
});

// rota de produtos

app.get("/produtos", (req, res) =>{

    // lista de produtos (dados mockados)
    // futuramente os dados virão do banco de dados
    // array de objetos
    const produtos = [
        {nome: "Computador", marca: "Lenovo", preco: 3500},
        {nome: "Celular", marca: "Samsung", preco: 4500},
        {nome: "Notebook", marca: "Dell", preco: 5100},
        {nome: "Tablet", marca: "Asus", preco: 2400},
    ];
    
    res.render('produtos', {
    // enviando a lista de produtos para a página
        produtos: produtos,
    });

    
});

// rota clientes

app.get("/clientes", (req, res) =>{

    const clientes = [
        {nome: "Diego Max", cpf: "999.999.999-99"},
        {nome: "Gregory Souza", cpf: "888.888.888-88"},
        {nome: "Laura Júlia", cpf: "777.777.777-77"},
        {nome: "Mario Takahashi", cpf: "555.555.555-55"},

    ];

    res.render('clientes', {
        clientes: clientes,
    });
});

// rota perfil

app.get("/perfil", (req, res) =>{
    res.render('perfil');
});

app.get("/servicos", (req, res) =>{
    res.render('servicos');
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