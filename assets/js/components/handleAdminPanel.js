import { deleteAllDatabase } from "./crud.js";
import { closeAdminSession } from "../util/logAdmin.js"


export const handleAdminPanel = () => {
    const modal = document.querySelector(".adm-panel-modal");
    const closeBtn = document.querySelector(".adm-panel__close-btn");
    const openModalBtn = document.querySelector(".header__admin-panel-btn");
    const deleteAllDataBtn = document.querySelector(".adm-panel__delete-all-btn");
    const closeSessionBtn = document.querySelector(".adm-panel__close-session-btn");

    closeBtn.addEventListener("click", () => closeModal(modal));
    openModalBtn.addEventListener("click", () => openModal(modal));
    deleteAllDataBtn.addEventListener("click", () => deleteAllDatabase());
    closeSessionBtn.addEventListener("click", closeAdminSession);
}

const closeModal = (modal) => {
    modal.classList.remove("adm-panel-modal--active");
}

const openModal = (modal) => {
    modal.classList.add("adm-panel-modal--active");
}

