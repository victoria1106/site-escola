// Destacar o menu ativo ao clicar
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
  });
});

// Animação simples de entrada nas caixas de contato e mapa
window.addEventListener("scroll", () => {
  document.querySelectorAll(".contact-box, .map-container").forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (position < screenHeight - 100) {
      el.classList.add("visible");
    }
  });
});
