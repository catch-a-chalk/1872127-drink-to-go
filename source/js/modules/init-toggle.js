var navMain = document.querySelector('.header__main');
var navToggle = document.querySelector('.header__main button');

navMain.classList.remove('header__main--nojs');

export default function initToggle() {
  navToggle.addEventListener ('click', () => {
    if (navMain.classList.contains('header__main--closed')) {
      navMain.classList.remove('header__main--closed');
      navMain.classList.add('header__main--opened');
    } else {
      navMain.classList.add('header__main--closed');
      navMain.classList.remove('header__main--opened');
    }
  });
};
