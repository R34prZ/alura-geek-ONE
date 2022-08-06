import { readProducts } from "./crud.js";


export const createProductCard = ({ image, name, price, id }) => {
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

    cardDiv.dataset.id = id;
    cardDiv.innerHTML = cardTemplate;

    return cardDiv;
}


export const displaySectionHTML = (category) => {
    // cria uma seção no HTML
    
    const categorySect = document.createElement("section");
    categorySect.classList.add(`${category}-sect`, "sect", "container");
    categorySect.dataset.category = category;

    const sectTitle = category.trim().toLowerCase().replaceAll(/[-_/]/g, " ").replace(/[a-zç]/, w => w.toUpperCase());
    console.log(sectTitle);

    const sectTemplate = `
        <div class="sect__header">
            <h2 class="sect__title">${sectTitle}</h2>
            <a href="./produtos.html" class="sect__link">Ver tudo</a>
        </div>

        <div class="cards-box"></div>
    `

    categorySect.innerHTML = sectTemplate;

    document.querySelector("main").insertAdjacentElement("beforeend", categorySect);
}


export const displayAllCards = () => {
    const cardsContainer = document.querySelector(".produtos-sect > .cards-box");
    const database = readProducts();

    for (let category in database) {
        database[category].forEach(product => cardsContainer.appendChild(createProductCard(product)));
        console.log(category);
    }
}


export const displayAllCategories = async () => {

    const database = readProducts();

    for (let category in database) {
        if (category != "_firstLog") {
            displaySectionHTML(category);   
            const cardsContainer = document.querySelector(`[data-category="${category}"] > .cards-box`);
            database[category].forEach(data => cardsContainer.appendChild(createProductCard(data)));
        }
    }
}



// const resetCardContainer = (section) => {
//     const cards = document.querySelectorAll(`[data-category="${section}"] > .cards-box > .card`);

//     cards.forEach(card => card.remove());
// }

