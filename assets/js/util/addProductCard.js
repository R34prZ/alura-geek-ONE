import { createProduct } from "../components/crud.js"

export const addProductCard = () => {
    const image = document.querySelector("[data-input='add-image']").value;
    const name = document.querySelector("[data-input='add-name']").value;
    const price = document.querySelector("[data-input='add-price']").value;
    const category = document.querySelector("[data-input='add-category']").value;

    const product = { image: image, name: name, price: price }

    createProduct(product, category);
}