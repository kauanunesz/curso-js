let n1 = Number(window.prompt('Digite um número'));
let n2 = Number(window.prompt('Digite outro número')); //window.prompt me retorna uma string, mesmo se digitar um número, é preciso converter
let soma = n1 + n2;
window.alert("A soma de " + n1 + " e " + n2 + " é " + soma);


// Conversões para número
let conv = "5";
Number(conv); //Converte para number
Number.parseInt(conv); //Força conversão para Int
Number.parseFloat(conv); //Força conversão para Float (Ambos podem tirar o number da frente)

// Conversões para String
let conv2 = 5;
String(conv2);
conv2.toString(); //Mesma coisa

// Template Strings
window.alert("A soma de " + n1 + " e " + n2 + " é " + soma2);
window.alert(`A soma de ${n1} e ${n2} é ${soma}`);

// Funções String
let nome = window.prompt("Digite seu nome: ");
document.writeln(`Olá, ${nome}! Seu nome tem ${nome.length} letras. Seu nome em maiúsculas é ${nome.toUpperCase()} e seu nome em minúsculas é ${nome.toLowerCase()}`);

let num = 1545.5;
console.log(num); //Exibe 1545.5
console.log(num.toFixed(2)); //Exibe 1545.50
console.log(num.toFixed(2).replace('.', ',')); //Exibe 1545,50

// Valor monetário
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'});
