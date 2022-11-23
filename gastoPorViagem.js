/* 
CRIE UM PROGRAMA PARA CALCULAR O VALOR GASTO EM UMA VIAGEM DE CARRO
TENDO AS SEGUINTES CONSTANTES PARA EXECUÇÃO:

    - QUAL O COMBUSTÍVEL QUE O CARRO USA?
    - PREÇO DO ETANOL: 
    - PREÇO DA GASOLINA:
    - DISTÂNCIA PERCORRIDA EM KM:
    - AUTONOMIA DO CARRO(VALOR MÉDIO DE KM/L):
*/
const precoGasolina = 5.43;
const precoEtanol = 4.04;
const distanciaEmKm = 100;
const autonomia = 12;
const tipoCombustivel = 'Gasolina'

const litros = distanciaEmKm / autonomia;

if (tipoCombustivel === 'Gasolina') {
    const valor = precoGasolina * litros;
    console.log('O valor gasto em combustível é de R$', valor.toFixed(2));
} else {
    const valor = precoEtanol * litros;
    console.log('O valor gasto em combustível é de R$', valor.toFixed(2));
}