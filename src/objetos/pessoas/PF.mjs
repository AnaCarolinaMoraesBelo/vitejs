import Pessoa from "./Pessoa.mjs";
import Titulo from "./Titulo.mjs";

export default class PF extends Pessoa {
  #cpf;
  #titulo;
  #dataNascimento; // <--- 1. Novo campo privado

  setCPF(cpf) {
    if (cpf) {
      this.#cpf = cpf;
      return true;
    }
    return false;
  }

  getCPF() {
    return this.#cpf;
  }

  // === 2. Novos Métodos Get/Set para Data de Nascimento ===
  setDataNascimento(data) {
    this.#dataNascimento = data;
  }

  getDataNascimento() {
    return this.#dataNascimento;
  }
  // =======================================================

  setTitulo(titulo) {
    if (titulo instanceof Titulo) {
      this.#titulo = titulo;
      titulo.setPF(this);
      return true;
    }
    return false;
  }

  getTitulo() {
    return this.#titulo;
  }

  // === 3. Método para permitir salvar campos privados no JSON ===
  toJSON() {
    // Tenta pegar os dados da classe pai (Nome, Email, Endereço, etc)
    const jsonBase = super.toJSON ? super.toJSON() : {}; 
    
    return {
        ...jsonBase,
        cpf: this.#cpf,
        titulo: this.#titulo,
        dataNascimento: this.#dataNascimento // Importante: expõe o dado privado
    };
  }
}