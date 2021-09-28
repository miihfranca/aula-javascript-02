
//Criar 3 variáveis com tipos Objeto Number para guardar os valores:
//a) 300, 999 e 21.
//b) Exibir no console os valores das variáveis.


var numero1 = new Number (300);
console.log(numero1);

var numero2 = new Number (999);
console.log(numero2);

var numero3 = new Number (21);
console.log(numero3);
//2) Exibir no console os valores de 4 propriedades do tipo objeto Number.

console.log(Number.MAX_VALUE);
console.log(Number.EPSILON);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);

//3) Criar 1 variável para receber o valor 150, em seguida faça:

// a) Exibir no console o valor da variável.

// b) Converter para string o valor.

//c) Exibir no console, o valor convertido.

var numero = new Number (150);
console.log(numero);
console.log(numero.toString(numero));
console.log(typeof(numero));

//2)  Exibir no console os valores de 4 propriedades do tipo objeto Number.

var x = 6;
var y = 6;
console.log(x6 === y6 );
let x4 = 2;
let y8 = 2;
console.log(x2 == y2);
const x150 = 5;
const y5 = 5;
console.log(x150 !== y5);

//3) Criar 1 variável para receber o valor 150, em seguida faça:

var numero = new Number (150);
console.log(numero);
console.log(numero.toString(numero));
console.log(typeof(numero));



//1) Determine o valor lógico para cada uma das expressões a seguir e escreva o resultado no console:

//a. Dado que x = 5 e y = 8, valide se os valores e os tipos são iguais.

//b. Dado que x = 6 e y = “6”, valide se os valores e os tipos são diferentes.

//c. Dado que x = “7” e y = 7, valide se os valores são iguais.

var x = 5;
var y = 8;
console.log(x === y );
let x1 = 6;
let y2 = '6';
console.log(x1 !== y2);
const x3 = '7';
const y3 = 7;
console.log(x3 == y3);

//2) Declare uma variável chamada nome.

//a) Atribua a ela o valor “Fulano”.

//b) Exiba no console a seguinte mensagem: “ Boa noite, Fulano! ”.

var nome = "Fulano";
console.log("Boa noite, " + fulano );


//Considere x = x + y, dado que x = 10 e y = 5.

//a) Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.

//b) Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.

//c) Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida.

//d) Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.

//e) Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.

var x = 10;
var y = 5;
console.log(x += y);
//a
x = 15;
console.log(x -= y);
//b
x = 50;
console.log(x -= y);
//c
x = 0;
console.log(x -= y);
//d
x = 2;
console.log(x -= y);
//e
x = 5;
console.log(x -= y);


//1) Criar bloco de código que mostra, no console, o resto da divisão de 25 por 3.

console.log(25/3);

//2) Criar bloco de código que mostra, no console, a concatenação das variáveis abaixo:

//a) texto1 = "Programa Start - "

//b) texto2 = "formação Front end: "

//c) texto3 = "eu faço parte dessa oportunidade."

var texto1 = "Programa Start - "
var texto2 = "formação Front end: "
var texto3 = "eu faço parte dessa oportunidade."
console.log(texto1 += texto2 += texto3);

//3)  Criar bloco de código que mostra, no console, o resultado da concatenação das variáveis abaixo:

//a)  texto1 = "Mariazinha tem "

//b) idade =  9

//c) texto2 = "anos e "

//d) quantidade_irmaos = 7

//e)  texto3 = " irmãos."

var texto1 = 'Mariazinha tem ';
var idade =  9;
var  texto2 = " anos e ";
var quantidade_irmaos = 7;
var texto3 = " irmãos.";
console.log(texto1 + idade + texto2 + quantidade_irmaos + texto3)

//1)  Criar variáveis para:

//a)  Armazenar os valores: 7, -55, 389, 1000, 3.1459, -46.267;

//b)  As variáveis deverão ser do tipo objeto Number;

//c)  Mostrar os valores no console;

//d) Somar a primeira variável com a última variável;

//e) Mostrar os valores no console;

//f) Multiplicar a primeira variável com a terceira variável;

//g) Mostrar os valores no console;

//h) Dividir a quarta variável pela quinta variável;

//i)   Mostrar os valores no console.


var n1 = new Number (7);
console.log(n1);
var n2 = new Number (-55);
console.log(n2);
var n3 = new Number (389);
console.log(n3);
var n4 = new Number (1000);
console.log(n4);
var n5 = new Number (3.1459);
console.log(n5);
var n6  = new Number (-46.267);

console.log(n6);
console.log(n1 + n2);
console.log(n1 * n3);
console.log(n4 / n5);

//2) Criar variáveis para:

//a) Armazenar os valores: 10, 3, 9, 99.9, 721;

//b) As variáveis deverão ser do tipo objeto Number.

//c)  Mostrar os valores no console.

//d)  Validar se a primeira variável é menor que o valor Number.MAX_VALUE;

//e)  Mostrar o resultado e valores no console;

//f)  Validar se a segunda variável possui valor igual a NaN;

//g) Mostrar o resultado e valores no console;

//h) Validar se a quinta variável é menor ou igual a terceira variável;

//i) Mostrar o resultado e valores no console.


var n1 = new Number (10) , n2 = new Number (3) , n3 = new Number (9) , n4 = new Number (99.9), n5 = new Number (721);

console.log(n1,n2,n3,n4,n5);
console.log(n1 < Number.MAX_VALUE);
console.log(n2 == NaN);
console.log(n5 < n3);
