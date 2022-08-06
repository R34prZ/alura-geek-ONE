import "./components/validation.js";
import "./components/mobileSearch.js";
import { crud } from "./components/crud.js";
import { displayAllCategories, displayAllCards } from "./components/createProductCard.js";
import { displaySearch } from "./components/productSearch.js";


const loadJSONtoDatabase = async () => {
    // carrega os dados de um arquivo json para o local storage
    const response = await fetch("assets/produtos.json", { method: "GET" })
        .then(resp => resp.json())
        .then(data => data);

    const json = await response;

    for (let category in json) {
        json[category].forEach(product => crud.setID(product));
    }

    crud.setProduct(await json);
}

loadJSONtoDatabase();

const cardsSections = document.querySelectorAll("[data-category]");

cardsSections.forEach(section => displayAllCategories(section.dataset.category));

try {
    displayAllCards();
}
catch {
    console.log("Not on products screen.")
}


document.querySelector(".header__search__button").addEventListener("click", displaySearch);