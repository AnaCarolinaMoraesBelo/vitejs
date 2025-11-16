import Pessoa from "./Pessoa.mjs";
import Titulo from "./Titulo.mjs";

export default class PF extends Pessoa {
  #cpf;
  #titulo;
  #dataNascimento; 

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

  setDataNascimento(data) {
    this.#dataNascimento = data;
  }

  getDataNascimento() {
    return this.#dataNascimento;
  }

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

  toJSON() {
    const jsonBase = super.toJSON ? super.toJSON() : {}; 
    
    return {
        ...jsonBase,
        cpf: this.#cpf,
        titulo: this.#titulo,
        dataNascimento: this.#dataNascimento
    };
  }
}