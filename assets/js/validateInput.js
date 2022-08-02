
const errorMessages = {
    "nome": {
        valueMissing: "O nome não deve ficar vazio!"
    },
    "login-email": {
        valueMissing: "O email não deve ficar vazio!",
        patternMismatch: "Insira um email válido!"
    },
    "login-password": {
        valueMissing: "A senha não deve ficar vazia!"
    },
    "add-category": {
        valueMissing: "A categoria do produto não deve ficar vazia!"
    },
    "add-name": {
        valueMissing: "O nome do produto não deve ficar vazio!"
    },
    "add-price": {
        valueMissing: "O preço do produto não deve ficar vazio!"
    },
    "fallback": {
        "custom": "Houve um problema."
    }
}

const errors = [
    "valueMissing",
    "patternMismatch"
]

export const validateInput = (element) => {
    const input = element;
    const inputType = input.dataset.input;
    const errorSpan = document.querySelector(`[data-error="${inputType}"]`);

    if (!input.validity.valid) {
        errorSpan.innerText = showErrorMessage(input, inputType);
        input.classList.add("inp--invalid");
    }
    else {
        errorSpan.innerText = "";
        input.classList.remove("inp--invalid");
    }
}

const showErrorMessage = (input, inpType) => {
    let errorMessage;

    errors.forEach(error => {
        if (input.validity[error]) {
            try {
                errorMessage = errorMessages[inpType][error];
            }
            catch {
                errorMessage = errorMessages.fallback.custom;
            }
        }
    });

    return errorMessage;
}


