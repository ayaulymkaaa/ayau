// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });

  // Dark mode toggle
  const darkModeSwitch = document.getElementById("dark-mode-switch");
  darkModeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkModeSwitch.checked);
  });

  // Modal window functionality
  const modal = document.querySelector(".modal");
  const modalBtn = document.querySelector(".modal-btn");
  const closeModal = document.querySelector(".close-modal");

  modalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.classList.add("hidden");
    }
  });

  // Slider functionality
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  next.addEventListener("click", nextSlide);
  prev.addEventListener("click", prevSlide);

  showSlide(slideIndex); // Initial display

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes buttonClickAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.5); }
    100% { transform: scale(1); }
}
`;
  document.head.appendChild(style);

  document
    .getElementById("animatedButton")
    .addEventListener("click", function () {
      this.style.animation = "buttonClickAnimation 0.5s";
      setTimeout(() => {
        this.style.animation = "";
      }, 500);
    });

  // Tabs functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      button.classList.add("active");
      document
        .querySelector(button.getAttribute("data-tab-target"))
        .classList.add("active");
    });
  });

  // Set the first tab as active
  document.querySelector(".tab-btn").click();
});
