export class Aluno {
    public nome: string;
    private matricula: string;
    private notaFinal: number;

    constructor(nome: string, matricula: string) {
        this.nome = nome;
        this.matricula = matricula;
        this.notaFinal = 0;
    }

    public get nota(): number {
        return this.notaFinal;
    }

    public set nota(valor: number) {
        if (valor < 0 || valor > 20) {
            console.log("\nERRO: A nota deve estar entre 0 e 20!");
            return;
        }

        this.notaFinal = valor;
        console.log("\nNota atualizada com sucesso!");
    }

    public verificarAprovacao(): string {
        if (this.notaFinal >= 10) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}