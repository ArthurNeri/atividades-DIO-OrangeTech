/*
    FUNÇÕES SÃO PEQUENOS TRECHOS DE CÓDIGO QUE FICAM GUARDADOS
    E QUE PODEM SER CHAMADOS POSTERIORMENTE QUANTAS VEZES FOREM NECESSÁRIAS,
    EVITANDO QUE TENHAMOS QUE REPETIR O MESMO TRECHO VÁRIAS VEZES AO LONGO DO CÓDIGO.

    TENDO COMO EXEMPLO A ATIVIDADE DA "listaExercicio_02.js" ONDE CALCULAMOS O IMC DO PACIENTE:

const peso = 55.5;
const altura = 1.69;
const imc = peso / Math.pow(altura, 2);
console.log('IMC do paciente: ', imc.toFixed(2))

if (imc < 18.5){
    console.log('Condição: ABAIXO DO PESO');
} else if (imc >= 18.5 && imc < 25){
    console.log('Condição: PESO NORMAL');
} else if (imc >= 25 && imc < 30){
    console.log('Condição: ACIMA DO PESO');
} else if(imc >= 30 && imc < 40){
    console.log('Condição: OBESO');
} else {
    console.log('Condição: OBESO MORBIDO');
}

VIZUALIZANDO AS PARTES DO CÓDIGO É POSSÍVEL ENCONTRAR:
___________________________________________________
.                                                  ]AS
const peso = 55.5;                                 ]VARIÁVEIS 
const altura = 1.69;                               ]
___________________________________________________]
___________________________________________________
.                                                  ]OS TRECHOS
const imc = peso / Math.pow(altura, 2);            ]PARA EXECUÇÃO DE CÓDIGO
___________________________________________________]SÃO SUBSTITUÍVEIS POR FUNÇÕES

console.log[...]

------------------

PARA SUSBTITUIR A LINHA 33, PODEMOS ESCREVER A SEGUINTE FUNÇÃO ANTES DO CÓDIGO PRINCIPAL:

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

E SUBSTITUIR A LINHA PELO CÓDIGO:

const imc = calcularImc(peso, altura);

===================

AGORA PEGANDO O PRÓXIMO TRECHO TEMOS TESTES DE CONDIÇÕES:

if (imc < 18.5){
    console.log('Condição: ABAIXO DO PESO');
} else if (imc >= 18.5 && imc < 25){
    console.log('Condição: PESO NORMAL');
} else if (imc >= 25 && imc < 30){
    console.log('Condição: ACIMA DO PESO');
} else if(imc >= 30 && imc < 40){
    console.log('Condição: OBESO');
} else {
    console.log('Condição: OBESO MORBIDO');
}

TEMOS ALÉM DOS TESTES, TRECHOS PARA SEREM EXECUTADOS, QUE EM FORMA DE FUNÇÃO FICA:

function classificarImc(imc) {
    if (imc < 18.5){
        return 'Condição: ABAIXO DO PESO';
    } else if (imc >= 18.5 && imc < 25){
        return 'Condição: PESO NORMAL';
    } else if (imc >= 25 && imc < 30){
        return 'Condição: ACIMA DO PESO';
    } else if(imc >= 30 && imc < 40){
        return 'Condição: OBESO';
    } else {
        return 'Condição: OBESO MORBIDO';
    }
}

TENDO O CÁLCULO DO IMC E A CLASSIFICAÇÃO DELE, TEMOS AGORA QUE ADICIONAR(MANTER) NOSSAS VARIÁVEIS,
CHAMAR O CÁLCULO E IMPRIMIR A CLASSIFICAÇÃO DO IMC DENTRO DA FUNCÇÃO PRINCIPAL:

function main() {
const peso = 55.5;
const altura = 1.69;

const imc = calcularImc(peso, altura);

console.log(imc)
console.log(classificarImc)
}

PARA ENTREGAR UM RESULTADO MAIS BONITO AOS OLHOS EU DOU UMA FORMATADA BÁSICA NO "console.log" DO IMC,
ADICIONANDO UMA MENSAGEM E REDUZINDO O NÚMERO DE CASAS DECIMÁIS:

function main() {
const peso = 55.5;
const altura = 1.69;

const imc = calcularImc(peso, altura);

console.log('IMC do paciente: ', imc.toFixed(2));
console.log(classificarImc(imc));
}

O CÓDIGO FICARA DA SEGUINTE MANEIRA:
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5){
        return 'Condição: ABAIXO DO PESO';
    } else if (imc >= 18.5 && imc < 25){
        return 'Condição: PESO NORMAL';
    } else if (imc >= 25 && imc < 30){
        return 'Condição: ACIMA DO PESO';
    } else if(imc >= 30 && imc < 40){
        return 'Condição: OBESO';
    } else {
        return 'Condição: OBESO MORBIDO';
    }
}

(function main() {
// VARIÁVEIS:
const peso = 55.5;
const altura = 1.69;

// VARIÁVEL JÁ CALCULADA:
const imc = calcularImc(peso, altura);

// IMPRESSÃO DO CÁLCULO:
console.log('IMC do paciente: ', imc.toFixed(2));

// IMPRESSÃO DA CLASSIFICAÇÃO:
console.log(classificarImc(imc));
})();