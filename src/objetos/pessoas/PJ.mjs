import Pessoa from "./Pessoa.mjs";
import IE from "./IE.mjs";

export default class PJ extends Pessoa {
  #cnpj;
  #ie;
  #dataRegistro; 

  setCNPJ(cnpj) {
    if (cnpj && cnpj.length >= 14) {
      this.#cnpj = cnpj;
      return true;
    }
    return false;
  }

  getCNPJ() {
    return this.#cnpj;
  }

  setDataRegistro(data) {
    this.#dataRegistro = data;
  }

  getDataRegistro() {
    return this.#dataRegistro;
  }

  setIE(ie) {
    if (ie instanceof IE) {
      this.#ie = ie;
      ie.setPJ(this);
      return true;
    }
    return false;
  }

  getIE() {
    return this.#ie;
  }

  toJSON() {
    const jsonBase = super.toJSON ? super.toJSON() : {};
    
    return {
      ...jsonBase,
      cnpj: this.#cnpj,
      ie: this.#ie,
      dataRegistro: this.#dataRegistro 
    };
  }
}