import { addProductCard } from "./addProductCard.js";
import { logAdmin } from "./logAdmin.js";

export const validateContactButton = (input) => {

    const sendButton = document.querySelector(".btn--post");

    if (input.validity.valid) {
        sendButton.disabled = false;
    }
    else {
        sendButton.disabled = true;
    }
}

export const validateLoginButton = () => {

    const loginErrorSPan = document.querySelector("[data-error='login']");
    const email = document.querySelector("[data-input='login-email']").value;
    const password = document.querySelector("[data-input='login-password']").value;

    if (email == "admin@admin.com" && password == "admin") {
        loginErrorSPan.innerText = "";
        logAdmin();
        window.location = "./produtos.html"
    }
    else {
        loginErrorSPan.innerText = "O email ou senha estão incorretos (tente admin@admin.com e admin)";
    }
}

export const validateAddProcuctButton = () => {
    const addErrorSpan = document.querySelector("[data-error='add-add']");
    const addInputs = Array.from(document.querySelectorAll("[data-add-input]"));
    const validAddInputs = addInputs.filter(inp => inp.validity.valid);

    if (validAddInputs.length == addInputs.length) { 
        addErrorSpan.innerText = ""; 
        console.log("New product added successfully");
        addProductCard();
        window.location = "./produtos.html"
    }
    else { addErrorSpan.innerText = "Todos os inputs devem estar válidos antes de adicionar um novo produto!"; }
}