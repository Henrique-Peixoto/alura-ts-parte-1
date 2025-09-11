import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController()
const form = document.querySelector('.form')

if (form) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault()
        controller.adiciona()
    })
} else {
    throw Error('A aplicação não pode ser iniciada. Verifique o form.')
}
