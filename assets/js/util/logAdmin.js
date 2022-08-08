export const logAdmin = () => {
    sessionStorage.setItem("admin", JSON.stringify({ logged: true }));
}

export const closeAdminSession = () => {
    sessionStorage.setItem("admin", JSON.stringify({ logged: false }));
    window.location = "/index.html";
}