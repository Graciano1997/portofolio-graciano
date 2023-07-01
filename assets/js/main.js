/* eslint-disable no-empty */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
let windowSizemobile = window.innerWidth;

function handleResizeMobile() {
  const outerWidth = window.innerWidth;
  windowSizemobile = outerWidth;

  if (windowSizemobile < 768) {
    document.querySelector('.nav-links').classList.add('hide');
  } else {
    document.querySelector('.nav-links').classList.remove('hide');
  }
}

// Add event listener for the window resize event

/** ************WINDOWS POPUP******************** */

const linksOption = {
  linkPortfolio: document.querySelector('#item-portfolio'),
  linkAbout: document.querySelector('#item-about'),
  linkContact: document.querySelector('#item-contact'),
};

const { linkPortfolio, linkAbout, linkContact } = linksOption;

const project = {
  images: { iot: { path: './assets/img/iot.svg', alt: 'iot' }, btnClose: { path: './assets/img/iotclose.svg', alt: 'close icon', id: 'projectClose' } },
  title: 'Keeping track of hundreds of components',
  techLanguage: ['Ruby on Rails', 'Css', 'JavaScript'],
  content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it 1960s.`,
  button: {
    label: ['See live', 'See source'],
    iconsPath: ['./assets/img/seeLive.svg', './assets/img/seeGit.svg'],
  },
};

//* ****PORTOFOLIO ENDS******************************************
const hamburguerBtn = document.querySelector('#hamburg-icon');

// fUNCTIONS HIDE****************************************************
function hide() {
  document.querySelector('.headline-section').classList.toggle('hide');
  document.querySelector('.works-section').classList.toggle('hide');
  document.querySelector('.about').classList.toggle('hide');
  document.querySelector('.contact').classList.toggle('hide');
  document.querySelector('.socialmedia-links').classList.toggle('hide');
  document.querySelector('.email_links_container > ul').classList.toggle('hide');
  document.querySelector('.nav-links').classList.remove('hide');

  // document.querySelector('.popup').classList.toggle('hide');
}
function hideLink() {
  document.querySelector('.nav-links').classList.remove('hide');
}

function hideAll() {
  document.querySelector('.header-menu').classList.toggle('hide');
  document.querySelector('.main').classList.toggle('hide');
}

function hideToPopup() {
  document.querySelector('.nav-links').classList.toggle('hide');
  document.querySelector('.header-menu').classList.toggle('hide');
  document.querySelector('.indicator-finish').classList.toggle('hide');
  document.querySelector('.popup').classList.toggle('hide');
  hide();
}

function removeBgHeightMenu() {
  document.querySelector('.header-menu').classList.remove('defaultHeight');
  document.querySelector('.container').classList.remove('bodyBg');

  hamburguerBtn.src = './assets/img/hamburguer.svg';
}

function addBgHeightMenu() {
  document.querySelector('.header-menu').classList.toggle('defaultHeight');
  document.querySelector('.container').classList.toggle('bodyBg');
  if (document.querySelector('.header-menu').classList.contains('defaultHeight')) {
  } else {
    document.querySelector('.nav-links').classList.add('hide');
  }
}
/* function addFullHeight() {
  document.querySelector('.popup').classList.toggle('fullHeight');
} */

/** ***************END FUNCTIONS************************************* */

/** ***************EVENTS */
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

hamburguerBtn.addEventListener('click', () => {
  const adress = (hamburguerBtn.src).replace('http://127.0.0.1:5501', '');
  if (adress === '/assets/img/close.svg') {
    hamburguerBtn.src = './assets/img/hamburguer.svg';
  } else {
    hamburguerBtn.src = './assets/img/close.svg';
    // document.querySelector(".nav-links").style.display="block";
  }
  hide();
  addBgHeightMenu();
});

/*
hamburguerBtn.removeEventListener('click', () => {
  const adress = (hamburguer.src).replace('http://127.0.0.1:5501', '');
  if (adress === '/assets/img/close.svg') {
     hide();

  document.querySelector('.nav-links').classList.add('hide');

    removeBgHeightMenu();
  }
});
*/

/** BUTTON CONSTRUCTOR */
function createSeeButtons(project, n) {
  const button = document.createElement('button');
  button.classList.add('project-btn-primary');
  button.textContent = project.button.label[n];
  const img = document.createElement('img');
  img.src = project.button.iconsPath[n];
  img.alt = 'icon';
  button.appendChild(img);
  return button;
}
/** BUTTON CONSTRUCTOR */

/* creating the List */
function createListItem(project, i) {
  const li = document.createElement('li');
  li.classList.add('language');
  const a = document.createElement('li');
  a.href = '#';
  a.textContent = project.techLanguage[i];
  li.appendChild(a);
  return li;
}
function createListTech(project) {
  const ul = document.createElement('ul');
  ul.classList.add('project-list');
  for (let i = 0; i < project.techLanguage.length; i++) {
    ul.appendChild(createListItem(project, i));
  }
  return ul;
}
/* END LIST */

/* creating Title */
function createTitle(project) {
  const h3 = document.createElement('h3');
  h3.classList.add('project-title');
  h3.textContent = project.title;
  return h3;
}
/* END Creating content */

/* creating Contents */
function createContent(project) {
  const p = document.createElement('p');
  p.textContent = project.content;
  return p;
}
/* END Creating content */

/* creating Contents */
function createImageIot(project, name) {
  const imageName = name.toLowerCase();

  if (imageName === 'iot') {
    const imgIot = document.createElement('img');
    imgIot.alt = project.images.iot.alt;
    imgIot.src = project.images.iot.path;
    return imgIot;
  }

  if (imageName === 'close') {
    const imgClose = document.createElement('img');
    imgClose.alt = project.images.btnClose.alt;
    imgClose.src = project.images.btnClose.path;
    imgClose.id = project.images.btnClose.id;
    return imgClose;
  }
  return 'please I only build: iot or close images';
}
/* END Creating content */
/* the containers */

/* the containers */

function createPopup(project) {
  const projectHeaderDiv = document.createElement('div');
  projectHeaderDiv.classList.add('project-header');
  projectHeaderDiv.append(createTitle(project), createListTech(project));

  const projectContentDiv = document.createElement('div');
  projectContentDiv.classList.add('project-contet');
  projectContentDiv.append(createContent(project), createContent(project));

  const projectSeeDiv = document.createElement('div');
  projectSeeDiv.classList.add('project-see');
  projectSeeDiv.append(createSeeButtons(project, 0), createSeeButtons(project, 1));

  const projectCardDiv = document.createElement('div');
  projectCardDiv.classList.add('project-card');
  projectCardDiv.append(projectHeaderDiv, projectContentDiv, projectSeeDiv);

  const projectImgDiv = document.createElement('div');
  projectImgDiv.classList.add('project-img');
  projectImgDiv.append(createImageIot(project, 'close'), createImageIot(project, 'iot'));

  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectDiv.append(projectImgDiv, projectCardDiv);

  const popupDiv = document.createElement('div');
  popupDiv.classList.add('popup');
  popupDiv.append(projectDiv);

  // document.querySelector('.popup').classList.toggle('');

  hideAll();
  document.querySelector('.modal').classList.remove('hide');
  document.querySelector('.modal').append(popupDiv);

  const closeProjectBtn = document.querySelector('#projectClose');

  closeProjectBtn.addEventListener('click', () => {
    //  document.querySelector(".popup").classList.add("hide");
    document.querySelector('.modal').removeChild(document.querySelector('.popup'));
    document.querySelector('.modal').classList.add('hide');
    hideAll();
  });
}
const seeProjectList = document.querySelectorAll('.btnPopup');
window.addEventListener('resize', handleResizeMobile);

seeProjectList.forEach((seeProject) => {
  seeProject.addEventListener('click', () => {
    if (windowSizemobile < 768) {
      createPopup(project);
    } else {

    }
  });
});

let windowSize = window.outerWidth;

function handleResize() {
  const { outerWidth } = window;
  windowSize = outerWidth;
}

// Add event listener for the window resize event
