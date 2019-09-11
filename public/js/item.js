const image = document.createElement("img");
image.src = src;
image.className = "item__image";
// todo


function createProduct(name, description, cost, imgSrc) {
    let contentContainer = document.querySelector(".content");
    let pTitle = document.createElement("p");
    pTitle.innerText = name;
    pTitle.className = "product-title";

    let pDesc = document.createElement("p");
    pDesc.innerText = description;
    pDesc.className = "product-description";

    let pCost = document.createElement("p");
    pCost.innerText = cost;
    pCost.className = "product-cost";

    let img = document.createElement("img");
    img.alt = name;
    img.src = imgSrc;
    img.className = "product-image";

    let productContainer = document.createElement("div");
    productContainer.className = "product";

    productContainer.appendChild(img);
    productContainer.appendChild(pTitle);
    productContainer.appendChild(pDesc);
    productContainer.appendChild(pCost);
    contentContainer.appendChild(productContainer);
}