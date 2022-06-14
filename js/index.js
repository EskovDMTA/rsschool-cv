
const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav-list');
const navItems = document.querySelectorAll('.nav-item');

function Menu() {
  burgerBtn.classList.toggle('collapsed');
  nav.classList.toggle('collapsed');
  navList.classList.toggle('collapsed');
}
burgerBtn.addEventListener('click', Menu);

function close_Menu() {
  setTimeout(() => {
    burgerBtn.classList.remove('collapsed');
    nav.classList.remove('collapsed');
    navList.classList.remove('collapsed');
  }, 1000);  
}
navItems.forEach(el => el.addEventListener('click', close_Menu));