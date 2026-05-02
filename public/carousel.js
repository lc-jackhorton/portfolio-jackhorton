const slides = document.querySelectorAll(".slide");
const nextbutton = document.querySelector(".nextbutton");
const previousbutton = document.querySelector(".previousbutton");

let currentslide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

nextbutton.addEventListener("click", () => {
  currentslide = (currentslide + 1) % slides.length;
  showSlide(currentslide);
});

previousbutton.addEventListener("click", () => {
  currentslide = (currentslide - 1 + slides.length) % slides.length;
  showSlide(currentslide);
});
