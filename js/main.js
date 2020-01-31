const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//set initial state of menu

let showMenu = true;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    //Set Menu state
    showMenu = true;
  } else {
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    //Set Menu state
    showMenu = false;
  }
}
