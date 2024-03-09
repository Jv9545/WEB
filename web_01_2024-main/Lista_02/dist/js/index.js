"use strict";
//EXERCÍCIO 1
class Carro {
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    get getMarca() {
        return this.marca;
    }
    get getModelo() {
        return this.modelo;
    }
    get getAno() {
        return this.ano;
    }
    get getCor() {
        return this.cor;
    }
    set setMarca(marca) {
        this.marca = marca;
    }
    set setModelo(modelo) {
        this.modelo = modelo;
    }
    set setAno(ano) {
        this.ano = ano;
    }
    set setCor(cor) {
        this.cor = cor;
    }
    calcularIdade() {
        let data = new Date();
        let anoAtual = data.getFullYear();
        let idade = anoAtual - this.ano;
        console.log("EXERCÍCIO 1:\n", idade, "Anos desde o lançamento do ", this.marca, this.modelo);
    }
    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
    }
}
let novoCarro = new Carro("Fiat", "Toro", 2016, "Prata");
novoCarro.calcularIdade();
//---------------------
//EXERCÍCIO 2
class Calculadora {
    constructor(valor1, valor2) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }
    get getValor1() {
        return this.valor1;
    }
    get getValor2() {
        return this.valor2;
    }
    set setValor1(valor1) {
        this.valor1 = valor1;
    }
    set setValor2(valor2) {
        this.valor2 = valor2;
    }
    soma(x, y) {
        let resultado = x + y;
        return resultado;
    }
    subtracao(x, y) {
        let resultado = x - y;
        return resultado;
    }
    multiplicação(x, y) {
        let resultado = x * y;
        return resultado;
    }
    divisao(x, y) {
        let resultado = 0;
        if (y == 0) {
            return "Não é possível dividir por zero";
        }
        else {
            resultado = x / y;
            return resultado;
        }
    }
    porcentagem(x, y) {
        let resultado = x * (y / 100);
        return resultado;
    }
}
console.log("\nEXERCÍCIO 2");
let calculadora = new Calculadora(1, 2);
let soma;
let subtracao;
let divisao;
let multiplicação;
let porcentagem;
console.log("Metodos usado os valores definidos no metodo construtor:");
soma = calculadora.soma(calculadora.getValor1, calculadora.getValor2);
console.log("Resultado de", calculadora.getValor1, "+", calculadora.getValor2, "=", soma);
subtracao = calculadora.subtracao(calculadora.getValor1, calculadora.getValor2);
console.log("Resultado de", calculadora.getValor1, "-", calculadora.getValor2, "=", subtracao);
divisao = calculadora.divisao(calculadora.getValor1, calculadora.getValor2);
console.log("Resultado de", calculadora.getValor1, "/", calculadora.getValor2, "=", divisao);
multiplicação = calculadora.multiplicação(calculadora.getValor1, calculadora.getValor2);
console.log("Resultado de", calculadora.getValor1, "x", calculadora.getValor2, "=", multiplicação);
porcentagem = calculadora.porcentagem(calculadora.getValor1, calculadora.getValor2);
console.log(calculadora.getValor2, "% de", calculadora.getValor1, "=", porcentagem);
/*console.log("\nMetodos usado os valores definidos com set");
console.log("Resultado de", calculadora.getValor1, "+",calculadora.getValor2, "=",
 soma = calculadora.soma(calculadora.setValor1 = 100, calculadora.setValor2 = 625));


console.log("Resultado de", calculadora.getValor1, "-",calculadora.getValor2, "=",
 subtracao = calculadora.subtracao(calculadora.setValor1 = 1983, calculadora.setValor2 = 2));

console.log("Resultado de", calculadora.getValor1, "/",calculadora.getValor2, "=",
divisao = calculadora.divisao(calculadora.setValor1 = 100, calculadora.setValor2 = 0));

console.log("Resultado de", calculadora.getValor1, "x",calculadora.getValor2, "=",
 multiplicação = calculadora.multiplicação(calculadora.setValor1 = 534, calculadora.setValor2 = 0));


console.log("Resultado de", calculadora.getValor1, "",calculadora.getValor2, "=",
 porcentagem = calculadora.porcentagem(calculadora.setValor1 = 1000, calculadora.setValor2 = 50));*/ 
