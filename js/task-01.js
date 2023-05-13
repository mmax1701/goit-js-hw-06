let numberOfCategories = document.querySelectorAll('.item');
console.log('Number of categories: ', numberOfCategories.length);

numberOfCategories.forEach(category => {
    const categoryEl = category.firstElementChild.textContent;
    const elements = category.lastElementChild.children.length;

    console.log('Category: ', categoryEl);
    console.log('Elements: ', elements);
});
