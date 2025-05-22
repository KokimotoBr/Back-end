/*1. Solicite ao usuário para inserir um número representando um dia da
semana (1 a 7) e mostre o nome do dia correspondente.*/

import readline from 'readline-sync';
let dia =  Number(readline.question("Informe o dia da semana: "));

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
        console.log("Dia inexistente");
        break;

}

//Peça ao usuário para inserir um número de mês (1 a 12) e exiba o nome do mês.


let mes =  Number(readline.question("Informe o mês: "));

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
        default:
        console.log("Dia inexistente");
        break;

}

//Implementar um programa que simule uma calculadora. O usuário deverá
//informar dois valores e a operação desejada.
//Com auxílio de um switch deve ser computado e mostrado o resultado da operação.

let x = readline.questionFloat("Informe o primeiro valor: ")
let y = readline.questionFloat("Informe o segindo valor: ")
let op = readline.questionInt("Escolha a opção: \n[1] Soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão ")

switch(op){
    case 1:
        console.log(`${x} +  ${y} = ${x + y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case 3:
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;
    default:
        console.log("Opção inválida! ")
        break;
}

/*Um funcionário irá receber um aumento de acordo com o seu
categoria de bonificação (A,B,C e D).
A tabela abaixo mostra o percentual de aumento de cada
categoria:
Faça um programa que leia a categoria de bonificação e o
salário atual de um funcionário, em seguida calcule e
imprima o seu novo salário. Use a instrução switch.
DESENVOLVIMENTO BACK-END I - CURSO TÉCNICO EM INFORMÁTICA 15
Categoria Percentual
A 5%
B 10%
C 15%
D 20%*/

let salario = readline.questionFloat("informe seu salário: ");
let cat = readline.question("Informe a categora de bonificação: ").toUpperCase();
let bonus = 0

switch(cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`${(salario+bonus).toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`);
        break;
    case 'B':
        bonus = salario*+ 0.10;
        console.log(`${(salario+bonus).toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`);
        break;
    case 'C':
        bonus = salario * 0.15;
        console.log(`${(salario+bonus).toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`);
        break;
    case 'D':
        bonus = salario * 0.20;
        console.log(`${(salario+bonus).toLocaleString('pt-BR',{style: 'currency', currency:'BRL'})}`);
        break;

    default:
        console.log("Categoria inválida");
        break;
}