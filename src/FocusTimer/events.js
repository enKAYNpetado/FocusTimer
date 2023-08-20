import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js"
import state from "./state.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key) // o \d serve para testar se é um número. Significa que o focus timer só vai aceitar se a tecla digitada for um número.
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time
    //se o time for maior que 60, deixa como 60 mesmo. Senão(:), deixa o número do time mesmo.

    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
  })
}
