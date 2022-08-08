import { deleteProduct, deleteCategory } from "./crud.js";
import { updateSection, updateAllCards, deleteSectionHTML } from "./createProductCard.js";
import { unhideCards, unhideSections } from "../util/unhide.js";

// TODO fazer com que só seja possível deletar caso seja o ADMIN

export const handleBtns = () => {
    const cardsContainer = document.querySelectorAll(".cards-box");
    
    cardsContainer.forEach(container => container.addEventListener("click", (event) => {
        if (event.target.classList.contains("card__delete")) {
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
            unhideSections()
        }
    }));
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

