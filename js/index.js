// DESKTOP HEADER MENU OPEN AND CLOSE
const openMenu = document.querySelector('.header__menu__img-open').onclick = open;
const menu = document.querySelector('.header__window-menu');
function open(){
    menu.classList.toggle('windows-close')
}
// RECORDS BLOCK OFF SUB MENU
const rollUp = document.querySelector('.records__menu-close').onclick = rollUpMenu;
const subMenu = document.querySelector('.records__submenu');
function rollUpMenu() {
    subMenu.classList.toggle('records__close');
}
