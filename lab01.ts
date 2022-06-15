// LAB 01

//03. Escreva uma função min(x,y) que devolve o menor entre dois números. 
//Não use funções auxiliares de Math. Utilize corretamente a declaração de tipos nos 
//parâmetros e no resultado da função. 


function min(x : number, y : number) 
{
    if(x < y)
    {
        return x;
    }
    else
    {
        return y;
    }
}

let teste2 = min(10, 2);
console.log(`O menor número é: ${teste2}.`);


// 04. 4. Escreva uma função pow(x,y) que calcula o valor de 𝑥𝑦, ou seja, x elevado a potência y. 
// Assuma que os valores de x e y são números inteiros não negativos e que 𝑥0=1 para qualquer valor de x. 
// Apresente uma versão iterativa e uma versão recursiva para a função. Não utilize o operador **. 
// Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função. 

//versão recursiva
let funcao = Math.pow(2,2);
console.log(funcao);


//versão iterativa
function potencia(base: number, expo: number)
{
    let resultado: number = 1; // tem que ser 1
    for(let i: number =1; i<=expo; i++)
    {
        
        resultado = resultado * base;
        
    }
    return resultado;
}

let teste = potencia(2, 3)
console.log(teste);

// 5. Escreva uma função toMaiusculaPrimeira(s) que recebe uma string s (assuma qualquer string não vazia) 
// e retorna a mesma string com a primeira letra em maiúscula. Utilize corretamente a declaração de tipos 
// nos parâmetros e no resultado da função. 

function toMaiusculaPrimeira(s : string)
{
    return s.charAt(0).toUpperCase() + s.slice(1);
}

let teste = toMaiusculaPrimeira('cachorro louco'); //só vai colocar maiúscula a primeira letra da primeira palavra
console.log(teste);


// 6. Escreva uma função getMax(arr) que recebe um array de número inteiros e retorna o maior elemento encontrado no array. 
// Assuma que o array não está vazio. Não utilize funções auxiliares de outros objetos disponibilizados pelo TypeScript. 
// Utilize corretamente a declaração de tipos nos parâmetros e no resultado da função. 


function getMax(arr: Array<number>) : number
{
    let maiorElemento: number = 0;
    for(let i: number = 0; i<arr.length; i++)
    {
        if(maiorElemento < arr[i])
        {
            maiorElemento = arr[i];
        }
    }
    return maiorElemento;
}

let array1: Array<number> = [3, 4, 19, 13, 2];
let array2: Array<number> = [3, 7, 6, 1, 5];

console.log(getMax(array1));
console.log(getMax(array2));


// 7. Escreva uma função que, utilizando objetos Map, calcule a frequência de cada número presente 
//em um determinado array contendo números inteiros. Utilize corretamente a declaração de tipos 
//nos parâmetros e no resultado da função.

function frequencia(map: Map<number, number>, arr: Array<number>) : Map<number, number>
{
    for(var item of arr)
    {
        if(!map.has(item)) //negação, se map não contiver o item
        {
            map.set(item, 1);
        }
        else
        {
            map.set(item, map.get(item) + 1);
        }
    }
    return map;
}

let array1: Array<number> = [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5];
let mapear = new Map<number, number>();

console.log(frequencia(mapear, array1));

