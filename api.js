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
        // togglebar(true)
    })
    // '${categorie}'
}
const newsfile = (category_id) => {
    togglebar(true)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => singlenews(data.data))
    // console.log(data);
}

const singlenews = finds => {
    const showNews = document.getElementById('show-all-news').innerText = finds.length;
    const newssection = document.getElementById('news-section');
    if (finds.length === 0) {
        alert('No news found')
    };
    newssection.innerHTML = ``;
    finds.forEach(find => {
        console.log(find)
        const CreatDiv = document.createElement('div');
        CreatDiv.classList.add('row', 'g-0',);
        CreatDiv.innerHTML = `
        <div class="col-lg-4 col-md-12" data-bs-toggle="modal" data-bs-target="#searchOnNews" onclick="personalId('${find._id}')">
            <img src="${find.image_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-lg-8 col-md-12" data-bs-toggle="modal" data-bs-target="#searchOnNews" onclick="personalId('${find._id}')">
        <div class="card-body ms-2">
            <h5 class="card-title">${find.title}</h5>
            <p class="card-text" id="news-details">${find.details ? find.details : 'nothing found'}</p>
            <div id="author-visit">
                <div class="author-info">
                    <div class="img">
                        <img src="${find.author.img}" class="img-fluid rounded-circle w-50 h-50" alt="...">
                    </div>
                    <div>
                        <p>${find.author.name ? find.author.name : 'nothing found'}</p>
                        <p>${find.author.published_date}</p>
                    </div>
                </div>
                <div>
                    <p>views:${find.total_view ? find.total_view : 'nothing found'}</p>
                </div>
            </div>
        </div>
    </div>
    `
        newssection.appendChild(CreatDiv);
    });
    togglebar(false);



}
const togglebar = isloading => {
    const loadingbar = document.getElementById('loading');
    if (isloading) {
        loadingbar.classList.remove('d-none');
    }
    else {
        loadingbar.classList.add('d-none')
    }
}
const personalId = news_id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayModal(data.data))
}
// const 
const displayModal = allnews => {

    allnews.forEach(news => {
        const modalTitle = document.getElementById('exampleModalLabel')
        modalTitle.innerText = news.title;
        const modalBody = document.getElementById('modal-body')
        modalBody.innerHTML = ` 
      <img class="img-fluid" src="${news.author.img}" alt="">
      <P>${news.author.name ? news.author.name : 'No found name'} </br> ${news.author.published_date}
      <hr>
      <p><i class="fa-solid fa-eye"></i> ${news.total_view ? news.total_view : 'No data available'} </p>
      <p>${news.title}</p>
      <img class="img-fluid" src="${news.thumbnail_url}" alt="">
      `
    })
}


Allcategories()
newsfile('05');
