function calcularDesconto(condicaoPagamento, etiqueta) {
    if (condicaoPagamento === 0) {
        return desconto = etiqueta * 0.1;
    } else if (condicaoPagamento === 1) {
        return desconto = etiqueta * 0.15;
    } else if (condicaoPagamento === 2) {
        return desconto = etiqueta * 0;
    } else {
        return desconto = etiqueta * 0.1;
    }
}

function mudarCodigo(condicaoPagamento) {
    if (condicaoPagamento === 0) {
        return codigo = 'DEB000';
    } else if (condicaoPagamento === 1) {
        return codigo = 'DIN111';
    } else if (condicaoPagamento === 2) {
        return codigo = 'CSJ222';
    } else {
        return codigo = 'CCJ333';
    }
}

function mudarTipoPagamento(condicaoPagamento) {
    if (condicaoPagamento === 0) {
        return tipo = 'Débito';
    } else if (condicaoPagamento === 1) {
        return tipo = 'PIX ou Dinheiro';
    } else if (condicaoPagamento === 2) {
        return tipo = 'Crédito SEM Juros';
    } else {
        return tipo = 'Crédito COM Juros';
    }
}

function escolherCondicaoPagamento(tipo, codigo) {
    console.log('Condição de pagamento escolhida: '+ tipo + ' | CÓDIGO: #' + codigo);
}

function calcularValor(etiqueta, condicaoPagamento, parcelas, desconto) {
    if (condicaoPagamento === 0) {
        return valorPago = etiqueta - desconto;
    } else if (condicaoPagamento === 1) {
        return valorPago = etiqueta - desconto;
    } else if (condicaoPagamento === 2) {
        return valorPago = etiqueta;
    } else {
        return valorPago = (etiqueta + desconto) / parcelas;
    }
}

function imprimirValorPago(valorPago, condicaoPagamento, parcelas, etiqueta, desconto) {
    if (condicaoPagamento === 0) {
        console.log('Desconto de 10% aplicado');
        console.log('VALOR DO PRODUTO: R$' + etiqueta.toFixed(2));
        console.log('DESCONTO: -R$' + desconto.toFixed(2));
        console.log('VALOR PAGO: R$' + valorPago.toFixed(2));
    } else if (condicaoPagamento === 1) {
        console.log('Desconto de 15% aplicado');
        console.log('VALOR DO PRODUTO: R$' + etiqueta.toFixed(2));
        console.log('DESCONTO: -R$' + desconto.toFixed(2));
        console.log('VALOR PAGO: R$' + valorPago.toFixed(2));
    } else if (condicaoPagamento === 2) {
        console.log(parcelas + ' parcelas, sem juros');
        console.log('VALOR DO PRODUTO: R$' + etiqueta.toFixed(2));
        console.log('DESCONTO: -R$' + desconto.toFixed(2));
        console.log('VALOR PAGO: R$' + valorPago.toFixed(2));
    } else {
        console.log(parcelas + ' parcelas, com 10% de juros');
        console.log('VALOR DO PRODUTO: R$' + etiqueta.toFixed(2));
        console.log('JUROS: +R$' + desconto.toFixed(2));
        console.log('VALOR PAGO: R$' + valorPago.toFixed(2) + '(x' + parcelas + ')');
    }
}

let codigo = 'x';
let desconto = 'x';
let tipo = 'x';
let valorPago = 'x';
const etiqueta = 100;
const condicaoPagamento = 0;
const parcelas = condicaoPagamento;

function main() {
    calcularDesconto(condicaoPagamento, etiqueta);
    mudarCodigo(condicaoPagamento);
    mudarTipoPagamento(condicaoPagamento);
    calcularValor(etiqueta, condicaoPagamento, parcelas, desconto);
    escolherCondicaoPagamento(tipo, codigo);
    imprimirValorPago(valorPago, condicaoPagamento, parcelas, etiqueta, desconto);
}
main();