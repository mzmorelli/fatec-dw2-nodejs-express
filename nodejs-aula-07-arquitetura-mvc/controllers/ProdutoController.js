import express from 'express';
// Router() - método do Express para criar rotas
const rota = express.Router();

rota.get("/produtos", (req, res) =>{

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

export default rota;