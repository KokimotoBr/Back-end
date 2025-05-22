<<<<<<< HEAD
"Os tipos de variáveis"

//Var, let e const.

//var; não é mais utilizada, mas pode ser alterada que nem a "let".

//let; um valor que pode ser alterado ao longo do código.

//const; não pode ser alterada.

"Tipos de dados"

//Number; Números.

//Boolean; True or False.

//String; Palavras.

"Como saber o tipo de uma variável?"

//typeof

"O array"

//array é uma coleção:
//o array usa [] e não {}.

let estados = ["Rio de Janeiro", "São paulo", "Bahia"];

//um array pode ter os 3 tipos de dados, mas só no JavaScript.

let linguagens = ["JavaScript", "PHP", "Java", "C#"];

console.log(linguagens.length);

//Vai imprimir 4.

"Null"

//null é um valor sem tipo: não é string, bool nem number.

let nome = null;
console.log(nome);

//vai imprimir: null.

"const"

//não deixa alterar o valor.

const aula = "JavaScript";
aula = "Js";

//Vai da erro

"Operadores"

// + - * / % 

'%'

//retorna o resto de uma divisão

'+'

//Além de somar números, ele tambem pode somar palavras

console.log("5" + "6");

//Vai imprimir 56

'Operadores de atribuição aritmética'

//  X += Y    X = X + Y

'Incremento e decremento'

//Os operadores de incremento ++ e decremento --, são usados para adicionar ou subtrair o valor 1 de uma variável.

var contador = 5;
contador++;
console.log(contador);

'Operadores relacionais'

//Igual (==)    Retorna verdadeiro caso os operandos sejam iguais.

//Não igual (!=)    Retorna verdadeiro caso os operandos não sejam iguais.

//Estritamente igual (===)  Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.

//Estritamente não igual (!==)  Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

//Maior que (>)     Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.

//Maior que ou igual (>=)   Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.

//Menor que (<)     Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.

//Menor que ou igual (<=)   Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.

console.log(20 == 20); //Vai imprimir True

console.log(119 == 120); //vai imprimir False

console.log("20" == 20); //true

console.log(true == 1); //True

'estritamente igual (===)'

console.log("20" === 20); //false

console.log(true === 1); //false

'Outros operadores'

//AND lógico (&&)   Retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.

//OU lógico (||)    Retorna verdadeiro caso um dos operandos seja verdadeiro; seambos forem falsos, retorna falso.

//NOT lógico (!)    A negação resulta no valor contrário do operador, ou seja, trueserá false e false será true

1 == "1" || "a" == "a" //true

35 === "35" && 1 == 10 //false

!("a" == 1) //true

'Operador ternário'

let idade = 25;
let mensagem = idade >= 18 ? "Acesso permitido" : "Acesso negado";
console.log(mensagem);

'Objetos'

var o = new Object(); //cria um objeto vazio: o mesmo que {}.
var a = new Array(); //Cria um array vazio: o mesmo que [].
var d = new Date(); //Cria um objeto Date representando a hora atual.
var r = new RegExp("js"); //Cria um objeto RegEx para comparação de padrões.

class Carro {
    constructor(marca, modelo){
        this.marca = marca,
        this.modelo = modelo;}}

let meuCarro = new Carro('Fiat','Pulse')
console.log(meuCarro.marca) //'Fiat"
console.log(meuCarro.modelo) //'Pulse'

let ano = 36
let meuano = ano
meuano = 37
console.log(ano) //36

const carro = {
    cor: 'azul'}

const outrocarro = carro
outrocarro.cor = 'amarelo'
console.log(carro.cor) //'amarelo'

let valor = 10
let outrovalor = valor
console.log("Valor: "+valor)
console.log("outrovalor: " + outrovalor)
outrovalor = 15
console.log("Valor: "+valor)
console.log("outrovalor: " + outrovalor)

const car = {
    cor : "Azul"
}
const bicicleta = car //passagem como referencia -> passa o endereço do objeto na memoria
console.log("Carro: " + car.cor)
console.log("Bicicleta: " + bicicleta.cor)

bicicleta.cor = "Verde"
console.log("Carro: " + car.cor)
console.log("Bicicleta: " + bicicleta.cor)

//Classe filha
const carzin = {
    marca: {
        nome: 'Ford'
    },
    cor: 'azul'
}

//Coleção de objetos

let disciplina = {
    id: 3,
    nome: 'História',
    carga_horaria: 160,
};

let coleção_diciplinas = [
    {id: 1, nome: "Português", carga_horaria: 240}, //indice 0
    {id: 2, nome: "Matemática", carga_horaria: 220}, //indice 1
    {id: 3, nome: "História", carga_horaria: 160}, //indice 2
    {id: 4, nome: "Física", carga_horaria: 120}, //indice 3
];

console.log(coleção_diciplinas[2]);
//{id: 3, nome: "História", carga_horaria: 160}

console.log(coleção_diciplinas[6].id); //7
console.log(coleção_diciplinas[6].nome); //Inglês
console.log(coleção_diciplinas[6].carga_horaria); //120

'Métodos de objetos'

const carrão = {
    marca: "Ford",
    modelo: "Fiesta",
    ligar: function () {
        console.log("Ligado");
    },
};
carro.ligar()

const carrinho = {
    marca: "Ford",
    modelo: "Fiesta",
    ligando: function () {
        console.log(`${this.marca} ${this.modelo} ligando!`);
    },
};

carrinho.ligando();

'Classes' //Tem que começarem com letra mascula

class Pessoa{
    nome;
}
const flavio = new Pessoa()
flavio.nome = 'Flavio'
flavio.nome

class Pessoinha {
    nome;
    saudacao() {
        return `Olá, meu nome é ${this.nome}`
    }
}
const flavio = new Pessoinha();
flavio.nome = 'Flavio';
console.log(flavio.saudacao());

'Estruturas Condicionais'

if (condicao) {
    declaracao_1;
}

if (condicao) {
    declaracao_1;
} else {
    declaracao_2;
}

if (condicao) console.log("executar aqui se for verdadeira");
else console.log("executar esse outro codigo");

if (condicao) {
    declaracao_1;
} else if (condicao_2) {
    declaracao_2;
} else if (condicao_n) {
    declaracao_n;
} else {
    declaracao_final;
}

//&&

let idade_legal = 17;
if (idade_legal >= 16) console.log("Pode votar");
//vai imprimir Pode votar

let idade_ok = 17;
(idade_ok >= 16) && console.log("Pode votar");
//vai imprimir Pode votar

switch (expressao) {
    case rotulo_1:
        declaracoes_1
        break;
    case rotulo_2:
        declaracoes_2
        break;
    case rotulo_3:
        declaracoes_3
        break;
    default:
        declaracoes_padrao
        break;
}

switch (mes) {
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
        break;
    case "Janeiro":
    case "Fevereiro":
    case "Março":
        console.log("Verão");
}
=======
"Os tipos de variáveis"

//Var, let e const.

//var; não é mais utilizada, mas pode ser alterada que nem a "let".

//let; um valor que pode ser alterado ao longo do código.

//const; não pode ser alterada.

"Tipos de dados"

//Number; Números.

//Boolean; True or False.

//String; Palavras.

"Como saber o tipo de uma variável?"

//typeof

"O array"

//array é uma coleção:
//o array usa [] e não {}.

let estados = ["Rio de Janeiro", "São paulo", "Bahia"];

//um array pode ter os 3 tipos de dados, mas só no JavaScript.

let linguagens = ["JavaScript", "PHP", "Java", "C#"];

console.log(linguagens.length);

//Vai imprimir 4.

"Null"

//null é um valor sem tipo: não é string, bool nem number.

let nome = null;
console.log(nome);

//vai imprimir: null.

"const"

//não deixa alterar o valor.

const aula = "JavaScript";
aula = "Js";

//Vai da erro

"Operadores"

// + - * / % 

'%'

//retorna o resto de uma divisão

'+'

//Além de somar números, ele tambem pode somar palavras

console.log("5" + "6");

//Vai imprimir 56

'Operadores de atribuição aritmética'

//  X += Y    X = X + Y

'Incremento e decremento'

//Os operadores de incremento ++ e decremento --, são usados para adicionar ou subtrair o valor 1 de uma variável.

var contador = 5;
contador++;
console.log(contador);

'Operadores relacionais'

//Igual (==)    Retorna verdadeiro caso os operandos sejam iguais.

//Não igual (!=)    Retorna verdadeiro caso os operandos não sejam iguais.

//Estritamente igual (===)  Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo.

//Estritamente não igual (!==)  Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

//Maior que (>)     Retorna verdadeiro caso o operando da esquerda seja maior que o da direita.

//Maior que ou igual (>=)   Retorna verdadeiro caso o operando da esquerda seja maior ou igual ao da direita.

//Menor que (<)     Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.

//Menor que ou igual (<=)   Retorna verdadeiro caso o operando da esquerda seja menor ou igual ao da direita.

console.log(20 == 20); //Vai imprimir True

console.log(119 == 120); //vai imprimir False

console.log("20" == 20); //true

console.log(true == 1); //True

'estritamente igual (===)'

console.log("20" === 20); //false

console.log(true === 1); //false

'Outros operadores'

//AND lógico (&&)   Retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso.

//OU lógico (||)    Retorna verdadeiro caso um dos operandos seja verdadeiro; seambos forem falsos, retorna falso.

//NOT lógico (!)    A negação resulta no valor contrário do operador, ou seja, trueserá false e false será true

1 == "1" || "a" == "a" //true

35 === "35" && 1 == 10 //false

!("a" == 1) //true

'Operador ternário'

let idade = 25;
let mensagem = idade >= 18 ? "Acesso permitido" : "Acesso negado";
console.log(mensagem);

'Objetos'

var o = new Object(); //cria um objeto vazio: o mesmo que {}.
var a = new Array(); //Cria um array vazio: o mesmo que [].
var d = new Date(); //Cria um objeto Date representando a hora atual.
var r = new RegExp("js"); //Cria um objeto RegEx para comparação de padrões.

class Carro {
    constructor(marca, modelo){
        this.marca = marca,
        this.modelo = modelo;}}

let meuCarro = new Carro('Fiat','Pulse')
console.log(meuCarro.marca) //'Fiat"
console.log(meuCarro.modelo) //'Pulse'

let ano = 36
let meuano = ano
meuano = 37
console.log(ano) //36

const carro = {
    cor: 'azul'}

const outrocarro = carro
outrocarro.cor = 'amarelo'
console.log(carro.cor) //'amarelo'

let valor = 10
let outrovalor = valor
console.log("Valor: "+valor)
console.log("outrovalor: " + outrovalor)
outrovalor = 15
console.log("Valor: "+valor)
console.log("outrovalor: " + outrovalor)

const car = {
    cor : "Azul"
}
const bicicleta = car //passagem como referencia -> passa o endereço do objeto na memoria
console.log("Carro: " + car.cor)
console.log("Bicicleta: " + bicicleta.cor)

bicicleta.cor = "Verde"
console.log("Carro: " + car.cor)
console.log("Bicicleta: " + bicicleta.cor)

//Classe filha
const carzin = {
    marca: {
        nome: 'Ford'
    },
    cor: 'azul'
}

//Coleção de objetos

let disciplina = {
    id: 3,
    nome: 'História',
    carga_horaria: 160,
};

let coleção_diciplinas = [
    {id: 1, nome: "Português", carga_horaria: 240}, //indice 0
    {id: 2, nome: "Matemática", carga_horaria: 220}, //indice 1
    {id: 3, nome: "História", carga_horaria: 160}, //indice 2
    {id: 4, nome: "Física", carga_horaria: 120}, //indice 3
];

console.log(coleção_diciplinas[2]);
//{id: 3, nome: "História", carga_horaria: 160}

console.log(coleção_diciplinas[6].id); //7
console.log(coleção_diciplinas[6].nome); //Inglês
console.log(coleção_diciplinas[6].carga_horaria); //120

'Métodos de objetos'

const carrão = {
    marca: "Ford",
    modelo: "Fiesta",
    ligar: function () {
        console.log("Ligado");
    },
};
carro.ligar()

const carrinho = {
    marca: "Ford",
    modelo: "Fiesta",
    ligando: function () {
        console.log(`${this.marca} ${this.modelo} ligando!`);
    },
};

carrinho.ligando();

'Classes' //Tem que começarem com letra mascula

class Pessoa{
    nome;
}
const flavio = new Pessoa()
flavio.nome = 'Flavio'
flavio.nome

class Pessoinha {
    nome;
    saudacao() {
        return `Olá, meu nome é ${this.nome}`
    }
}
const flavio = new Pessoinha();
flavio.nome = 'Flavio';
console.log(flavio.saudacao());
>>>>>>> a6e9adc441205cc5c26420363d3d3f4ac0a31e45
