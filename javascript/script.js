var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("fade");
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].classList.add("fade");
    setTimeout(showSlides, 5000);
}

var menuIndex = 0;
showMenuSlides(menuIndex);

function showMenuSlides() {
    var i;
    var slides = document.getElementsByClassName("menu-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    menuIndex++;
    if (menuIndex > slides.length) {menuIndex = 1}
    slides[menuIndex-1].style.display = "block";
    setTimeout(showMenuSlides, 5000);
}
