//SHOW MENU
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    blurDiv = document.querySelector('.blur-div');
  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
      blurDiv.classList.toggle('blurry');
    });
  }
};

showMenu('nav-toggle', 'nav-list');

// HIDE MENU
const navItem = document.querySelectorAll('.navbar__list--item');

function hideList() {
  const list = document.getElementById('nav-list');
  const blurDiv = document.querySelector('.blur-div');

  list.classList.remove('show-menu');
  blurDiv.classList.remove('blurry');
}

navItem.forEach((n) => n.addEventListener('click', hideList));

// HIDE ON SCROLL
const navList = document.getElementById('nav-list');

const hideListOnScroll = () => {
  navList.addEventListener('transitionend', () => {
    document.addEventListener('scroll', hideList);
  });
};

hideListOnScroll();
