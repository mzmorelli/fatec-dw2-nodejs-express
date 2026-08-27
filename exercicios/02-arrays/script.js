const estoqueProdutos = [
    {
        nome: "Nintendo Switch",
        marca: "Nintendo",
        preco: 3000,
        desc: "Videogame portátil para toda a família."
    },
    {
        nome: "Playstation 5",
        marca: "Sony",
        preco: 5000,
        desc: "Console de última geração com gráficos modernos."
    },
    {
        nome: "Atari 2600",
        marca: "Atari",
        preco: 2000,
        desc: "Console clássico com jogos retrô."
    }
]

estoqueProdutos.push({
    nome: "Nintendo 3DS",
    marca: "Nintendo",
    preco: 700,
    desc: "Videogame portátil com tecnologia 3D."
});

estoqueProdutos.unshift({
    nome: "Xbox Series S",
    marca: "Microsoft",
    preco: 4500,
    desc: "Console de última geração, econômico e mantendo um desempenho ótimo."
})

document.writeln("<h3>Produtos disponíveis: </h3>");
estoqueProdutos.forEach(produto => {
    document.writeln(`
        <p>Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$${produto.preco} <br>
        Descrição: ${produto.desc} 
        </p>`);
});

let estoqueOrdenado = estoqueProdutos.sort((a, b) => a.preco - b.preco);

document.writeln("<br><h3>Produtos disponíveis (ordenados): </h3>");
estoqueProdutos.forEach(produto => {
    document.writeln(`
        <p>Produto: ${produto.nome} <br>
        Marca: ${produto.marca} <br>
        Preço: R$${produto.preco} <br>
        Descrição: ${produto.desc} 
        </p>`);
});