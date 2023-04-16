// POPULATE PROMOS LIST
window.addEventListener('DOMContentLoaded', async () => {
  let promos = await getPromos();
  let displayPromos = promos
    .map(
      (item) => `<article class="promo-item" id="${item.id}">
    <p class="promo-texto">${item.descripcion}</p>
    <p class="promo-precio">${item.precio}</p>
</article>`
    )
    .join('');
  let promoArticle = document.querySelector('.promo-center');
  promoArticle.innerHTML = displayPromos;
});

async function getPromos() {
  let url = './data/promos.json';
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Fetch error: ', error);
  }
}

// MENU BUTTON
const pizzaBtn = document.querySelector('.pizzas-btn');

pizzaBtn.addEventListener('click', () => {
  window.location.href = 'pizzas.html';
});

const empanadaBtn = document.querySelector('.empanadas-btn');

empanadaBtn.addEventListener('click', () => {
  window.location.href = 'empanadas.html';
});

// SCROLL - ONE PAGE
const navbar = document.querySelector('.navbar');
const scrollLinks = document.querySelectorAll('.scroll-link');
const linksContainer = document.querySelector('.navbar__container');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    const containerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
  });
});

// BACK TO TOP
const backToTopBtn = document.querySelector('.back-to-top');

window.onscroll = function () {
  scrollFunction();
};

backToTopBtn.addEventListener('click', topFunction);

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
