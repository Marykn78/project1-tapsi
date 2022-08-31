// mobile__burgermenu
const burgerMenuToggle = document.querySelector(".burgermenu__toggle");
const burgerMenu = document.querySelector(".mobile__burgermenu");
const burgerIcon = `<iconify-icon icon="fa-solid:bars" style="color: black;" width="34" height="34"></iconify-icon>`
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="black" d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"/></svg>`
burgerMenuToggle.addEventListener("click",function(e){
    burgerMenu.classList.toggle("d-none");
    if(burgerMenu.classList.contains("d-none")){
        burgerMenuToggle.innerHTML = burgerIcon;
    }
    else{
        burgerMenuToggle.innerHTML = closeIcon;
    }
});