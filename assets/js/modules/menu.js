const linksOption = {
    linkPortfolio: document.querySelector('#item-portfolio'),
    linkAbout: document.querySelector('#item-about'),
    linkContact: document.querySelector('#item-contact'),
  };

const { linkPortfolio, linkAbout, linkContact } = linksOption;
const hamburguerBtn = document.querySelector('#hamburg-icon');

hamburguerBtn.addEventListener('click', () => {
    const adress = (hamburguerBtn.src).replace('http://127.0.0.1:5501', '');
    if (adress === '/assets/img/close.svg') {
      hamburguerBtn.src = './assets/img/hamburguer.svg';
    } else {
      hamburguerBtn.src = './assets/img/close.svg';
    }
    hide();
    addBgHeightMenu();
  });

  
function hide() {
    document.querySelector('.headline-section').classList.toggle('hide');
    document.querySelector('.works-section').classList.toggle('hide');
    document.querySelector('.about').classList.toggle('hide');
    document.querySelector('.contact').classList.toggle('hide');
    document.querySelector('.socialmedia-links').classList.toggle('hide');
    document.querySelector('.email_links_container > ul').classList.toggle('hide');
    document.querySelector('.nav-links').classList.remove('hide');
  }
  

  
  function removeBgHeightMenu() {
    document.querySelector('.header-menu').classList.remove('defaultHeight');
    document.querySelector('.container').classList.remove('bodyBg');
    hamburguerBtn.src = './assets/img/hamburguer.svg';
  }
  
  function addBgHeightMenu() {
    document.querySelector('.header-menu').classList.toggle('defaultHeight');
    document.querySelector('.container').classList.toggle('bodyBg');
    if (!document.querySelector('.header-menu').classList.contains('defaultHeight')) {
      document.querySelector('.nav-links').classList.add('hide');
    }
  }
  
  linkPortfolio.addEventListener('click', () => {
    removeBgHeightMenu();
    hide();
    document.querySelector('.nav-links').classList.add('hide');
  });
  
  linkAbout.addEventListener('click', () => {
    removeBgHeightMenu();
    hide();
    document.querySelector('.nav-links').classList.add('hide');
  });
  
  linkContact.addEventListener('click', () => {
    removeBgHeightMenu();
    hide();
    document.querySelector('.nav-links').classList.add('hide');
  });
  