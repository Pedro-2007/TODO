import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    connect() {
        const input = this.element.querySelector('input[name="task[description]"]')
        const counter = this.element.querySelector('div')
        if (input && counter) {
            input.placeholder = "Escreva sua próxima tarefa"
            input.maxLength = 80

            input.addEventListener('input', () => {
                const remainingChars = 80 - input.value.length
                counter.textContent = `Restam ${remainingChars} caracteres`
            })
        }
    }
}
