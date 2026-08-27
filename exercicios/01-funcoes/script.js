// 01 - Função simples
function exibirInfo(){
    document.writeln("Nome: Millie <br>");
    document.writeln("Idade: 19 <br>");
    document.writeln("Cidade: Cananéia");
}
exibirInfo();

// 02 - Função com parâmetros
num1 = 10;
num2 = 5;
function divisao(num1, num2){
    let resultado = num1/num2;
    document.writeln(`<p>O resultado da divisão é: ${resultado}.</p>`)
}
divisao(num1, num2);

// 03 - Função com retorno
n1 = 10;
n2 = 3;
n3 = 7;

function mult(n1, n2, n3){
    return n1*n2*n3;
}

document.writeln(`<p>O resultado da multiplicação é: ${mult(n1, n2, n3)} </p>`);

// 04 - Função com mais de um retorno
idade = 19;

function checarIdade(idade){
    if (idade>=18){
        return "maior de idade.";
    } else {
        return "menor de idade."
    }
}

document.writeln(`<p>O usuário é ${checarIdade(idade)} </p>`);

// 05 - Função anônima
const nota = function(nt1, nt2){
    const media = (nt1+nt2)/2
    if (media <=5){
        return "reprovado."
    } else {
        return "aprovado."
    }
}
nt1 = 7;
nt2 = 10;

document.writeln(`<p>O aluno foi ${nota(nt1, nt2)}</p>`);

// 06 - Arrow function com parâmetro único
const triplo = (x) =>{
    return x * 3;
}
const x = 5;

document.writeln(`<p>O triplo de ${x} é: ${triplo(x)}.</p>`);

// 07 - Arrow function com mais de um parâmetro
const soma = (a, b, c, d) =>{
    return a+b+c+d;
}
const a = 4;
const b = 10;
const c = 15;
const d = 2;

document.writeln(`<p>A soma dos números é: ${soma(a, b, c, d)}.</p>`);

// 08 - IIFE
const msgUser = (function(user){
    document.writeln(`<p>Seja bem-vindo, ${user}!</p>`);
})("Millie");