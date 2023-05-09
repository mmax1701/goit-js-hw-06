let numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', numberOfCategories.length);

numberOfCategories.forEach(category => {
    const categoryEl = category.querySelector("h2").textContent;
    const elements = category.querySelectorAll("li").length;

    console.log('Category: ', categoryEl);
    console.log('Elements: ', elements);
});
