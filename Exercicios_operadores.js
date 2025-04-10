//1. Crie um programa que declare duas variáveis e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

n1 = 6;
n2 = 2;
soma = (n1 + n2);
sub =(n1 - n2);
mult = (n1 * n2);
div = (n1 / n2);
console.log(soma);
console.log(sub);
console.log(mult);
console.log(div);

//2. Declare duas idades e utilize operadores de comparação para verificar se uma pessoa é mais velha que a outra.

id1 = 17;
id2 = 20;
console.log(id1 > id2);
console.log(id1 < id2);

//3. Crie uma variável idade com um número e use o operador ternário para verificar se o valor armazenado na variável é maior ou igual a 18. Imprima “Maior de idade” ou “Menor de idade”.

id3 = 15;
aviso = id3 >= 18 ? "Acesso permitido" : "Acesso negado";
console.log(aviso);

//4. Crie uma variável com um número e use o operador ternário para verificar se é par ou ímpar.

n3 = 2;
conta = n3 %2 == 0 ? "Par" : "ímpar";
console.log(conta);