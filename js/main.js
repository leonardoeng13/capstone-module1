const menuIcon = document.querySelector('.hamburguer-menu');
const navbarMobile = document.querySelector('.navbar-mobile');

const menuItem1 = document.querySelector('#menu-item1');
const menuItem2 = document.querySelector('#menu-item2');
const menuItem3 = document.querySelector('#menu-item3');
const menuItem4 = document.querySelector('#menu-item4');
const menuItem5 = document.querySelector('#menu-item5');

menuIcon.addEventListener('click', () => {
  navbarMobile.classList.toggle('change');
});

menuItem1.addEventListener('click', () => {
  navbarMobile.classList.toggle('change');
});

menuItem2.addEventListener('click', () => {
  navbarMobile.classList.toggle('change');
});

menuItem3.addEventListener('click', () => {
  navbarMobile.classList.toggle('change');
});

menuItem4.addEventListener('click', () => {
  navbarMobile.classList.toggle('change');
});

menuItem5.addEventListener('click', () => {
  navbarMobile.classList.toggle('change');
});

const guests = [
  {
    guest: 'Leo de Andrade',
    imgUrl: 'images/speakers/Leo.png',
    companyDes: 'XXXXXXXXX',
    description: 'C-Level Experience almost 15 years',
  },
  {
    guest: 'Fabia',
    imgUrl: 'images/speakers/Fabia.jpg',
    companyDes: 'XXXXXXXX',
    description: 'LOREN LOREN LOREN LOREN LOREN',
  },
  {
    guest: 'Juliana',
    imgUrl: 'images/speakers/Juliana.jpg',
    companyDes: 'XXXXXXXXXXX',
    description: 'LOREN LOREN LOREN LOREN LOREN',
  },
  {
    guest: 'Alexandre',
    imgUrl: 'images/speakers/Alexander.jpg',
    companyDes: 'XXXXXXXXXXX',
    description: 'LOREN LOREN LOREN LOREN LOREN',
  },
  {
    guest: 'Andrew',
    imgUrl: 'images/speakers/andrew-bryant.jpg',
    companyDes: 'XXXXXXXXXXX',
    description: 'LOREN LOREN LOREN LOREN LOREN',
  },
  {
    guest: 'Emmanuel',
    imgUrl: 'images/speakers/EMMANUEL-R-GOFFI.jpg',
    companyDes: 'XXXXXXXXXXX',
    description: 'LOREN LOREN LOREN LOREN LOREN',
  },
];

function createProjectsSeciton() {
  if (guests.length > 0) {
    const guestsSection = document.querySelector('.guestsSection');

    for (let i = 0; i < guests.length; i += 1) {
      guestsSection.innerHTML += '<li class="guest-container">'
        + `<img src="${guests[i].imgUrl}" alt="Guest logo"/>`
        + '<div class="guest">'
        + `<h2>${guests[i].guest}</h2>`
        + `<h3>${guests[i].companyDes}</h2>`
        + `<p>${guests[i].description}</p>`
        + '</div>'
        + '</li>';
    }
  }
}
createProjectsSeciton();