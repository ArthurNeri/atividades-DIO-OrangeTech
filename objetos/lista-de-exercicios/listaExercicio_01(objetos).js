/*
    CRIE UMA CLASSE PARA REPRESENTAR CARROS CONTENDO:
        - MARCA;
        - COR;
        - AUTONOMIA; (autonomia é o gasto médio de combustível para cada KM rodado 'AUTONOMIA = L/KM')

    CRIE UM MÉTODO QUE DADO A QUANTIDADE DE QUILÔMETROS E O PREÇO DO COMBUSTÍVEL
    NOS DÊ O VALOR GASTO EM REAIS PARA REALIZAR O PERCURSO.
*/
/*
        EXTRA:
        ESTOU ADICIONANDO UMA CLASSE PARA REPRESENTAR CIDADES CONTENDO:
            - NOME;
            - ESTADO;
            - DISTANCIA;
        
        PARA A DISTÂNCIA TAMBÉM SE TORNAR UMA VARIÁVEL.

-----------------------------------------

class Cidade {
    nome;
    estado;
    distancia;
}

const saoPaulo = new Cidade();
saoPaulo.nome = 'São Paulo';
saoPaulo.estado = 'SP';
saoPaulo.distancia = 
*/

class Carro {
    nome;
    marca;
    cor;
    autonomia;

    constructor(nome, marca, cor, autonomia){
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;

    }

    calcularLitros(distancia, precoCombustivel) {
        return distancia * precoCombustivel * this.autonomia;
    }
}

const gol = new Carro('Gol', 'Volkswagen', 'branco', 1/9);
const uno = new Carro('Uno', 'Fiat', 'azul', 1/12);

const distancia = 120;
const precoCombustivel = 5.79;

console.log('R$' + gol.calcularLitros(distancia, precoCombustivel).toFixed(2));