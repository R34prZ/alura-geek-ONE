

// um "produto" vai ser composto por: Imagem, nome e preço.

export const setProduct = (database) => localStorage.setItem("produtos", JSON.stringify(database));

export const deleteCategory = (category) => {
    const database = readProducts();
    delete database[category];
    setProduct(database);
}

export const createCategory = (category) => {
    const database = readProducts();
    database[category] = [];
    setProduct(database);
}

export const deleteAllDatabase = () => {
    localStorage.clear();

}


export const setID = (product) => {
    // gera um id pseudo aleatório

    let idStr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));

    for (let i = 0; i < 29; i++) {
        let r = Math.floor(Math.random() * 10);
        idStr += r;
    }

    idStr += new Date().getTime();

    product.id = (idStr);
}

export const createProduct = (product, category) => {
    const database = readProducts();

    category = category.toLowerCase();

    // se a categoria existir, adicionar produto a ela, se não, criar categoria
    database[category] = database[category] || [];

    setID(product);

    database[category].push(product);

    setProduct(database);
}


export const readProducts = () => JSON.parse(localStorage.getItem("produtos")) || {};


export const updateProduct = (id, category, newData) => {
    const database = readProducts();
    let productIndex = database[category].findIndex(product => product.id == id);

    database[category][productIndex] = { ...newData, id: id };

    setProduct(database);
}


export const deleteProduct = (id, category) => {
    const database = readProducts();

    database[category] = database[category].filter(product => (product.id != id));

    setProduct(database);
}

export const crud = { setID, setProduct, createCategory, createProduct, readProducts, updateProduct, deleteProduct };
