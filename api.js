const Allcategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => addCategories(data.data.news_category))
}
const addCategories = categories => {
    categories.forEach(categorie => {
        console.log(categorie);
        const addcategoriesId = document.getElementById('add-categories');
        const creatdiv = document.createElement('div');
        creatdiv.classList.add('col');
        creatdiv.innerHTML = `
            <div class="col single-style">
                 <button class="btn">${categorie.category_name}</button>
            </div>
        `
        addcategoriesId.appendChild(creatdiv);

    })

}
Allcategories()