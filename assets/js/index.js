import "./components/validation.js";
import "./components/mobileSearch.js";
import { crud, readProducts, setProduct } from "./components/crud.js";
import { displayAllCategories, displayAllCards } from "./components/createProductCard.js";
import { displaySearch } from "./components/productSearch.js";


// TODO Mostrar categorias existentes ao criar novo card, criar nova categoria caso não exista

const loadJSONtoDatabase = async () => {
    // carrega os dados de um arquivo json para o local storage
    const response = await fetch("assets/produtos.json", { method: "GET" })
        .then(resp => resp.json())
        .then(data => data);

    const json = await response;

    for (let category in json) {
        if (category != "_firstLog")
            json[category].forEach(product => crud.setID(product));
    }

    const checkLog = (readProducts()._firstLog === true) || !("_firstLog" in readProducts());
    
    if (json._firstLog === "true" && checkLog) {
        console.log("First time logging");
        json._firstLog = false;
        crud.setProduct(json);
        console.log("Loaded JSON data to database");
    }
}

await loadJSONtoDatabase();

if (window.location.pathname == "/index.html")
    await displayAllCategories();


try {
    displayAllCards();
}
catch {
    console.log("Not on products screen.")
}


document.querySelector(".header__search__button").addEventListener("click", displaySearch);