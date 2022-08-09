import { deleteAllDatabase } from "./crud.js";
import { closeAdminSession } from "../util/logAdmin.js";
import { updateAllCards } from "../components/createProductCard.js"


export const handleAdminPanel = () => {
    const modal = document.querySelector(".adm-panel-modal");
    const closeBtn = document.querySelector(".adm-panel__close-btn");
    const openModalBtn = document.querySelector(".header__admin-panel-btn");
    const deleteAllDataBtn = document.querySelector(".adm-panel__delete-all-btn");
    const closeSessionBtn = document.querySelector(".adm-panel__close-session-btn");

    closeBtn.addEventListener("click", () => closeModal(modal));
    openModalBtn.addEventListener("click", () => openModal(modal));
    deleteAllDataBtn.addEventListener("click", deleteAllCards);
    closeSessionBtn.addEventListener("click", closeAdminSession);
}

export const closeModal = (modal) => {
    modal.classList.remove("modal--active");
}

export const openModal = (modal) => {
    modal.classList.add("modal--active");
}

const deleteAllCards = () => {
    deleteAllDatabase();
    updateAllCards();
}

