export const unhideCards = () => {
    document.querySelectorAll(".card").forEach(card => {
        card.querySelector(".card__delete").classList.remove("hidden");
        card.querySelector(".card__edit").classList.remove("hidden");
    });
}

export const unhideSections = () => {
    document.querySelectorAll(".section__delete").forEach(sect => sect.classList.remove("hidden"));
}