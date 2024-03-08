//EXERCÍCIO 1
class Carro {
    private marca: string;
    private modelo: string;
    private ano: number;
    private cor: string;
  
    constructor(marca: string, modelo: string, ano: number, cor: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.cor = cor;
    }

    get getMarca():string{
        return this.marca;
    }
    get getModelo():string{
        return this.modelo;
    }
    get getAno():number{
        return this.ano;
    }
    get getCor():string{
        return this.cor;
    }

    set setMarca(marca:string){
        this.marca = marca;
    }
    set setModelo(modelo:string){
        this.modelo = modelo;
    }
    set setAno(ano:number){
        this.ano = ano;
    }
    set setCor(cor:string){
        this.cor = cor;
    }

    calcularIdade() {
        let data = new Date();
        let anoAtual = data.getFullYear();
        let idade = anoAtual - this.ano;
        console.log("EXERCÍCIO 1:\n",idade, "Anos desde o lançamento do ", this.marca,this.modelo);
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
    private valor1:number;
    private valor2:number;

    constructor(valor1:number, valor2:number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    get getValor1():number{
        return this.valor1;
    }
    get getValor2():number{
        return this.valor2;
    }

    set setValor1(valor1:number){
        this.valor1 = valor1;
    }
    set setValor2(valor2:number){
        this.valor2 = valor2;
    }
    
    soma(x:number, y:number):number{
        let resultado = x + y;
        return resultado;
    }

    subtracao(x:number, y:number):number{
        let resultado = x - y;
        return resultado;
    }

    multiplicação(x:number, y:number):number{
        let resultado = x*y;
        return resultado;
    }

    divisao(x:number, y:number):number{
        let resultado = x/y;
        return resultado;
    }

    porcentagem(x:number, y:number):number{
        let resultado = x * (y/100);
        return resultado;
    }

    
}