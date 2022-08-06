import { readProducts } from "./crud.js";


export const createProductCard = ({ image, name, price }) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardTemplate = `
        <img src="${image}" class="card__img">
        <div class="card__info">
            <p class="card__title">${name}</p>
            <h3 class="card__price">R$ ${price}</h3>
            <a href="./sobre-produto.html" class="card__show-link">Ver produto</a>
        </div>
    `

    cardDiv.innerHTML = cardTemplate;

    return cardDiv;
}



export const displayAllCards = () => {
    const cardsContainer = document.querySelector(".produtos-sect > .cards-box");
    const database = readProducts();

    for (let category in database) {
        database[category].forEach(product => cardsContainer.appendChild(createProductCard(product)));
    }
}


export const displayAllCategories = async (section) => {
    const cardsContainer = document.querySelector(`[data-category="${section}"] > .cards-box`);
    const database = readProducts();

    resetCardContainer(section);

    database[section].forEach(data => cardsContainer.appendChild(createProductCard(data)));
}



const resetCardContainer = (section) => {
    const cards = document.querySelectorAll(`[data-category="${section}"] > .cards-box > .card`);

    cards.forEach(card => card.remove());
}

