import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const h1 = this.element.querySelector('h1')
        if (h1) {
            var nome = window.prompt('Qual o seu nome?')
            h1.textContent = `Lista de tarefas do/a ${nome}`
        }
    }
}