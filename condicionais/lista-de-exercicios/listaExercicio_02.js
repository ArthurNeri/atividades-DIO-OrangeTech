/*
    FAÇA UM PROGRAMA QUE DADO AS 3 NOTAS TIRADAS POR UM ALUNO EM SEMESTRE DA FACULDADE,
    CALCULE E IMPRIMA A MÉDIA E A SUA CLASSIFICAÇÃO CONFORME A TABELA ABAIXO.

    CLASSIFICAÇÃO:
    - MÉDIA < 5, REPROVADO;
    - 5 <= MÉDIA <= 7, RECUPERAÇÃO; 
    - MÉDIA > 7, APROVADO.
*/
const notaA = 5;
const notaB = 8;
const notaC = 8;
const somaNotas = (notaA + notaB + notaC);
console.log(somaNotas);

var media = somaNotas / 3;

if (media < 5){
    console.log('Nota do aluno: ', (media.toFixed(1)),' - Situação: REPROVADO');
} else if (5 <= media <= 7){
    console.log('Nota do aluno: ', (media.toFixed(1)), ' - Situação: RECUPERAÇÃO');
} else {
    console.log('Nota do aluno: ', (media.toFixed(1)), ' - Situação: APROVADO');
}