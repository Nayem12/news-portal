const Allcategories = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => addCategories(data.data.news_category))
}
const addCategories = categories => {
    categories.forEach(categorie => {
        // console.log(categorie);
        const addcategoriesId = document.getElementById('add-categories');
        const creatdiv = document.createElement('div');
        creatdiv.classList.add('col');
        creatdiv.innerHTML = `
            <div class="col single-style">
                 <button class="btn" onclick="newsfile('${categorie.category_id}')">${categorie.category_name}</button>
            </div>
        `
        addcategoriesId.appendChild(creatdiv);

    })
    // '${categorie}'
}
const newsfile = (category_id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => singlenews(data.data))
    // console.log(data);
}

const singlenews = finds => {
    const newssection = document.getElementById('news-section');
    newssection.innerHTML = ``;
    finds.forEach(find => {
        console.log(find)
        const CreatDiv = document.createElement('div');
        CreatDiv.classList.add('row', 'g-0', 'mt-5');
        CreatDiv.innerHTML = `
    <div class="col-md-4">
        <img src="${find.image_url}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
    `
        newssection.appendChild(CreatDiv);
    })
}
Allcategories()
{/* <img src="${find.image_url}" class="img-fluid rounded-start" alt="..."> */ }