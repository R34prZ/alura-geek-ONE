
import { validateInput } from "./validateInput.js";
import { validateContactButton, validateLoginButton } from "./validateButton.js";

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