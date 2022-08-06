import { readProducts } from "./crud.js";
import { createProductCard } from "./createProductCard.js";

// TODO melhorar a pesquisa de maneira que não seja necessário digitar a palavra inteira para encontrar
export const searchProduct = () => {
    const database = readProducts();
    const searchInput = document.querySelector(".header__search__input");
    const filter = searchInput.value.toUpperCase();


    for (let category in database) {
        for (let product of database[category]) {
            if (product.name.toUpperCase() == filter) {
                console.log("Found product.")
                return createProductCard(product);
            }
        }
    }

    const errorSPan = document.createElement("span");
    errorSPan.classList.add("header__search-result--error");
    errorSPan.innerText = "Nenhum produto encontrado!"

    return errorSPan;
}


export const displaySearch = () => {
    const searchResultDiv = document.querySelector(".header__search-result");
    searchResultDiv.classList.add("header__search-result--active")
    const searchResponse = searchProduct();

    searchResultDiv.innerHTML = "";

    searchResultDiv.appendChild(searchResponse);
}