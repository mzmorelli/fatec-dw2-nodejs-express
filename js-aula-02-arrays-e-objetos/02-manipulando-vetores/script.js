// MÉTODOS DE MANIPULAÇÃO DE VETORES

let frutas = ['Laranja', 'Maçã', 'Banana'];

document.writeln(`</p>Os itens do nosso vetor são: ${frutas}</p><br>`);

frutas[3] = 'Morango';
document.writeln(`Agora a lista é: ${frutas}`);

// METÓDO PUSH: insere um novo elemento no FINAL do vetor
frutas.push('Abacaxi');
document.writeln(`<p>Agora a lista é: ${frutas}</p><br>`);

// MÉTODO UNSHIFT: insere um novo elemento no INÍCIO do vetor
// frutas[0] = 'Pera' => não funciona pois substitui 'Laranja'
frutas.unshift('Pera')
document.writeln(`<p>Agora a lista é: ${frutas}</p><br>`);

// MÉTODO LENGTH: retorna o número de elementos no vetor
document.writeln(`</p>Na nossa lista temos ${frutas.length} frutas.</p><br>`);

// MÉTODO SORT: ordena os itens por valor
document.writeln(`<p>O primeiro item da lista é: ${frutas[0]}</p>`);

let frutasOrdenadas = frutas.sort();

document.writeln(`<p>Agora o primeiro item da lista é: ${frutasOrdenadas[0]}</p>`);
document.writeln(`<p>Lista de frutas ordenadas: ${frutasOrdenadas}</p><br>`);

// MÉTODO SORT: ordenando em ordem CRESCENTE e DECRESCENTE
let numeros = [6, 8, 2, 9, 3, 800, 200];

document.writeln(`<p>Os números são: ${numeros}</p>`);
document.writeln(`<p>Os números ordenados são: ${numeros.sort()}</p>`);

// ORDENANDO CORRETAMENTE OS NÚMEROS
// ORDEM CRESCENTE
document.writeln(`<p>Os números ordenados de forma crescente são: ${numeros.sort((a, b) => a - b)}</p>`);

// ORDEM DECRESCENTE
document.writeln(`<p>Os números ordenados de forma decrescente são: ${numeros.sort((a, b) => b - a)}</p>`);