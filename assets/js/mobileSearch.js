const searchField = document.querySelector(".header__search");

const handleMobileSearch = () => {
    if (!searchField.classList.contains("header__search--active")) searchField.classList.add("header__search--active");
    else removeActiveClass();
}

const removeActiveClass = () => {
    searchField.classList.remove("header__search--active");
}

document.querySelector(".header__search__button").addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    handleMobileSearch();
});

window.addEventListener("click", (event) => {
    // esconde o menu de pesquisa caso o usuário clique fora do menu
    if (!searchField.contains(event.target)) removeActiveClass();
});