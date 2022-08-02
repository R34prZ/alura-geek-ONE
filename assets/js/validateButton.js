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
        console.log("tchai");
        window.location = "./produtos.html"
    }
    else { 
        console.log("num tchai");
        loginErrorSPan.innerText = "O email ou senha estão incorretos (tente admin@admin.com e admin)";
    }
}

