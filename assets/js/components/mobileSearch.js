const searchField = document.querySelector(".header__search");
const searchResults = document.querySelector(".header__search-result");

const handleMobileSearch = () => {
    if (!searchField.classList.contains("header__search--active")) searchField.classList.add("header__search--active");
    else searchField.classList.remove("header__search--active");
}

document.querySelector(".header__search__button").addEventListener("focus", (event) => {
    event.stopImmediatePropagation();
    handleMobileSearch();
});

window.addEventListener("click", (event) => {
    // esconde o menu de pesquisa caso o usuário clique fora do menu
    if (!searchField.contains(event.target)) searchField.classList.remove("header__search--active");
    if (!searchResults.contains(event.target) && !searchField.contains(event.target)) searchResults.classList.remove("header__search-result--active");
});
