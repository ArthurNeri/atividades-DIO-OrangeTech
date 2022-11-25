/*
    CRIE UMA CLASSE PARA REPRESENTAR PESSOAS CONTENDO:
        - NOME;
        - PESO;
        - ALTURA;  
    AS PESSOAS DEVEM TER A CAPACIDADE DE DIZER O VALOR DO SEU IMC;
    INSTANCIE UMA PESSOA CHAMADA JOSÉ QUE TENHA 70KG E 1,75 DE ALTURA,
    PEÇA PARA JOSÉ DIZER O VALOR D0 SEU IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.imc = this.peso / Math.pow(this.altura,2);
        
    }
    dizerImc() {
        return console.log(this.nome, 'tem o IMC de:', this.imc.toFixed(2));
    }

    main() {
        this.calcularImc();
        this.dizerImc();
    }
}

const jose = new Pessoa('José', 70, 1.75);

let imc = 1;
jose.main();
