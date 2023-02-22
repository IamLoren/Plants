/*BURGER */
let hamb = document.querySelector('.burger');
let navMenu = document.querySelector('.header__nav');
let closeLine = document.querySelector('.header-nav-close');
let firstLink = document.querySelector('.first');
let secondLink = document.querySelector('.second');
let thirdLink = document.querySelector('.third');
let fourthLink = document.querySelector('.fourth');
let fifthLink = document.querySelector('.fifth');


hamb.addEventListener('click', mobileMenu);
function mobileMenu() {
    hamb.classList.toggle('active');
    navMenu.classList.add('active');
    allShadow.classList.add('active');
    allShadowHeader.classList.add('active');
}

closeLine.addEventListener('click', closeMenu);
firstLink.addEventListener('click', closeMenu);
secondLink.addEventListener('click', closeMenu);
thirdLink.addEventListener('click', closeMenu);
fourthLink.addEventListener('click', closeMenu);
fifthLink.addEventListener('click', closeMenu);


function closeMenu() {
    closeLine.classList.toggle('active');
    navMenu.classList.toggle('active');
} 

/* SERVICE*/

let serviceBtns = document.querySelectorAll('.service__button');
let serviceCards = document.querySelectorAll('.card');
let gardenCards = document.getElementsByClassName('garden');
let lawnCards = document.getElementsByClassName('lawn');
let plantingCards = document.getElementsByClassName('planting');
let gardenBtn = serviceBtns[0];
let lawnBtn = serviceBtns[1];
let plantingBtn = serviceBtns[2];

gardenBtn.addEventListener('click', function() {

    if (!lawnBtn.classList.contains('active') && !plantingBtn.classList.contains('active')) {
        gardenBtn.classList.toggle('active');

        [...lawnCards].forEach((e) => {
            e.classList.toggle('blur')
        });
        [...plantingCards].forEach((e) => {
            e.classList.toggle('blur')
        });
    } else if (!lawnBtn.classList.contains('active') || !plantingBtn.classList.contains('active')) {
        gardenBtn.classList.toggle('active');

        [...gardenCards].forEach((e) => {
            e.classList.remove('blur')
        });
        if (lawnBtn.classList.contains('active')) {
        [...plantingCards].forEach((e) => {
                    e.classList.add('blur')
                });
        } else {
            [...lawnCards].forEach((e) => {
                e.classList.add('blur')
            }); 
        }
    } else {
        gardenBtn.classList.remove('active');
        gardenBtn.classList.toggle('nonactive');
        plantingBtn.classList.remove('nonactive');
        lawnBtn.classList.remove('nonactive');
    }
})

lawnBtn.addEventListener('click', function() {
    if (!gardenBtn.classList.contains('active') && !plantingBtn.classList.contains('active')) {
        lawnBtn.classList.toggle('active');

        [...gardenCards].forEach((e) => {
            e.classList.toggle('blur')
        });
        [...plantingCards].forEach((e) => {
            e.classList.toggle('blur')
        });
    } else if (!gardenBtn.classList.contains('active') || !plantingBtn.classList.contains('active')) {
        lawnBtn.classList.toggle('active');

        [...lawnCards].forEach((e) => {
            e.classList.remove('blur')
        });
        if (gardenBtn.classList.contains('active')) {
        [...plantingCards].forEach((e) => {
                    e.classList.add('blur')
                });
        } else {
            [...gardenCards].forEach((e) => {
                e.classList.add('blur')
            }); 
        }
    } else {
        lawnBtn.classList.remove('active');
        lawnBtn.classList.toggle('nonactive');
        plantingBtn.classList.remove('nonactive');
        gardenBtn.classList.remove('nonactive');
    }
})

plantingBtn.addEventListener('click', function() {
    if (!gardenBtn.classList.contains('active') && !lawnBtn.classList.contains('active')) {
        plantingBtn.classList.toggle('active');

        [...gardenCards].forEach((e) => {
            e.classList.toggle('blur')
        });
        [...lawnCards].forEach((e) => {
            e.classList.toggle('blur')
        });
    } else if (!gardenBtn.classList.contains('active') || !plantingBtn.classList.contains('active')) {
        plantingBtn.classList.toggle('active');

        [...plantingCards].forEach((e) => {
            e.classList.remove('blur')
        });
        if (gardenBtn.classList.contains('active')) {
        [...lawnCards].forEach((e) => {
                    e.classList.add('blur')
                });
        } else {
            [...gardenCards].forEach((e) => {
                e.classList.add('blur')
            }); 
        }
    } else {
        plantingBtn.classList.remove('active');
        plantingBtn.classList.toggle('nonactive');
        lawnBtn.classList.remove('nonactive');
        gardenBtn.classList.remove('nonactive');
    }
})

/* PRICES */

let priceButton = document.querySelectorAll('[alt="btn"]');
console.log(priceButton)
let priceContent = document.querySelectorAll('price__content');

let activePanel;

[...priceButton].forEach(function(el) {
    el.addEventListener('click', function() {
        
     this.classList.toggle('rotate');
     this.nextElementSibling.classList.toggle('price__content-active');
     this.parentElement.classList.toggle('price__active');

     if (activePanel) {
        activePanel.classList.remove('rotate');
        activePanel.nextElementSibling.classList.remove('price__content-active');
        activePanel.parentElement.classList.remove('price__active');
      }
      //update thingy
      activePanel = (activePanel === this) ? 0 : this;
});

})

/* CONTACTS */

const contactBtn = document.querySelector('[alt="button"]');
const mainSelect = document.querySelector('.contacts__select');
const dropText = document.querySelector('.select_text');
const contactList = document.querySelector('.contact__list');
const contactItem = document.querySelectorAll('.contact__item');
const information = document.querySelector('.information');
const contacts = document.querySelectorAll('.contact__info');
const phoneLink = document.querySelector('.contact__link');

function openList () {
  contactBtn.classList.toggle('rotate');
  mainSelect.classList.add('contacts__select-color');
  contactList.classList.toggle('contact__list-active');
};

function changeInfo (city, number, adress) {
  contacts[0].textContent = city;
  contacts[1].textContent = number;
  contacts[2].textContent = adress;
  phoneLink.removeAttribute('href');
  phoneLink.setAttribute('href', `tel:${number}`);
}

contactBtn.addEventListener('click', function () {
  openList();
})

contactItem.forEach(item => {
  item.addEventListener('click', function() {
    information.classList.add('information-active');
    dropText.innerText = this.innerText;
    openList();
    if (this.innerText === 'Canandaigua, NY') {
      changeInfo ('Canandaigua, NY', '+1	585	393 0001', '151 Charlotte Street');
    } else if (this.innerText === 'Yonkers, NY') {
      changeInfo ('Yonkers, NY', '+1	914	678 0003', '511 Warburton Ave');
    } else if (this.innerText === 'Sherrill, NY') {
      changeInfo ('Sherrill, NY', '+1	315	908 0004', '14 WEST Noyes BLVD');
    } else {
      changeInfo ('New York City', '+1	212	456 0002', '9 East 91st Street');
    }
    document.querySelector('.drop__contacts').classList.add('drop__contacts_open');
  })
})

 




    