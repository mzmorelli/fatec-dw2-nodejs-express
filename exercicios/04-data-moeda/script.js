const data = new Date();

document.writeln(`<p>${data}</p>`);

const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();

document.writeln(`<p>A data atual é: ${dia}/${mes}/${ano}.</p>`);

const compraInternacional = 775.50;

document.writeln(`<p>Valor da compra: 
    ${compraInternacional.toLocaleString("pt-br",{
        style: "currency",
        currency: "USD"
    })}
    </p>`);

const compraReal = compraInternacional*5.15;

document.writeln(`<p>Valor da compra em real: 
    ${compraReal.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })}
    </p>`);

const cliente = "jOãO";
const clienteFormatado = cliente.split(" ").map(nome => nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase()).join(" ");

document.writeln(`<p>O nome do cliente é: ${clienteFormatado}</p>`);