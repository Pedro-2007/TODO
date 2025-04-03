import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["input", "counter"]
    static values = {
        contador: Number
    }

    connect() {
        const counter = this.counterTarget
        const input = this.inputTarget


        if (input && counter) {
            input.placeholder = "Escreva sua próxima tarefa"
            counter.textContent = `Restam ${this.contadorValue} caracteres`
            input.maxLength = this.contadorValue

            input.addEventListener('input', (() => {
                const remainingChars = this.contadorValue - input.value.length
                counter.textContent = `Restam ${remainingChars} caracteres`
            }).bind(this))
        }
    }
}