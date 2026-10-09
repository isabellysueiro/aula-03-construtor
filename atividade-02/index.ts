import readLine from "readline-sync";
import { Aluno } from "./src/models/Aluno.js";

// Criar o aluno
const aluno = new Aluno("Maria", "2026001");

// Mostrar os dados iniciais
console.log("\n--- DADOS DO ALUNO ---");
console.log("Nome: " + aluno.nome);
console.log("Nota inicial: " + aluno.nota);

// Pedir a nota
const novaNota = readLine.questionFloat(
    "\nDigite a nota final do aluno (0 a 20): "
);

// Alterar a nota
aluno.nota = novaNota;

// Mostrar os dados atualizados
console.log("\n--- RESULTADO FINAL ---");
console.log("Nome: " + aluno.nome);
console.log("Nota: " + aluno.nota);
console.log("Situacao: " + aluno.verificarAprovacao());