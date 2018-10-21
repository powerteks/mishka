var navMain    = document.querySelector('.main-nav'),
    navToggle  = document.querySelector('.main-nav__button-toggle');

navMain.classList.remove('main-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
  } else {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
  }
});