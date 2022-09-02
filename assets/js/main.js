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
// tab homepage
tab_homepage = document.getElementsByClassName("tab_homepage");
tab_homepage[0].style.display = "flex";
tab_homepage[1].style.display = "none";
tab_homepage[2].style.display = "none";
tab_homepage[3].style.display = "none";
tab_homepage[4].style.display = "none";
tab_homepage[5].style.display = "none";
tab_homepage[6].style.display = "none";
tab_homepage[7].style.display = "none";
tab_homepage[8].style.display = "none";
function showTapsiService(evt, carname) {
    var i, tab_homepage, cars__item;
    tab_homepage = document.getElementsByClassName("tab_homepage");
    tab_homepage[0].style.display = "flex";
    for (i = 0; i < tab_homepage.length; i++) {
        tab_homepage[i].style.display = "none";
    }
    cars__item = document.getElementsByClassName("cars__item");
    for (i = 0; i < cars__item.length; i++) {
        cars__item[i].className = cars__item[i].className.replace(" active", "");
    }
    document.getElementById(carname).style.display = "flex";
    evt.currentTarget.className += " active";
}