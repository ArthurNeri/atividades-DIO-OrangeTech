/*
    ELABORE UM ALGORITMO QUE DADO O PESO E A ALTURA DE UM ADULTO,
    MOSTRE SUA CONDIÇÃO DE ACORDO COM A TABELA ABAIXO.

    CLASSIFICAÇÕES DE IMC EM ADULTOS:
    - IMC < 18.5, ABAIXO DO PESO;
    - 18.5 < IMC < 25; PESO NORMAL;
    - 25 < IMC < 30; ACIMA DO PESO;
    - 30 < IMCC < 40; OBESO;
    - IMC > 40; OBESIDADE MORBIDA; 
    
    IMC = PESO / (ALTURA * ALTURA)
*/
const peso = 55.5;
const altura = 1.69;
const imc = peso / Math.pow(altura, 2);
console.log('IMC do paciente: ', (imc.toFixed(2)))

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