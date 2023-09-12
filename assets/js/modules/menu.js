let menuHamburguer = false;
const linksOption = {
  linkPortfolio: document.querySelector('#item-portfolio-menu'),
  linkAbout: document.querySelector('#item-about-menu'),
  linkContact: document.querySelector('#item-contact-menu'),
};

const { linkPortfolio, linkAbout, linkContact } = linksOption;
const hamburguerBtn = document.querySelector('#hamburg-icon');

function hide() {
  document.querySelector('.headline-section').classList.toggle('hide');
  document.querySelector('.works-section').classList.toggle('hide');
  document.querySelector('.about').classList.toggle('hide');
  document.querySelector('.contact').classList.toggle('hide');
  document.querySelector('.socialmedia-links').classList.toggle('hide');
  document.querySelector('.email_links_container > ul').classList.toggle('hide');
  document.querySelector('.nav-links-menu').classList.toggle('hide');
}

function addBgHeightMenu() {
  document.querySelector('.header-menu').classList.toggle('defaultHeight');
  document.querySelector('.container').classList.toggle('bodyBg');
  if (!document.querySelector('.header-menu').classList.contains('defaultHeight')) {
    document.querySelector('.nav-links-menu').classList.add('hide');
  }
}

const menuHandler = () => {
  hamburguerBtn.addEventListener('click', () => {
    if (menuHamburguer === false) {
      hamburguerBtn.src = './assets/img/close.svg';
      menuHamburguer = true;
    } else {
      hamburguerBtn.src = './assets/img/hamburguer.svg';
      menuHamburguer = false;
    }
    hide();
    addBgHeightMenu();
  });
};

const setDefaultHamburguer = () => {
  hamburguerBtn.src = './assets/img/hamburguer.svg';
  menuHamburguer = false;
  return true;
};

function removeBgHeightMenu() {
  document.querySelector('.header-menu').classList.remove('defaultHeight');
  document.querySelector('.container').classList.remove('bodyBg');
  hamburguerBtn.src = './assets/img/hamburguer.svg';
}

linkPortfolio.addEventListener('click', () => {
  removeBgHeightMenu();
  hide();
  document.querySelector('.nav-links-menu').classList.add('hide');
  setDefaultHamburguer();
});

linkAbout.addEventListener('click', () => {
  removeBgHeightMenu();
  hide();
  document.querySelector('.nav-links-menu').classList.add('hide');
  setDefaultHamburguer();
});

linkContact.addEventListener('click', () => {
  removeBgHeightMenu();
  hide();
  document.querySelector('.nav-links-menu').classList.add('hide');
  setDefaultHamburguer();
});

export default menuHandler;
