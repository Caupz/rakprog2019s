

function createItemElement(item) {
    let pTitle = document.createElement("p");
    pTitle.innerText = item.title;
    pTitle.className = "product-title";

    let pCost = document.createElement("p");
    pCost.innerText = item.price;
    pCost.className = "product-cost";

    let img = document.createElement("img");
    img.alt = item.title;
    img.src = item.imgSrc;
    img.className = "product-image";

    let productContainer = document.createElement("div");
    productContainer.className = "product";

    productContainer.appendChild(img);
    productContainer.appendChild(pTitle);
    productContainer.appendChild(pCost);

    return productContainer;
}