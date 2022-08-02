const errorMessages = {
    "valueMissing": "O input de nome não deve ficar vazio!"
}

export const validateName = () => {
    const nameInput = document.querySelector("[data-input='nome']");
    const errorSpan = document.querySelector("[data-error='nome'");
    const sendInput = document.querySelector("[data-input='send-message'");
    
    if (!nameInput.validity.valid) {
        errorSpan.innerText = errorMessages.valueMissing;
        nameInput.classList.add("call-us__input--invalid");
        sendInput.disabled = true;
    }
    else {
        errorSpan.innerText = "";
        nameInput.classList.remove("call-us__input--invalid");
        sendInput.disabled = false;
    }
}

document.querySelector("[data-input='nome']").addEventListener("blur", validateName)