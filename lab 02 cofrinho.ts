class Moeda
{
    private _valor : number;
    private _nome : string;

    constructor(n: string, v: number)
    {
        this._valor = v;
        this._nome = n;
    }

    //propriedades de leitura
    get valor(): number { return this._valor};
    get nome(): string { return this._nome};
}

class Cofrinho
{
    private moedas : Map<Moeda, number>; //criando a coleção com Map<chave, valor>

    constructor()
    {
        this.moedas = new Map<Moeda, number>;
    }

    adicionarMoeda(m: Moeda, n: number): void
    {
        this.moedas.set(m, n);
    }

    calcularTotal() : number
    {
        let total : number = 0;
        for(let item of this.moedas.keys())
        {
            total += item.valor * this.moedas.get(item);
        }
        return total;
    }

    contadorMoedas() : void
    {

    }
}

let real_005 = new Moeda("Real", 0.05);
let real_010 = new Moeda("Real", 0.10);
let real_025 = new Moeda("Real", 0.25);
let dolar_010 = new Moeda("Dólar", 0.10);

let cofre = new Cofrinho()
cofre.adicionarMoeda(real_005, 10);
cofre.adicionarMoeda(real_010, 10);
cofre.adicionarMoeda(real_025, 10);
cofre.adicionarMoeda(dolar_010, 10); // como separar?

console.log(cofre.calcularTotal());

console.log(JSON.stringify(cofre));




