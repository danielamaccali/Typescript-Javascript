Lab 02

//Exercício 1

class Circulo
{
    private _coordX: number;
    private _coordY: number;
    private _raio: number;

    constructor(coordX:number, coordY:number, raio:number)
    {
        this._coordX = coordX;
        this._coordY = coordY;
        this._raio = raio;
    }

    get coordX() : number { return this.coordX; }
    get coordY() : number { return this.coordY; }
    get raio() : number { return this.raio; }

    CalculoArea(raio:number) : number //inserir parâmetro e definir o tipo
    {
        return Math.PI * (raio * raio);
    }

    CalculoCirc(raio:number) : number
    {
        return 2 * Math.PI * raio;
    }

}

let circ1:Circulo = new Circulo(1,1,3);
console.log(circ1.raio);


//Exercício 2

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

    //exercício 3: 
    // a. Método que retorna o valor da menor moeda armazenada.

    menorMoeda() : number
    {
        let menorMoeda : number = Number.MIN_VALUE;
        for(let menor of this.moedas.values())
        {
            menorMoeda = this.moedas;

        }
        return menorMoeda;
    }

    // b. Método que retorna uma instância da menor moeda armazenada.
    // c. Método que retorna um mapa/dicionário com a frequência (o número de moedas) de cada moeda existente 
    //(1 centavo, 5 centavos, 10 centavos, 25 centavos, 50 centavos, 1 real) no cofrinho
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

console.log(cofre.menorMoeda());

//console.log(JSON.stringify(cofre));





