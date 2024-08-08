let NewsContainer = document.getElementById("NewsContainer")

function display(Allnews){

    NewsContainer.innerHTML = "";
    

    for(news of Allnews){
       let img = news.urlToImage;
       let title = news.title;
       let description = news.description;
       let  LinkOfSource = news.url;
       let publishedAt = news.publishedAt;
       let Author = news.author;
       

       NewsContainer.innerHTML += `
        
       <div class="NewsCard">
           <img src=${img} alt="">

           <div class="NewsContent">
               <h2>${title}</h2>
               <p>${description}</p>
               <p>${Author} . ${publishedAt}</p>
               <a href = ${LinkOfSource} target="_blank"  >Read More</a>
           </div>
       </div>`
    }
}


async  function newsdata(NewsTitle = "Bank"){
    let Data = await fetch(`https://newsapi.org/v2/everything?q=${NewsTitle}&apiKey=6d786b8c1fcc45aba5c4d9d49186d6c1`)
        Data = await Data.json()
     display(Data.articles)
     console.log(Data.articles);
}

newsdata()