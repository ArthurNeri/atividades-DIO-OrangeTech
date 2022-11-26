/* 
    UMA SALA CONTÉM 5 ALUNOS E PARA CADA ALUNO FOI SORTEADO UM NÚMERO DE 1 - 100;
    FAÇA UM PROGRAMA QUE RECEBA OS 5 NÚMEROS SORTEADOS PARA OS ALUNOS E MOSTRE O MAIOR NÚMERO SORTEADO.
    
    DADOS DE ENTRADA:
    5,
    50,
    10,
    98,
    23

    SAÍDA:
    98
*/

const { gets, print } = require('./listaExercicio_01(importacao)');

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    console.log(numeroSorteado);
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);