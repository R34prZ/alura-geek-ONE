
export const editModal = (cardTitle) => {
    const modal = document.createElement("div");
    modal.classList.add("modal", "edit-modal");

    const modalTemplate = `
        <div class="edit-panel__container modal__container">

            <div class="edit-panel__header modal__header">
                <h2 class="edit-panel__title modal__header__title">Editando: ${cardTitle}</h2>
                <button class="edit-panel__close-btn modal__header__close-btn"></button>
            </div>

            <div class="edit-panel__body modal__body">
                <form class="edit-panel__form">
                    <input class="edit-panel__inp inp" type="text" placeholder="Imagem do produto" data-input="edit-image">
                    <input class="edit-panel__inp inp" type="text" placeholder="Nome do produto" data-input="edit-name">
                    <input class="edit-panel__inp inp" type="text" placeholder="Preço do produto" data-input="edit-price">
                    <button type="submit" class="edit-panel__save-btn btn">Salvar</button>
                </form>
            </div>

        </div>
    `

    modal.innerHTML = modalTemplate;

    return modal;
}