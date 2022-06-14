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

let cf1 = new ClienteFisico("Fulano de tal", 35, 2000)
let cj1 = new ClienteJuridico("Empresa T1000", 200)

console.log(`\n Cliente: ${cf1.getNome()} \n Idade: ${cf1.getIdade()} \n Salário: ${cf1.getSalario()} \n Mensalidade: ${cf1.getMensalidade()}`);

console.log(`\n Cliente: ${cj1.getNome()} \n Mensalidade: ${cj1.getMensalidade()}`);