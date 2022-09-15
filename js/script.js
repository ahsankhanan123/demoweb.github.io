let toggle = document.querySelector(".toggle");
let nav = document.querySelector(".nav");

toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
});




let searchbtn = document.querySelector (".search-btn");
let searchbox = document.querySelector (".search-box");

searchbtn.addEventListener ("click", function () {
  searchbtn.classList.toggle ("search-active");
  searchbox.classList.toggle ("search-active");
});

