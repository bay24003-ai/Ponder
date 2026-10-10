const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");

function togglemenu() {
    menu.classList.toggle("hide");
    btn.classList.toggle("change");
}

btn.addEventListener("click", togglemenu);
