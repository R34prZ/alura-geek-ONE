import { readProducts } from "./crud.js";
import { openModal } from "./handleAdminPanel.js";


export const handleProductDescription = () => {
    const cardContainers = document.querySelectorAll(".cards-box");
    cardContainers.forEach(container => container.addEventListener("click", descriptionHandler));
}

const descriptionHandler = (event) => {
    if (event.target.classList.contains("card__show-link")) {
        const cardID = event.target.parentNode.parentNode.dataset.id;
        const cardCategory = event.target.parentNode.parentNode.dataset.category;
        const product = readProducts()[cardCategory].find(product => product.id === cardID);
        generateDescription(product);
    }
}

const generateDescription = (product) => {
    const productPanel = document.createElement("div");
    productPanel.classList.add("product-description-modal", "modal");

    const productPanelTemplate = `

        <div class="product-description-modal__container modal__container">
            <div class="edit-panel__header modal__header">
                <h2 class="edit-panel__title modal__header__title">Visualizando: ${product.name}</h2>
                <button class="edit-panel__close-btn modal__header__close-btn"></button>
            </div>

            <div class="product-description-modal__body  modal__body sobre__info">

                <div class="product-description__info">
                    <img src="${product.image}" class="sobre__img">

                    <div class="wrapper">
                        <h2 class="sobre__title">${product.name}</h2>
                        <h4 class="sobre__price">R$ ${product.price}</h4>
                        <p class="sobre__about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra tortor mi, sit amet
                            fringilla elit euismod sit amet. Praesent pellentesque eros sit amet leo condimentum sodales.
                            Nam ut pellentesque eros. Sed congue enim eu urna blandit rhoncus. Duis a ultrices quam. Aenean
                            venenatis nibh eget justo posuere, suscipit consequat nibh semper.
                        </p>
                    </div>
                </div>

            </div>

            <div class="product-description-modal__similares similares">

                <h2 class="sobre__title--stronger sobre__title">Produtos similares</h2>

                <div class="cards-box"></div>

            </div>
        </div>
    `
    productPanel.innerHTML = productPanelTemplate;
    document.querySelector("body").insertAdjacentElement("beforeend", productPanel);
    openModal(productPanel);

}