const imgSelector = document.querySelector("#image-selector");
const imgInput = document.querySelector("#url");

imgSelector.onchange = () => {
    const imgPath = imgSelector.value;
    imgInput.value = imgPath;
};