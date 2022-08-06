
import { validateInput } from "../util/validateInput.js";
import { validateContactButton, validateLoginButton, validateAddProcuctButton } from "../util/validateButton.js";

const inputs = document.querySelectorAll("[data-input]");

// valida todos os inputs
inputs.forEach(input => input.addEventListener("blur", () => {
    validateInput(input);
    if (input.dataset.input === "nome") validateContactButton(input);
}));

// valida o botão de login (caso na tela de login)
try {
    document.querySelector(".btn--login").addEventListener("click", (event) => {
        event.preventDefault();
        validateLoginButton();
    });
}
catch {
    console.log("Not on login screen.");
}

// valida o botão de adicionar produto (caso na tela de adicionar produto)
try {
    document.querySelector(".btn--add").addEventListener("click", (event) => {
        event.preventDefault();
        validateAddProcuctButton();
    })
}
catch {
    console.log("Not on Add product screen.");
}