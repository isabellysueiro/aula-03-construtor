import { Funcionario } from "./src/models/Funcionario.js";
console.log("=== EXERCÍCIO 1: RH PROFCAFE ===");
const novoColaborador = new Funcionario("João Silva", 101, 700);
console.log(`Salário atual do ${novoColaborador.nome}: ${novoColaborador.salario}
€`);

novoColaborador.aplicarAumento(10);