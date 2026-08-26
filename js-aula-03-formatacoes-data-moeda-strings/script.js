document.write("<h3>Manipulando datas:</h3>")

// Para começarmos a manipular datas no JavaScript,
// precisamos primeiro criar uma instância da classe Date, que é nativa do JavaScript

const dataAtual = new Date();

document.writeln(dataAtual);

// Pegando o dia, mês e ano atual
const dia = dataAtual.getDate();
document.writeln(`<p>Hoje é dia ${dia}</p>`);

const mes = dataAtual.getMonth() + 1;
document.writeln(`<p>Estamos no mês ${mes}</p>`);

const ano = dataAtual.getFullYear();
document.writeln(`<p>O ano em que nós estamos é ${ano}</p>`);

// Exibindo data completa
document.writeln(`Data de hoje: ${dia}/${mes}/${ano}.</p>`);

// ADICIONANDO DIAS, MESES E ANOS A DATA ATUAL
// Adicionando 4 dias à data atual:
dataAtual.setDate(dataAtual.getDate() + 4);

document.writeln(`<p>Daqui a 4 dias será dia ${dataAtual.getDate()}.</p>`);

// Adicionando 4 meses ao mês atual:
dataAtual.setMonth(dataAtual.getMonth() + 3);

document.writeln(`<p>Daqui a 3 meses será o mês ${dataAtual.getMonth()+1}.</p>`);

// Adicionando 2 anos ao ano atual:
dataAtual.setFullYear(dataAtual.getFullYear() + 2);

document.writeln(`<p>Daqui a 2 anos será ${dataAtual.getFullYear()}.</p><br>`);

// ##################################################

// FORMATAÇÃO DE MOEDAS
document.writeln("<h3>Manipulando números e moedas: </h3>");
const salario = 40000.3;
document.writeln(`<p>${salario}</p>`);

// Mostrando casas decimais
document.writeln(`<p>${salario.toFixed(2)}</p>`);

// Ocultando casas decimais
document.writeln(`<p>${salario.toFixed(0)}</p>`);

// Trocando o identificador de casas decimais
document.writeln(`<p>${salario.toFixed(2).replace(".",",")}</p>`);

// Formatando para real
document.writeln(`<p>
    ${salario.toLocaleString("pt-br",{
        style: "currency",
        currency: "BRL"
    })}
    </p>`);

// Formatando para dólar
document.writeln(`<p>
    ${salario.toLocaleString("en",{
        style: "currency",
        currency: "USD"
    })}
    </p><br>`);

// ##################################################

// FORMATAÇÕES DE STRINGS
document.writeln("<h3>Formatações de strings: </h3>");
const nome = "Millie Zanon";

// Alternando string para letras maiúsculas
document.writeln(`<p>${nome.toUpperCase()}</p>`);
// Alternando string para letras minúsculas
document.writeln(`<p>${nome.toLowerCase()}</p>`);

// Colocando as iniciais em letras maiúsculas
const cidade = "cananeia";
const cidadeFormatada = cidade.split(" ").map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(" ");

document.writeln(`<p>${cidadeFormatada}</p>`);

// Contando o numero de caracteres
document.writeln(`<p>Seu nome tem ${nome.replace(/\s/g, "").length} letras.</p>`);