const body = document.querySelector('body');
const mobileNav = document.querySelector('.header__nav-container');
const hamburgerToggle = document.getElementById('mobile-nav');

var next = document.querySelector('.next');
var prev = document.querySelector('.prev');

console.log(next);
next.addEventListener('click', () => {
  plusSlides(1);
});
prev.addEventListener('click', () => {
  plusSlides(-1);
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

hamburgerToggle.addEventListener('click', () => {
  console.log('click');
  if (hamburgerToggle.className === 'fas fa-bars mobile-nav') {
    hamburgerToggle.className = 'fas fa-times mobile-nav elevate-element';
    mobileNav.classList.add('show-mobile-nav');
    body.classList.add('no-scroll');
  } else {
    hamburgerToggle.className = 'fas fa-bars mobile-nav';
    mobileNav.classList.remove('show-mobile-nav');
    body.classList.remove('no-scroll');
  }
});
