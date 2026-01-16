const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-links a");
const whatsapp = document.querySelector(".whatsapp-float");

// Abre / fecha o menu
hamburger.addEventListener("click", () => {
  const isActive = nav.classList.toggle("active");

  // Esconde o WhatsApp para não ficar por cima do menu aberto
  if (isActive) {
    whatsapp.style.opacity = "0";
    whatsapp.style.pointerEvents = "none";
  } else {
    whatsapp.style.opacity = "1";
    whatsapp.style.pointerEvents = "auto";
  }
});

// Fecha o menu ao clicar em um link (âncoras)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    whatsapp.style.opacity = "1";
    whatsapp.style.pointerEvents = "auto";
  });
});

