import rl from 'readline-sync';

/*
let num = rl.questionInt("informe o número para gerar a tabuada: ");
let cont = 1;
while(cont <=10)  {
    console.log(`${num} x ${cont} = ${num * cont}`);
    cont++;
}
*/
/*
let numAlunos = rl.questionInt("Informe o número de alunos da turma: ")
let contAlunos = 1;
let somaMedias = 0;

while (contAlunos <= numAlunos) {
    console.log(`Aluno ${contAlunos}`);
    let contBimestres = 1;
    let somaNotas = 0;
    
    while (contBimestres <=4) {
        let nota = rl.questionInt(`Informe a nota do ${contBimestres}º bimestre do aluno ${contAlunos}: `);
        somaNotas += nota;
        contBimestres++;
    }
    let mediaAluno = somaNotas /4;
    somaMedias += mediaAluno;
    console.log(`Média do aluno ${contAlunos}: ${mediaAluno.toFixed(2)}`);
    contAlunos++;
}
let mediaGeralTurma = somaMedias / numAlunos;
console.log(`Média geral da turma ${mediaGeralTurma.toFixed(2)}`);
*/
/*
const numAleatorio = Math.floor(Math.random() *100) + 1; //O randon so aletoriza numeros do 0.1 até 0.99
let tigrinho;

do {
    tigrinho = rl.questionInt("Tigrinho vai soltar a carta!!! (Escolha um número entre 1 e 100): ");
    if (tigrinho === numAleatorio) {
        console.log("Tigrinho soltou a cartinha!!! Aproveite seus R$20. ")
    }else if(tigrinho < numAleatorio) {
        console.log("Aposte mais R$10 e suba o valor do seu número! ")
    } else {
        console.log("Aposte mais R$10 e desça o valor do seu número! ")
    }
} while(tigrinho !== numAleatorio);
 */
/*
let escravo = rl.question(`Nome do ${1}º escravo: `);
let salario = rl.questionFloat(`Informe o salário de: ${escravo}`)
let impostoRenda = 0;

if (salario <=2100) {
    impostoRenda = 0;
} else if (salario <= 2800) {
    impostoRenda = salario * 0.075;
} else if (salario <= 3750) {
    impostoRenda = salario * 0.15;
} else if (salario <= 4660) {
    impostoRenda = salario * 0.225;
} else {
    impostoRenda = salario * 0.275;
}
console.log(`\n---Inposto de renda que o escravo deve pagar---`);
console.log(`Escravo: ${escravo} \n Imposto de renda: R$ ${impostoRenda.toFixed(2)}\n`)
*/
/*
let anterior = 0;
let atual = 1;

console.log("---Sequência de Fibonacci---");
console.log(anterior)
console.log(atual)

for (let i = 3; i < 20; i++) {
    let proximo = anterior + atual;

    console.log(proximo);

    anterior = atual;
    atual = proximo;
}
*/
/*
const pessoa = {
    nome: "Pedro of war",
    idade: 1023,
    sexo: "M"
}

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`)
}

let cores = ["Azul", "Branco", "Verde", "Preto", "Roxo"];

for (const element of cores) {
    console.log("Cor: " + element);
}
*/

let frase = rl.question("informe o texto para ser convertido: ");

//Declaração de função

function Masculo(texto) {
    return texto.toUpperCase();
}
console.log(texto.toUpperCase());

//Expressão de função
const alta = function(texto) {
    return texto.toUpperCase()
}
//Arow function
const capslock = (texto) => texto.toUpperCase();

console.log(alta(frase));

'Funções'

//Atualmente existem cinco tipos de definições, sendo:
//▪Functions declaration (declaração de função)
//▪Functions expression (expressão de função)
//▪Arrow Functions (função de seta)
//▪Functions constructor (função construtora)
//As definições mais comuns são declaration e expression

function minhaFuncao(objeto) {
    objeto.marca = "Toyota"
}

var meucarro = {marca: "Honda", model: "Accord", year: 1998 };
var x, y;
x = meucarro.marca; //x vai receber "Honda"

minhaFuncao(meucarro);
y = meucarro.marca; //y vai receber "Toyota"
//A propriedade marca foi alterada pela função
console.log(x);
console.log(y);

//as variaveis de uma função não dão conflito com as variaveis de outras funções

var square = function (numero) {
    return numero*numero;
};
var x = square(4); //x recebe o valor 16

function square (numero) {
    return numero*numero;
};
square(5);
console.log(square)//recebe 25

'Função de seta'

const qualquerNumero = function () {
    return Math.random()
}
                                                                //é uma forma resumidade de definir uma função
const algumNumerp = () => Math.random()

'Função construtora'

function Pretos(nome) {
    this.Pretos = nome
}
const p = new  Pretos('Douglas') // {nome: 'Douglas'}

