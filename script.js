let totalLikes = 0;

// Подсчёт фотографий

function countPhotos(){

let photos=document.querySelectorAll(".photo");

document.getElementById(
"image-counter"
).textContent=photos.length;

}


// Лайки

document.querySelectorAll(
".like-btn"
).forEach(button=>{

button.addEventListener(
"click",

function(){

let likes=
this.querySelector(".likes");

let count=
parseInt(likes.textContent);

count++;

likes.textContent=count;

totalLikes++;

document.getElementById(
"total-likes"
).textContent=totalLikes;

});

});


// Фильтры

document.querySelectorAll(
".filter-btn"
).forEach(button=>{

button.addEventListener(
"click",

function(){

let category=
this.dataset.filter;

document.querySelectorAll(
".image-card"
).forEach(card=>{

if(
category==="all" ||
card.dataset.category===category
){

card.classList.remove(
"hidden"
);

}else{

card.classList.add(
"hidden"
);

}

});

});

});


countPhotos();