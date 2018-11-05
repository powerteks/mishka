var navMain      = document.querySelector('.main-nav'),
    navToggle    = document.querySelector('.main-nav__button-toggle'),
    commSlide    = document.querySelectorAll('.comments__item'),
    commPrev     = document.querySelector('.comments__button--previous'),
    commNext     = document.querySelector('.comments__button--next'),
    linkBuy      = document.querySelector('.product-card__buy'),
    buyCatalog   = document.querySelectorAll('.catalog-item__buy'),
    popupModal   = document.querySelector('.modal'),
    closeModal   = document.querySelector('.modal__submit'),
    popupOverlay = document.querySelector('.modal__overlay'),
    slideIndex   = 0;

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

if (linkBuy != null) {
  linkBuy.addEventListener("click", function(event) {
    event.preventDefault();
    popupModal.classList.add("modal--show");
    popupOverlay.classList.add("overlay--show");
  });
}

if (buyCatalog.length != 0) {
  for (var i = 0; i < buyCatalog.length; i++) {
    buyCatalog[i].addEventListener("click", function(event) {
      event.preventDefault();
      popupModal.classList.add("modal--show");
      popupOverlay.classList.add("overlay--show");
    });
  }
}

if (popupOverlay != null) {
  popupOverlay.addEventListener("click", function () {
    if (popupOverlay.classList.contains("overlay--show")) {
      popupModal.classList.remove("modal--show");
      popupOverlay.classList.remove("overlay--show");
    }
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27 && popupModal.classList.contains("modal--show")) {
    popupModal.classList.remove("modal--show");
    popupOverlay.classList.remove("overlay--show");
  }
});

if (closeModal != null) {
  closeModal.addEventListener("click", function(event) {
    event.preventDefault();
    popupModal.classList.remove("modal--show");
    popupOverlay.classList.remove("overlay--show");
  });
}

if (popupOverlay != null) {
  showSlide(slideIndex);

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
}