let windowSize = window.innerWidth;

function handleResize() {
  const outerWidth = window.innerWidth;
  windowSize = outerWidth;

  if (windowSize < 768) {
    if (document.querySelector('.modal-body') !== null) {
      document.querySelector('.modal').classList.remove('modalBackground');
      document.querySelector('.modal').removeChild(document.querySelector('.modal-body'));
    }
  }
}

window.addEventListener('resize', handleResize);

const projectMedical = {

  images: {
    medical: { path: './assets/img/medicalIlustrate.svg', alt: 'Medical Illustration sets' },
    btnClose: { path: './assets/img/btnmedicalClose.svg', alt: 'close icon', id: 'modalClose' },
  },
  title: 'Keeping track of hundreds of components',

  techLanguage: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],

  content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,

  button: {
    label: ['See live', 'See source'],
    iconsPath: ['./assets/img/seeLive.svg', './assets/img/seeGit.svg'],
  },
};

function hideAll() {
  document.querySelector('.header-menu').classList.toggle('hide');
  document.querySelector('.main').classList.toggle('hide');
}

function removeBgHeight() {
  document.querySelector('.modal').classList.remove('modalBackground');
}

function addBgHeight() {
  document.querySelector('.modal').classList.toggle('modalBackground');
}

function createSeeButtons(projectMedical, n) {
  const button = document.createElement('button');
  button.classList.add('project-btn-primary');
  button.textContent = projectMedical.button.label[n];
  const img = document.createElement('img');
  img.src = projectMedical.button.iconsPath[n];
  img.alt = 'icon';
  button.appendChild(img);
  return button;
}

function createListItemModal(projectMedical, i) {
  const li = document.createElement('li');
  li.classList.add('modal-language');
  const a = document.createElement('li');
  a.href = '#';
  a.textContent = projectMedical.techLanguage[i];
  li.appendChild(a);
  return li;
}

function createListTechModal(projectMedical) {
  const ul = document.createElement('ul');
  ul.classList.add('modal-list');
  for (let i = 0; i < projectMedical.techLanguage.length; i += 1) {
    ul.appendChild(createListItemModal(projectMedical, i));
  }
  return ul;
}

function createTitle(projectMedical) {
  const h3 = document.createElement('h3');
  h3.classList.add('project-title');
  h3.textContent = projectMedical.title;
  return h3;
}

function createContent(projectMedical) {
  const p = document.createElement('p');
  p.textContent = projectMedical.content;
  return p;
}

function createImageMedical(projectMedical, name) {
  const imageName = name.toLowerCase();

  if (imageName === 'medical') {
    const imgMedical = document.createElement('img');
    imgMedical.alt = projectMedical.images.medical.alt;
    imgMedical.src = projectMedical.images.medical.path;
    return imgMedical;
  }

  if (imageName === 'close') {
    const imgClose = document.createElement('img');
    imgClose.alt = projectMedical.images.btnClose.alt;
    imgClose.src = projectMedical.images.btnClose.path;
    imgClose.id = projectMedical.images.btnClose.id;
    return imgClose;
  }
  return true;
}

function createPopupWindows(projectMedical) {
  const projectModalButtonDiv = document.createElement('div');
  projectModalButtonDiv.classList.add('modal-btns');
  projectModalButtonDiv.append(createSeeButtons(projectMedical, 0),
    createSeeButtons(projectMedical, 1));

  const projectModalHeaderDiv = document.createElement('div');
  projectModalHeaderDiv.classList.add('header-modal-text');
  projectModalHeaderDiv.append(createTitle(projectMedical));

  const projectModalCloseImgDiv = document.createElement('div');
  projectModalCloseImgDiv.classList.add('modal-close');
  projectModalCloseImgDiv.append(createImageMedical(projectMedical, 'close'));

  const projectModalMedicalImgDiv = document.createElement('div');
  projectModalMedicalImgDiv.classList.add('modal-img');
  projectModalMedicalImgDiv.append(createImageMedical(projectMedical, 'medical'));

  const projectModalListButtomDiv = document.createElement('div');
  projectModalListButtomDiv.classList.add('list-button');
  projectModalListButtomDiv.append(projectModalHeaderDiv, projectModalButtonDiv);

  const projectTecnolyList = document.createElement('div');
  projectTecnolyList.classList.add('modal-tecnology-list');
  projectTecnolyList.append(createListTechModal(projectMedical));

  const projectContentDiv = document.createElement('div');
  projectContentDiv.classList.add('modal-content');
  projectContentDiv.append(createContent(projectMedical));

  const projectMedicalBodyDiv = document.createElement('div');
  projectMedicalBodyDiv.id = 'modalbd';
  projectMedicalBodyDiv.classList.add('modal-body');

  projectMedicalBodyDiv.append(projectModalCloseImgDiv,
    projectModalMedicalImgDiv, projectModalListButtomDiv, projectTecnolyList, projectContentDiv);

  hideAll();

  document.querySelector('.modal').classList.remove('hide');

  document.querySelector('.modal').append(projectMedicalBodyDiv);

  const closeProjectBtn = document.querySelector('#modalClose');

  closeProjectBtn.addEventListener('click', () => {
    document.querySelector('.modal').removeChild(document.querySelector('.modal-body'));
    removeBgHeight();
    document.querySelector('.modal').classList.add('hide');
  });
}

const seeProjectListW = document.querySelectorAll('.btnPopup');

seeProjectListW.forEach((seeProject) => {
  seeProject.addEventListener('click', () => {
    if (windowSize >= 768) {
      hideAll();
      addBgHeight();
      createPopupWindows(projectMedical);
    }
  });
});
