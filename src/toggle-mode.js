  let darkMode = true
  const buttonToggle = document.getElementById("toggle-mode")

  buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light")
  const mode = darkMode ? "light" : "dark"
  //se o dark mode é verdadeiro vai ser light, senão, vai ser dark.

  event.currentTarget.querySelector("span").textContent = `${mode} mode `
  //currentTarget is the button

  darkMode = !darkMode
})
