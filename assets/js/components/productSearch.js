import { readProducts } from "./crud.js";
import { createProductCard } from "./createProductCard.js";

// TODO melhorar a pesquisa de maneira que não seja necessário digitar a palavra inteira para encontrar
export const searchProduct = () => {
    const database = readProducts();
    const searchInput = document.querySelector(".header__search__input");
    const filter = searchInput.value.toUpperCase();

    let foundProducts = [];


    for (let category in database) {
        if (category != "_firstLog") {
            database[category].forEach(product => {
                if (product.name.toUpperCase().includes(filter) && filter.length > 0) {
                    foundProducts.push(createProductCard(product));
                }
            })
        }
    }

    if (foundProducts.length > 0) return foundProducts;

    const errorSPan = document.createElement("span");
    errorSPan.classList.add("header__search-result__error");
    errorSPan.innerText = "Nenhum produto encontrado!"

    return errorSPan;
}


export const displaySearch = (max) => {
    const searchResultDiv = document.querySelector(".header__search-result");
    searchResultDiv.classList.add("header__search-result--active")
    const searchResponse = searchProduct();
    searchResultDiv.innerHTML = "";

    // apresenta os max primeiros items que satisfazem a pesquisa
    try {
        searchResponse.forEach((product, index) => {
            if (index < max)
                searchResultDiv.appendChild(product);
        });
    }
    catch {
        searchResultDiv.appendChild(searchResponse);
    }
}