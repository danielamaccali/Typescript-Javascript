// Exercício 4 - Classes e Herança

abstract class Cliente
{
    private _nome : string;

    constructor(nome : string)
    {
        this._nome = nome;
    }

    getNome() : string { return this._nome };

    abstract getMensalidade() : number;


}

class ClienteFisico extends Cliente
{
    private _idade : number;
    private _salario : number;

    constructor(nome: string, idade: number, salario: number)
    {
        super(nome);
        this._idade = idade;
        this._salario = salario;
    }

    getIdade() : number { return this._idade };

    setIdade(idade: number) { this._idade = idade };

    getSalario() : number { return this._salario };

    setSalario(salario: number) { this._salario = salario };

    getMensalidade() : number
    {
        if(this._idade < 60)
        {
            return (this._salario * 0.10);
        }
        else
        {
            return (this._salario * 0.15);
        }
    }
}

class ClienteJuridico extends Cliente
{
    private _mensalidade: number;

    constructor(nome: string, mensalidade: number)
    {
        super(nome);
        this._mensalidade = mensalidade;
    }

    getMensalidade() : number
    {
        return this._mensalidade;
    }

    setMensalidade(mensalidade: number) : void //porque?
    {
        mensalidade;
    }
}


// implementação exercicio 3.b
class CadastroClientes
{
    private _cliente: Cliente[];

    constructor()
    {
        this._cliente = [];
    }

    adicionarCliente(cliente: Cliente)
    {
        this._cliente.push(cliente);
    }

    listar()
    {
        return this._cliente;
    }

    
}

let cf1 = new ClienteFisico("Fulano de tal", 35, 2000)
let cj1 = new ClienteJuridico("Empresa T1000", 200)
let cf2 = new ClienteFisico("Claudiosvaldo Nogueira", 61, 6000)

//console.log(`\n Cliente: ${cf1.getNome()} \n Idade: ${cf1.getIdade()} \n Salário: ${cf1.getSalario()} \n Mensalidade: ${cf1.getMensalidade()}`);

//console.log(`\n Cliente: ${cj1.getNome()} \n Mensalidade: ${cj1.getMensalidade()}`);

//console.log(`\n Cliente: ${cf2.getNome()} \n Idade: ${cf2.getIdade()} \n Salário: ${cf2.getSalario()} \n Mensalidade: ${cf2.getMensalidade()}`);

let teste1 = new CadastroClientes();

teste1.adicionarCliente(new ClienteFisico("Fulano de tal", 35, 2000));
teste1.adicionarCliente(new ClienteJuridico("Empresa T1000", 200));
teste1.adicionarCliente(new ClienteFisico("Claudiosvaldo Nogueira", 61, 6000));

console.log(teste1.listar());


// a) Implemente as respectivas classes. Para o cálculo do valor da mensalidade utilize as seguintes informações: 
//Esta empresa de seguros cobra uma mensalidade correspondente a 10% do salário se o cliente tem menos de 60 anos e 
//15% se o cliente tem 60 anos ou mais, no caso de clientes que são pessoa física. 
//Para pessoas jurídicas é cobrada uma mensalidade variável, calculada através de negociações com o cliente.

// b) Implemente uma classe CadastroClientes para armazenar o cadastro de clientes da empresa de seguros. 
//Apresente métodos para adicionar um cliente ao cadastro e retornar uma string contendo a listagem de todos os clientes, 
//mostrando seu nome e o valor da mensalidade a ser paga. Utilize uma coleção em memória.