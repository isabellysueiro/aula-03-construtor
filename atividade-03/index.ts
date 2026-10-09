import { MaquinaCafe } from "./src/models/MaquinaCafe.js";
console.log("\n=== EXERCÍCIO 3: COPA PROFCAFE ===");
const maquina = new MaquinaCafe("Nespresso Pro");
// Tentar tirar café sem água
maquina.tirarCafe(); // Erro
// Abastecer a máquina
maquina.abastecer(500, 100);
console.log(maquina.status);
// Tirar cafés até faltar água
maquina.tirarCafe(); // Sobra 300ml
maquina.tirarCafe(); // Sobra 100ml
maquina.tirarCafe(); // ERRO! Água insuficiente.