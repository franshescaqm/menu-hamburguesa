var boton = document.body.getElementsByTagName('button')[0];

function showMenu() {
var menuList = document.getElementById('menu-list');

if (menuList.classList.contains("disabled-menu")) {
menuList.classList.remove("disabled-menu");
menuList.classList.add("enabled-menu");
} else {
  menuList.classList.remove("enabled-menu");
  menuList.classList.add("disabled-menu");
}
  }
boton.addEventListener("click",showMenu);
