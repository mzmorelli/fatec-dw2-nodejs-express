// OBJETO
document.writeln("<h3>Objeto: </h3>");
const produto = {
    nome: 'Computador',
    marca: 'Lenovo',
    preco: 3000,
    desc: 'PC moderno com bom desempenho.'
};

document.writeln(`<p>${produto}</p>`);

// Acessando os atributos do objeto
document.writeln(`<p>${produto.nome}, ${produto.marca}, ${produto.preco} <br> ${produto.desc}</p><br>`);

// ARRAY DE OBJETOS
document.writeln("<h3>Array de objetos: </h3>");
const listaProdutos = [
    {
        nome: 'Computador',
        marca: 'Lenovo',
        preco: 3000,
        desc: 'PC moderno com bom desempenho.'
    },
    {
        nome: 'Tablet',
        marca: 'Samsung',
        preco: 2000,
        desc: 'Ótima velocidade de processamento.'
    },
    {
        nome: 'Iphone',
        marca: 'Apple',
        preco: 13000,
        desc: 'Ultra resistente! Não quebra nunca!'
    }
];

// EXIBINDO AS INFORMAÇÕES DOS PRODUTOS COM FOREACH
document.writeln(`<h4>Produtos em promoção: </h4>`);

listaProdutos.forEach(produto => {
    document.writeln(`
        Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$ ${produto.preco} <br>
        Descrição: ${produto.desc} <br><br>`);
})