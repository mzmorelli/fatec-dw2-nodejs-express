class Heroi {
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr(){
        return `${this.nome} está correndo.`;
    }

    andar(){
        return `${this.nome} está andando.`;
    }

    atacar(){
        return `${this.nome} está atacando!`;
    }

    defender(){
        return `${this.nome} está se defendendo!`;
    }
}

const homemAranha = new Heroi(
    "Homem-Aranha", 90, 50, 60,
);
homemAranha.teia = 1;
homemAranha.sentidoAranha = function(){
    return "Homem-Aranha detectou perigo!";
}

const superman = new Heroi(
    "Superman", 100, 75, 100,
);
superman.podeVoar = 1;
superman.visaoCalor = function(){
    return "Superman está usando sua visão de calor!";
}

const batman = new Heroi(
    "Batman", 100, 60, 60,
);
batman.esconder = 0;
batman.investigar = function(){
    return "Batman está investigando um crime!";
}

document.writeln(`<p>${batman.investigar()}</p>`);
document.writeln(`<p>${homemAranha.atacar()}</p>`);
document.writeln(`<p>A força de Superman é: ${superman.forca}</p>`);