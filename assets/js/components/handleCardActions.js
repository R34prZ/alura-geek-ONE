import { deleteProduct, deleteCategory, updateProduct, readProducts } from "./crud.js";
import { updateSection, updateAllCards, deleteSectionHTML } from "./createProductCard.js";
import { unhideCards, unhideSections } from "../util/unhide.js";
import { openModal, closeModal } from "../components/handleAdminPanel.js";
import { editModal } from "../util/editModal.js";


export const handleBtns = () => {
    const cardsContainer = document.querySelectorAll(".cards-box");



    cardsContainer.forEach(container => container.addEventListener("click", (event) => {
        if (event.target.classList.contains("card__delete")) {
            deleteCard(event);
        }
        else if (event.target.classList.contains("card__edit")) {
            editCard(event);
        }
    }));
}


const deleteCard = (event) => {
    const cardID = event.target.parentNode.dataset.id;
    const cardCategory = event.target.parentNode.dataset.category;

    console.log(`Deleting product ${event.target.parentNode.querySelector(".card__title").innerText} with ID: ${cardID} in the category: ${cardCategory}`);
    deleteProduct(cardID, cardCategory);

    try {
        updateSection(cardCategory);
    }
    catch {
        updateAllCards();
    }
    unhideCards();
    unhideSections();
}

const editCard = (event) => {
    const cardID = event.target.parentNode.dataset.id;
    const cardCategory = event.target.parentNode.dataset.category;
    const cardTitle = event.target.parentNode.querySelector(".card__title").innerText;

    console.log(`Editing product ${cardTitle}`);
    const editPanel = editModal(cardTitle);
    document.querySelector("main").appendChild(editPanel);
    openModal(editPanel);

    const editCloseBtn = editPanel.querySelector(".edit-panel__close-btn");
    editCloseBtn.addEventListener("click", () => closeModal(editPanel));

    const saveBtn = editPanel.querySelector(".edit-panel__save-btn");
    saveBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const product = readProducts()[cardCategory].find(product => product.id == cardID);

        const editImage = editPanel.querySelector("[data-input='edit-image']");
        const editName = editPanel.querySelector("[data-input='edit-name']");
        const editPrice = editPanel.querySelector("[data-input='edit-price']");
        const editDescription = editPanel.querySelector(".edit-modal__textarea");

        const updatedProduct = { 
            image: editImage.value || product.image, 
            name: editName.value || product.name, 
            price: editPrice.value || product.price,
            description: editDescription.value || product.description
         };

        updateProduct(cardID, cardCategory, updatedProduct);
        closeModal(editPanel);

        try {
            updateAllCards();
        }
        catch {
            updateSection(cardCategory);
        }

        unhideCards();
        unhideSections();
    })
}


export const handleSectionDelete = () => {
    const sections = document.querySelectorAll(".sect");

    sections.forEach(sect => sect.addEventListener("click", event => {
        if (event.target.classList.contains("section__delete")) {
            const category = event.target.parentNode.parentNode.parentNode.dataset.category;
            deleteCategory(category);
            deleteSectionHTML(category);
            console.log("Deleting category " + category);
        }
    }))
}

