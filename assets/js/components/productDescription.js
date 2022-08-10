import { createProductCard } from "./createProductCard.js";
import { readProducts } from "./crud.js";
import { closeModal, openModal } from "./handleAdminPanel.js";


export const handleProductDescription = () => {
    const cardContainers = document.querySelectorAll(".cards-box");
    cardContainers.forEach(container => container.addEventListener("click", descriptionHandler));
}

const descriptionHandler = (event) => {
    if (event.target.classList.contains("card__show-link")) {
        const cardID = event.target.parentNode.parentNode.dataset.id;
        const cardCategory = event.target.parentNode.parentNode.dataset.category;
        const product = readProducts()[cardCategory].find(product => product.id === cardID);
        const productInfoModal = generateDescription(product);
        // displayRelated(productInfoModal.querySelector(".cards-box"), cardCategory);
        productInfoModal.querySelector(".edit-panel__close-btn").addEventListener("click", () => {
            closeModal(productInfoModal);
            productInfoModal.remove();
        });
    }
}

const generateDescription = (product) => {
    const productPanel = document.createElement("div");
    productPanel.classList.add("product-info-modal", "modal");

    const productPanelTemplate = `
        <div class="product-info-modal__container modal__container">

            <div class="product-info__header modal__header">

                <h2 class="product-info__title">Visualizando: ${product.name}</h2>
                <button class="edit-panel__close-btn modal__header__close-btn"></button>

            </div>

            <div class="product-info__body modal__body">

                <div class="product-info__content">

                    <img src="${product.image}" class="product-info__image">

                    <div class="wrapper">

                        <h2 class="product-info__title">${product.name}</h2>
                        <h4 class="product-info__price"><strong>R$ ${product.price}</strong></h4>
                        <p class="product-info__description">${product.description || "Nenhuma descrição encontrada."}</p>

                    </div>

                </div>

            </div>

        </div>
    `
    productPanel.innerHTML = productPanelTemplate;
    document.querySelector("body").insertAdjacentElement("beforeend", productPanel);
    openModal(productPanel);
    return productPanel;
}

// const displayRelated = (cardContainer, productCategory) => {
//     const relatedProducts = readProducts()[productCategory];
//     relatedProducts.forEach((product, index) => {
//         if (index < 3)
//             cardContainer.appendChild(createProductCard(product, productCategory));
//     });
// }

