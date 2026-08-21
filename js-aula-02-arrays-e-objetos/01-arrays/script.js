// Vetores no Javascript

let produtos = ["Computador", "Notebook", "Celular", "Tablet"];

let aluno = "Matheus";

document.writeln(`<p>O tipo da variável que recebe um vetor no Javascript é: <strong>${typeof(produtos)}</strong></p>`);
document.writeln(`<p>O tipo da variável aluno é: <strong>${typeof(aluno)}</strong></p><br>`);

document.writeln(`<p>Exibindo os itens do vetor pelo índice: </p>`);

document.writeln(`<p>${produtos[0]}</p>`);
document.writeln(`<p>${produtos[1]}</p>`);
document.writeln(`<p>${produtos[2]}</p>`);
document.writeln(`<p>${produtos[3]}</p>`);

document.writeln(`<br><p>Exibido os itens do vetor através do <strong>forEach:</strong></p>`);

produtos.forEach(produto => {
    //Para cada "produto" da lista de "produtos", faça tal...
    document.writeln(`<p>${produto}</p>`);
});

document.writeln("<br><p>Exibindo os itens do vetor e os índices com o forEach: </p>");
produtos.forEach((produto, indice) => {
    document.writeln(`<p>${indice + 1} - ${produto}</p>`);
});