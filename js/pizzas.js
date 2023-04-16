// TABS

window.addEventListener('DOMContentLoaded', function () {
  displayPizzaItems(mozzas, 'mozzas');
  displayPizzaItems(napos, 'napos');
  displayPizzaItems(fugas, 'fugas');
});

const btns = document.querySelectorAll('.tab-btn');
const menuContainer = document.querySelector('.menu-container');
const menuContent = document.querySelectorAll('.content');

menuContainer.addEventListener('click', (e) => {
  const id = e.target.getAttribute('id');
  if (id) {
    //remove active from other buttons
    btns.forEach((btn) => {
      btn.classList.remove('active');
      e.target.classList.add('active');
    });
    //hide other articles
    menuContent.forEach((content) => {
      content.classList.remove('active');
    });

    const element = document.querySelector('.' + id);
    element.classList.add('active');
  }
});

// POPULATE PIZZAS LIST

async function displayPizzaItems(pizzaItem, type) {
  let pizzas = await getPromos(type);
  let displayItem = pizzas
    .map(
      (item) => `<li class="${item.type}-item"><div class="precio">
          <p class="tipo">${item.description}</p>
          <p class="pesos">${item.price}</p>
      </div></li>`
    )
    .join('');
  let menuList = document.querySelector('.menu-list-' + type);
  menuList.innerHTML = displayItem;
}

async function getPromos(type) {
  let url = `./data/${type}.json`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Fetch error: ', error);
  }
}

// BACK BUTTON

const backBtn = document.querySelector('.back-btn');

backBtn.addEventListener('click', function () {
  window.location.href = 'index.html';
});
