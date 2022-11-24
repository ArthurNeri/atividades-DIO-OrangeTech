/*
    ELABORE UM ALGORITMO QUE CALCULE O QUE DEVE SER PAGO POR UM PRODUTO,
    CONSIDERANDO O PREÇO NORMAL DE ETIQUETA E A ESCOLHA DE CONDIÇÃO DE PAGAMENTO.
    UTILIZE OS CÓDIGOS DA TABELA A SEGUIR PARA LER QUAL A CONDIÇÃO DE PAGAMENTO
    E EFETUAR O CÁLCULO ADEQUADO.

    CÓDIGO CONDIÇÃO DE PAGAMENTO:
    - À VISTA DÉBITO, 10% DE DESCONTO;
    - A VISTA NO DINHEIRO OU PIX, 15% DE DESCONTO;
    - EM DUAS VEZES, PREÇO NORMAL DA ETIQUETA SEM JUROS;
    - ACIMA DE DUAS VEZES, PREÇO NORMAL DA ETIQUETA + JUROS DE 10%.
*/
const etiqueta = 100;
const condicaoPagamento = 0;
const parcelas = condicaoPagamento;
console.log('Condição de pagamento escolhida: ', condicaoPagamento);

if (condicaoPagamento === 0){
    const valorPago = etiqueta * 0.9;
    console.log('Desconto de 10% aplicado, valor pago: R$', valorPago.toFixed(2));
} else if (condicaoPagamento === 1){
    const valorPago = etiqueta * 0.85;
    console.log('Desconto de 15% aplicado, valor pago: R$', valorPago.toFixed(2));
} else if (condicaoPagamento === 2){
    const valorPago = etiqueta / 2;
    console.log(parcelas, ' parcelas no valor de: R$',valorPago.toFixed(2));
} else {
    const valorPago = (etiqueta * 1.1) / parcelas;
    console.log(parcelas, 'parcelas no valor de: R$', valorPago.toFixed(2));
}