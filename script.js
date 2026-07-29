// ROLAGEM SUAVE AO CLICAR NO MENU
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// HEADER COM EFEITO AO ROLAR
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(9,9,9,0.95)';
    header.style.padding = '15px 5%';
  } else {
    header.style.background = 'rgba(9,9,9,0.7)';
    header.style.padding = '20px 5%';
  }
});

// ANIMAÇÃO DE ENTRADA NOS CARDS AO ROLAR
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplica animação nos cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card-beneficio, .card-produto, .card-depoimento');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });
});

// BOTÃO WHATSAPP COM MENSAGEM DINÂMICA
document.querySelectorAll('.btn-wpp').forEach(button => {
  button.addEventListener('click', function() {
    const produto = this.closest('.card-produto').querySelector('h3').innerText;
    const marca = this.closest('.card-produto').querySelector('.marca').innerText;
    this.href = `https://wa.me/5511926630903?text=Olá! Tenho interesse no perfume ${produto} - ${marca.replace('Marca: ', '')}`;
  });
});

// FECHAR MENU MOBILE AO CLICAR
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Se tiver menu mobile depois, fecha aqui
  });
});

console.log('RLD Fragrances - Site carregado com sucesso');
