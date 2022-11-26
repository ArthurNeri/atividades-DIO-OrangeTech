// CRIE UM PROGRAMA QUE DADO UM NÚMERO IMPRIMA SUA TABUADA.
let numero = 5;
let multiplicador = 1;

const tabuada = [];

for (let i = 0; i < 10; i++) {
    tabuada.push(multiplicador * numero);
    console.log(multiplicador , 'X' , numero , '=' , tabuada[i]);
    
    multiplicador++;
}