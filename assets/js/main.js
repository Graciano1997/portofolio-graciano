let windowSizemobile = window.innerWidth;

function handleResizeMobile() {
  const outerWidth = window.innerWidth;
  windowSizemobile = outerWidth;

  if (windowSizemobile < 768) {
    document.querySelector('.nav-links').classList.add('hide');
  } else {
    document.querySelector('.nav-links').classList.remove('hide');
    if (document.querySelector('.popup') !== null) {
      document.querySelector('.modal').removeChild(document.querySelector('.popup'));
      document.querySelector('.main').classList.remove('hide');
      document.querySelector('.header-menu').classList.remove('hide');
    }
  }
}

window.addEventListener('resize', handleResizeMobile);

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

const hamburguerBtn = document.querySelector('#hamburg-icon');

function hide() {
  document.querySelector('.headline-section').classList.toggle('hide');
  document.querySelector('.works-section').classList.toggle('hide');
  document.querySelector('.about').classList.toggle('hide');
  document.querySelector('.contact').classList.toggle('hide');
  document.querySelector('.socialmedia-links').classList.toggle('hide');
  document.querySelector('.email_links_container > ul').classList.toggle('hide');
  document.querySelector('.nav-links').classList.remove('hide');
}

function hideAll() {
  document.querySelector('.header-menu').classList.toggle('hide');
  document.querySelector('.main').classList.toggle('hide');
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
  for (let i = 0; i < project.techLanguage.length; i += 1) {
    ul.appendChild(createListItem(project, i));
  }
  return ul;
}

function createTitle(project) {
  const h3 = document.createElement('h3');
  h3.classList.add('project-title');
  h3.textContent = project.title;
  return h3;
}

function createContent(project) {
  const p = document.createElement('p');
  p.textContent = project.content;
  return p;
}

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
  return false;
}

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

  hideAll();
  document.querySelector('.modal').classList.remove('hide');
  document.querySelector('.modal').append(popupDiv);

  const closeProjectBtn = document.querySelector('#projectClose');

  closeProjectBtn.addEventListener('click', () => {
    document.querySelector('.modal').removeChild(document.querySelector('.popup'));
    document.querySelector('.modal').classList.add('hide');
    hideAll();
  });
}

const seeProjectList = document.querySelectorAll('.btnPopup');

seeProjectList.forEach((seeProject) => {
  seeProject.addEventListener('click', () => {
    if (windowSizemobile < 768) {
      createPopup(project);
    }
  });
});

let errorType = [];

function validatorName(clasValue) {
  const nameValue = document.querySelector(clasValue);
  if (nameValue.value.length >= 2) {
    document.querySelector(clasValue).classList.remove('invalidField');
    document.querySelector(clasValue).classList.add('validField');
    return true;
  }
  document.querySelector(clasValue).classList.add('invalidField');
  errorType.push('Please write a good name');
  return false;
}

function validatorSMS(clasValue) {
  const nameValue = document.querySelector(clasValue);
  if (nameValue.value.length >= 50) {
    document.querySelector(clasValue).classList.remove('invalidField');
    document.querySelector(clasValue).classList.add('validField');
    return true;
  }
  document.querySelector(clasValue).classList.add('invalidField');
  errorType.push(`Please write a bit more! at least 50 chars ! You wrote ${(nameValue.value.length)} chars`);
  return false;
}

function validatorEmail(clasValue) {
  const emailValue = document.querySelector(clasValue);

  if (emailValue.value.toLowerCase().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    document.querySelector(clasValue).value = emailValue.value.toLowerCase();
    document.querySelector(clasValue).classList.remove('invalidField');
    document.querySelector(clasValue).classList.add('validField');
    return true;
  }
  document.querySelector(clasValue).classList.add('invalidField');
  errorType.push('please write a valid Email');
  return false;
}
function createErrorContent(content) {
  const p = document.createElement('p');
  p.classList.add('info');
  p.textContent = content;
  return p;
}

function createError(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    document.querySelector('.information').appendChild(createErrorContent(arr[i]));
  }
}

const form = document.querySelector('#formU');

form.addEventListener('submit', (e) => {
  document.querySelector('.userEmail').value = (document.querySelector('.userEmail').value).toLowerCase();
  const nameControl = validatorName('.userName');
  const emailControl = validatorEmail('.userEmail');
  const smsControl = validatorSMS('.userSMS');

  if (nameControl && emailControl && smsControl === true) {
    form.submit();
  } else {
    e.preventDefault();
    if (document.querySelector('.info')) {
      const spanInfo = document.querySelector('.information');
      const Info = document.querySelectorAll('.info');
      Info.forEach(() => {
        spanInfo.removeChild(document.querySelector('.info'));
      });
    }
    createError(errorType);
    errorType = [];
  }
});