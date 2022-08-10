export const logAdmin = () => {
    sessionStorage.setItem("admin", JSON.stringify({ logged: true }));
}

export const closeAdminSession = () => {
    sessionStorage.setItem("admin", JSON.stringify({ logged: false }));
    const url = window.location.origin + window.location.pathname;
    const indexLocation = url.slice(0, url.lastIndexOf("/")) + "/index.html";
    window.location = indexLocation;
}