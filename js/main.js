const body = document.querySelector('body');
const mobileNav = document.querySelector('.header__nav-container');
const hamburgerToggle = document.getElementById('mobile-nav');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', () => {
  plusSlides(1);
});
prev.addEventListener('click', () => {
  plusSlides(-1);
});

let slideIndex = 1;
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
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
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

//variables for error handling
const submitButton = document.querySelector('#button-submit');
const input = document.querySelector('#input');
const errorMessage = document.querySelector('.error-message');
const errorCircle = document.querySelector('.error-circle');
const inputContainer = document.querySelector('.input-container');
const form = document.querySelector('#form');

//validation function
function validate(e) {
  e.preventDefault();
  const regEx = /^.+@\w+\.\w+$/;
  console.log(input.value);
  if (regEx.test(String(input.value).toLowerCase())) {
    console.log('valid');
    input.classList.remove('form-error');
    errorMessage.style.display = 'none';
    inputContainer.classList.remove('box-error');
    input.style = 'color: black';
    inputContainer.classList.remove('box-error');
  } else {
    errorMessage.style.display = 'block';
    input.classList.add('form-error');
    inputContainer.classList.add('box-error');
    input.style = 'color: hsl(12, 88%, 59%)';
    input.classList.add('place');
  }
}

submitButton.addEventListener('click', validate);
