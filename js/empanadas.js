// BACK BUTTON
const backBtn = document.querySelector('.back-btn');

backBtn.addEventListener('click', function () {
  window.location.href = 'index.html';
});

//POPULATE EMPANADAS MENU USING .JSON FILE
window.addEventListener('DOMContentLoaded', async () => {
  let menuItems = await getEmpanadasMenu();
  let displayItems = menuItems
    .map((item) => `<li class="list">${item.sabor}</li>`)
    .join('');
  //console.log(displayItems);
  let menuList = document.querySelector('.types');
  menuList.innerHTML = displayItems;
});

async function getEmpanadasMenu() {
  let url = './data/empanadas.json';
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log('Fetch error: ', error);
  }
}
