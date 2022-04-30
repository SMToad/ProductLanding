window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if(window.innerWidth <= 700) return;
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementsByClassName("header__img")[0].style.width = "50px";
    document.getElementsByClassName("header__title")[0].style.fontSize = "25px";
  } else {
    document.getElementsByClassName("header__img")[0].style.width = "100px";
    document.getElementsByClassName("header__title")[0].style.fontSize = "40px";
  }
}
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slideshow__slide");
  var dots = document.getElementsByClassName("slideshow__dot");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slideshow__dot_active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " slideshow__dot_active";
}