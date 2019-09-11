// needs scope
{
    const itemContainerClass = "s-item   ";
    const imageClass = "s-item__image-img";
    const titleClass = "s-item__title";
    const priceClass = "s-item__price";

    const items = document.getElementsByClassName(itemContainerClass);

    const arr = [];

    Array.from(items).forEach(item => {
        const imgs = item.getElementsByClassName(imageClass);
        if(imgs.length === 0) {
            console.log("asd 1");
            return;
        }
        const img = imgs[0];
        const src = img.src;

        if(!src) {
            console.log("asd 2");
            return;
        }

        const title = item.querySelector("."+titleClass).textContent;
        const price = item.querySelector("."+priceClass).textContent;

        arr.push({
            imgSrc: src,
            title,
            price,
            category: document.title.split("|")[0].trim(),
        });
    });

    console.log(JSON.stringify(arr));
}