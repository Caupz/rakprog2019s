function setup(){
    // only homepage
    const root = document.getElementById("item-list");
    if(!root) return;

    createItems();
    setupCategoryListener();
}