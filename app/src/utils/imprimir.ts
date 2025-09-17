import { Negociacao } from "../models/negociacao.js";

export function imprimir(...objetos: Negociacao[]) {
    for (let objeto of objetos) {
        objeto.paraTexto()
    }
}
