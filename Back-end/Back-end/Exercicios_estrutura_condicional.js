/*1. Solicite ao usuário para inserir um número representando um dia da
semana (1 a 7) e mostre o nome do dia correspondente.*/

import entradaDados from 'readline-sync';
let nome = entradaDados.question("Informe seu nome: ");
console.log(`Olá, ${nome}!`)

let dia = 8

switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("terça");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inexistente")
        break;

}