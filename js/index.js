// DESCKTOP HEADER MENU OPEN AND CLOSE
const openMenu = document.querySelector('.header__menu__img-open').onclick = open;
const menu = document.querySelector('.header__window-menu');
function open(){
    menu.classList.toggle('windows-close')
}