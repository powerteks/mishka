var navMain    = document.querySelector('.main-nav'),
    navToggle  = document.querySelector('.main-nav__button-toggle'),
    commSlide  = document.querySelectorAll('.comments__item'),
    commPrev   = document.querySelector('.comments__button--previous'),
    commNext   = document.querySelector('.comments__button--next'),
    linkBuy = document.querySelector('.product-card__buy'),
    popupModal = document.querySelector('.modal'),
    closeModal = document.querySelector('.modal__submit'),
    slideIndex = 0;

showSlide(slideIndex);

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

linkBuy.addEventListener('click', function(event) {
  event.preventDefault();
  popupModal.classList.add("modal__show");
})

closeModal.addEventListener('click', function(event) {
  event.preventDefault();
  popupModal.classList.remove("modal__show");
})

commPrev.addEventListener('click', function(n) {
     showSlide(slideIndex -= 1);
});

commNext.addEventListener('click', function(n) {
     showSlide(slideIndex += 1);
});

function showSlide(n) {
  var i
  if ( n > commSlide.length-1) { slideIndex = 0 };
  if ( n < 0 ) { slideIndex = commSlide.length-1 };
  for ( i = 0; i < commSlide.length; i++) {
    commSlide[i].classList.remove('comments__item-show');
  };
  commSlide[slideIndex].classList.add('comments__item-show');
};