import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
    }


    // Os decorators são executados de cima para baixo, mas 
    // aplicados de baixo para cima, o que significa que o decorator mais de 
    // baixo é aplicado primeiro, influenciando a execução do segundo (o mais 
    // de cima).
    @inspect()
    @logarTempoDeExecucao(true)
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}