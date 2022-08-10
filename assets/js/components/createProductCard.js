import { readProducts } from "./crud.js";


export const createProductCard = ({ image, name, price, id }, category) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const cardTemplate = `
        <img src="${image}" class="card__img">
        <div class="card__info">
            <p class="card__title">${name}</p>
            <h3 class="card__price">R$ ${price}</h3>
            <a class="card__show-link">Ver produto</a>
        </div>
        <button class="card__delete hidden"></button>
        <button class="card__edit hidden"></button>
    `

    cardDiv.dataset.id = id;
    cardDiv.dataset.category = category;
    cardDiv.innerHTML = cardTemplate;

    return cardDiv;
}


export const displaySectionHTML = (category) => {
    // cria uma seção no HTML
    
    const categorySect = document.createElement("section");
    categorySect.classList.add(`${category}-sect`, "sect", "container");
    categorySect.dataset.category = category;
    categorySect.id = category;

    const sectTitle = category.trim().toLowerCase().replaceAll(/[-_/]/g, " ").replace(/[a-zç]/, w => w.toUpperCase());

    const sectTemplate = `
        <div class="sect__header">
            <div class="wrapper">
                <h2 class="sect__title">${sectTitle}</h2>
                <button class="section__delete hidden"></button>
            </div>

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
        if (category != "_firstLog") {
            database[category].forEach(product => cardsContainer.appendChild(createProductCard(product, category)));
        }
    }
}


export const displayAllCategories = async () => {

    const database = readProducts();

    for (let category in database) {
        if (category != "_firstLog") {
            displaySectionHTML(category);   
            const cardsContainer = document.querySelector(`[data-category="${category}"] > .cards-box`);
            database[category].forEach(data => cardsContainer.appendChild(createProductCard(data, category)));
        }
    }
}

export const updateSection = (sect) => {
    const sectionCardContainer = document.querySelector(`[data-category="${sect}"] > .cards-box`);

    sectionCardContainer.innerHTML = "";
    // resetCardContainer(sect);

    readProducts()[sect].forEach(card => sectionCardContainer.appendChild(createProductCard(card, sect)));
    console.log("Updating cards");
}

export const updateAllCards = () => {
    const cardsContainer = document.querySelector(".produtos-sect > .cards-box");
    cardsContainer.innerHTML = "";

    displayAllCards();
}

export const deleteSectionHTML  = (sect) => {
    document.querySelector(`[data-category="${sect}"]`).remove();
}


// const resetCardContainer = (section) => {
//     const cards = document.querySelectorAll(`[data-category="${section}"] > .cards-box > .card`);

//     cards.forEach(card => card.remove());
// }

