const toggleBtn = document.querySelector(".btn")
const articlesContainer = document.querySelector(".articles")

toggleBtn.addEventListener("click", ()=>{
    // console.log("he");
    document.documentElement.classList.toggle("dark-theme")
})

const articlesData = articles.map((item)=>{
    const {title,date,length,snippet} = item
    //format date
    const formatDate = moment(date).format("MMM Do, YYYY")
    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length} mins read</span>
          <p>${snippet}</p>
        </div>
       </article>`;
}).join("")

articlesContainer.innerHTML = articlesData  
console.log(moment);