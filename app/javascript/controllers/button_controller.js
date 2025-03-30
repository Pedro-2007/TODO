import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const button = this.element.querySelector('input[type="submit"]')
        if (button) {
            button.value = "adicionar nova tarefa"
        }
    }
}