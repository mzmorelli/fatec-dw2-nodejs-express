// Função anônima

const mult = function(x){
    return x * 2;
}
const x = 15;

document.writeln(`<p> O resultado da multiplicação é: ${mult(x)}.</p>`);

// Função seta - com um único parâmetro - arrow function
const triplo = (y) =>{
    return y * 3;
}
const y = 100;

document.writeln(`<p>O triplo de ${y} é ${triplo(y)}.</p>`);

// Função seta - com mais de um parâmetro - arrow function
const calculadora = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`);
}
//eval no Javascript é uma função nativa que realiza cálculos matemáticos a partir de dois números e um operador.
const num1 = 8;
const operador = '*';
const num2 = 2;

document.writeln(`<p>O resultado de ${num1} ${operador} ${num2} é igual a ${calculadora(num1, operador, num2)}.</p>`);

// função imediata (IIFE - Immediately Invoked Function Expression)
const imediata = (function (){
    document.writeln("<p>Estou sendo executada imediatamente!</p>");
})() // Passando os parâmetros;

// função imediata com parâmetros
const loadUser = (function(user) {
    document.writeln(`<p>Carregando as informações do usuário <strong>${user}</strong>...</p>`);
    // Mostrando as informações após 3 segundos
    setTimeout(() => {
        document.writeln(`
            Nome: Millie <br>
            Idade: 19 <br>
            Cidade: Gotham City <br>
            Hobby: Jogar`)
    }, 3000)
})("Millie"); // Passando o parâmetro