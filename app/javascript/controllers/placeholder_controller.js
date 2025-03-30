import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const input = this.element.querySelector('input[name="task[description]"]')
        if (input) {
            input.placeholder = "Escreva sua próxima tarefa"
        }
    }
}
