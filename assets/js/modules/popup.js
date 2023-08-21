import projects from "./projectsData.js";

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
  li.classList.add('modal-language');
  const a = document.createElement('li');
  a.href = '#';
  a.textContent = project.techLanguage[i];
  li.appendChild(a);
  return li;
}

function createListTech(project) {
  const ul = document.createElement('ul');
  ul.classList.add('modal-list');
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

function createImage(project, name) {
  const imageName = name.toLowerCase();

  if (imageName === 'image') {
    const image = document.createElement('img');
    image.alt = project.images.image.alt;
    image.src = project.images.image.path;
    return image;
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
  const projectModalButtonDiv = document.createElement('div');
  projectModalButtonDiv.classList.add('modal-btns');
  projectModalButtonDiv.append(createSeeButtons(project, 0),
    createSeeButtons(project, 1));

  const projectModalHeaderDiv = document.createElement('div');
  projectModalHeaderDiv.classList.add('header-modal-text');
  projectModalHeaderDiv.append(createTitle(project));

  const projectModalCloseImgDiv = document.createElement('div');
  projectModalCloseImgDiv.classList.add('modal-close');
  projectModalCloseImgDiv.append(createImage(project, 'close'));

  const projectModalContainer = document.createElement('div');
  projectModalContainer.classList.add('modal-container');

  const projectModalImgDiv = document.createElement('div');
  projectModalImgDiv.classList.add('modal-img');
  projectModalImgDiv.append(createImage(project, 'image'));

  const projectModalListButtomDiv = document.createElement('div');
  projectModalListButtomDiv.classList.add('list-button');
  projectModalListButtomDiv.append(projectModalHeaderDiv, projectModalButtonDiv);

  const projectTecnolyList = document.createElement('div');
  projectTecnolyList.classList.add('modal-tecnology-list');
  projectTecnolyList.append(createListTech(project));

  const projectContentDiv = document.createElement('div');
  projectContentDiv.classList.add('modal-content');
  projectContentDiv.append(createContent(project));

  projectModalContainer.append(projectModalImgDiv,
    projectModalListButtomDiv, projectTecnolyList, projectContentDiv);


  document.querySelector('.fade').classList.remove('hide');
  document.querySelector('.modal').classList.remove('hide');

  document.querySelector('.modal').append(projectModalCloseImgDiv, projectModalContainer);

  const closeProjectBtn = document.querySelector('#modalClose');

  closeProjectBtn.addEventListener('click', () => {
    while (document.querySelector('.modal').firstChild) {
      document.querySelector('.modal').removeChild(document.querySelector('.modal').firstChild);
    }
    document.querySelector('.modal').classList.remove('modalBackground');
    document.querySelector('.modal').classList.add('hide');
    document.querySelector('.fade').classList.add('hide');
    document.querySelector('.container').style.overflowY = 'scroll';
  });
}

const popupListenner = () => {
  const seeProjectList = document.querySelectorAll('.btnPopup');
  seeProjectList.forEach((seeProject) => {
    seeProject.addEventListener('click', () => {
      createPopup(projects[1]);
      document.querySelector('.container').style.overflowY = 'hidden';
      document.querySelector('.modal').classList.add('modalBackground');
    });
  });
}

export default popupListenner; 
