const slides = document.querySelectorAll(".text-slide");
const bioImage = document.getElementById("bioImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;


function showSlide(index) {
  
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

 
  const imageSrc = slides[index].getAttribute("data-image");
  if(imageSrc) {
    bioImage.src = imageSrc;
  }

  currentSlide = index;
}


nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));


showSlide(currentSlide);
