//1. Crie a variável apartamento e atribua a ela um objeto literal com as
//seguintes propriedades:
//▪quartos = 2
//▪ tipo = “apartamento”
//▪ endereco = “Avenida Principal, 456 - Centro”
//▪andar: 7

let apartamento = {
    quartos: 2,
    tipo: "Apartamento",
    endereço: "Avenida Principal, 456 - Centro",
    andar: 7
}

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.andar} andar da ${apartamento.endereço}`);

//2. Imagine que você está desenvolvendo um sistema para gerenciar produtos em
//um armazém. Crie uma variável chamada produtoEmbalado que execute as
//seguintes operações:
//Atribua um objeto literal à variável com as seguintes propriedades:
//▪ nome: "Laptop HP"
//▪ categoria: "Eletrônicos"
//▪ peso: 1.5
//▪ preco: 3500.00

let produto ={
    nome: "Laptop HP",
    categoria: "Eletrônicos",
    peso: 1.5,
    preco: 3500.00
}

console.log(`O produto ${produto.nome}, da categoria ${produto.categoria}, pesando ${produto.peso} kg, está à venda por ${produto.preco.toLocaleString('pt-BR', {style:'currency',currency:'BRL' })}.`);

//3. Crie uma classe chamada Imovel com os seguintes atributos:
//▪ quartos:
//▪ tipo:
//▪ endereco:
//Crie um método na classe chamado exibirInformacoes que
//retorna uma string com as informações do imóvel.
//Em seguida, instancie dois objetos da classe Imovel
//representando uma casa e um apartamento com as seguintes
//características:
//Casa:
//▪ Quartos: 4
//▪ Tipo: "Casa"
//▪ Endereço: "Rua da Amizade, 789 - Bairro Alegre"
//Apartamento:
//▪ Quartos: 2
//▪ Tipo: "Apartamento"
//▪ Endereço: "Avenida da Paz, 123 - Centro"

class Imovel {
    constructor(quartos, tipo, endereço){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereço = endereço;
    }
    exibirInformacoes(){
        return`${this.tipo} com ${this.quartos} quartos, localizado(a) no(a) ${this.endereço}.`;
    }
}

let casa = new Imovel(3, 'Casa', 'Rua da Amizade, 789 - Bairro Alegre, nº 1010');
//casa.quartos = 4;
//casa.tipo = "Casa";
//casa.endereço = "Rua da Amizade, 789 - Bairro Alegre";
console.log(casa.exibirInformacoes());

let ap = new Imovel(2, 'Apartamento', 'Avenida da Paz, 123 - Centro, nº 666');
//ap.quartos = 2;
//ap.tipo = "Apartamento";
//ap.endereço = "Avenida da Paz, 123 - Centro";

console.log(ap.exibirInformacoes());

/*4. Crie uma classe chamada Veiculo com os seguintes atributos:
▪ marca
▪ modelo
▪ ano
Crie um método na classe chamado exibirDetalhes que retorna
uma string com as informações do veículo.
Em seguida, instancie dois objetos da classe Veiculo
representando um carro e uma motocicleta com as seguintes
características:
Carro:
▪ Marca: "Toyota"
▪ Modelo: "Corolla"
▪ Ano: 2022
Motocicleta:
▪ Marca: "Honda"
▪ Modelo: "CBR 600RR"
▪ Ano: 2021*/







class Veiculos {
    constructor(marca, modelo, ano){
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    }
    exibirDetalhes(){
        return`${this.marca} com ${this.modelo} quartos, localizado(a) no(a) ${this.ano}.`;
    }
}

let carro = new Imovel('Toyota', 'Corolla', 2022);

console.log(casa.exibirDetalhes());

let moto = new Imovel('Honda', "CBR 600RR", 2021);

console.log(ap.exibirDetalhas());