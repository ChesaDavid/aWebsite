let slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
let slideInterval;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function startSlideshow() {
    slideInterval = setInterval(function() {
        showSlides(slideIndex += 1);
    }, 3000); // Change 3000 to 3000 milliseconds (3 seconds)
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

window.onload = startSlideshow;

window.onbeforeunload = stopSlideshow;

document.querySelector('.next').addEventListener('click', function() {
    plusSlides(1);
});

document.querySelector('.previous').addEventListener('click', function() {
    plusSlides(-1);
});
        function showSlides(n) {
            let i;
            let slides = document.getElementsByClassName("slides");
            let dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
        }

let showButton = document.getElementById("up-button");
window.onscroll = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        showButton.style.display = "block";
    } else {
        showButton.style.display = "none";
    }
};
