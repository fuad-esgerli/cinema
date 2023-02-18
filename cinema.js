const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) =>{
    let clickCounter= 0;
    const widthRatio = Math.floor(window.innerWidth / 300);
    const imageItem = movieLists[i].querySelectorAll("img").length;
 arrow.addEventListener("click", function(){
    clickCounter ++;
    if(imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
    movieLists[i].style.transform = `translateX(${movieLists[i].
        computedStyleMap().get("transform")[0].x.value -300}px)`;
    } else{
        movieLists[i].style.transform = "translateX(0)";
        clickCounter = 0;
        }
 });
 
});

const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(".container,.toogle, .toogle-ball,.navbar, .sidebar,.sidebar i, .movie-list-filter select, .movie-list-title");

ball.addEventListener("click", function(){
    items.forEach((item) =>item.classList.toggle("active"))
});