// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá, meu nome é ${nome}! 👋%0A%0A${mensagem}`;
  const numero = '5574998117965'; // Ex: 5511999999999

  const url = `https://wa.me/${numero}?text=${texto}`;

  window.open(url, '_blank');
});
