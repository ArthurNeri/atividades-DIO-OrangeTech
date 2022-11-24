// faça uma função que escreva o seu nome
function escreverNome(nome) {
    console.log('Meu nome é', nome);
}

// faça uma função que confere sua maioridade
function conferirMaioridade(idade){
    if (idade >= 18){
        console.log('Tenho', idade, 'anos.','Sou maior de idade');
    } else {
        console.log('Tenho', idade, 'anos.','Sou menor de idade');
    }
}

function main() {
    escreverNome('Arthur');
    conferirMaioridade(18);
}
main();