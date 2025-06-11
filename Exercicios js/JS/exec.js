// 1. Array com 5 números
let numeros = [10, 20, 30, 40, 50];
numeros.pop();
console.log("1. Array atualizado:", numeros);

// 2. Array de filmes
let filmes = ["Matrix", "Vingadores", "Titanic"];
filmes.unshift("Homem-Aranha");
console.log("2. Lista de filmes:", filmes);

// 3. Função calcularMedia
function calcularMedia(n1, n2, n3) {
let media = (n1 + n2 + n3) / 3;
if (media >= 7) {
console.log("3. Aprovado");
} else {
console.log("3. Reprovado");
}
}
calcularMedia(7, 8, 9);

// 4. Função verificarMaioridade
function verificarMaioridade(idade) {
if (idade >= 18) {
console.log("4. Maior de idade");
} else {
console.log("4. Menor de idade");
}
}
verificarMaioridade(16);

// 5. Função converterEmMinutos
function converterEmMinutos(horas) {
let minutos = horas * 60;
console.log("5. " + minutos + " minutos");
}
converterEmMinutos(2);

// 6. Objeto livro
let livro = {
titulo: "Dom Casmurro",
autor: "Machado de Assis",
paginas: 256
};
console.log("6. O livro " + livro.titulo + " de " + livro.autor + " tem " + livro.paginas + " páginas.");

// 7. Objeto carro
let carro = {
modelo: "Fusca",
ano: 1970,
ligado: false
};
carro.ligado = true;
console.log("7. Objeto carro atualizado:", carro);

// 8. Array de frutas 
let frutas = ["maçã", "banana", "laranja"];
for (let i = 0; i < frutas.length; i++) {
console.log("8. Eu gosto de " + frutas[i]);
}

// 9. Função maiorNumero
function maiorNumero(numeros) {
let maior = numeros[0];
for (let i = 1; i < numeros.length; i++) {
if (numeros[i] > maior) {
maior = numeros[i];
}
}
console.log("9. Maior número é " + maior);
}
maiorNumero([5, 10, 3, 20, 7]);

// QUESTÃO BÔNUS
let aluno1 = { nome: "Valentina", nota1: 8, nota2: 7 };
let aluno2 = { nome: "Yago", nota1: 6, nota2: 9 };
let aluno3 = { nome: "Giovanna", nota1: 10, nota2: 10 };

let turma = [aluno1, aluno2, aluno3];

for (let i = 0; i < turma.length; i++) {
let aluno = turma[i];
let media = (aluno.nota1 + aluno.nota2) / 2;
console.log("BÔNUS. " + aluno.nome + " tem média " + media);
}
