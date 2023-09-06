import projects from "./projectsData.js";

const cardHeader = (title) => {
  const div = document.createElement('div');
  div.classList.add('card-header');
  const h4 = document.createElement('h4');
  h4.classList.add('card-title');
  h4.textContent = title;
  div.appendChild(h4);
  return div;
};

const cardHeaderBg = (data) => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  image.src = data.images.image.path;
  image.alt = data.images.image.alt;
  div.classList.add('card-headerbg');
  div.append(image);
  return div;
};

const createListItem = (listTechItem) => {
  const li = document.createElement('li');
  li.classList.add('language');
  const a = document.createElement('li');
  a.href = '#';
  a.textContent = listTechItem;
  li.appendChild(a);
  return li;
}

const createCardList = (project) => {
  const ul = document.createElement('ul');
  ul.classList.add('card-list');

  project.forEach((language) => {
    ul.appendChild(createListItem(language));
  })
  return ul;
}

const createSeeButtonContainer = (id) => {
  const button = document.createElement('button');
  button.classList.add('btnPopup');
  button.classList.add('btn-primary');
  button.textContent = 'See Project';
  const input = document.createElement('input');
  input.type = "hidden";
  input.value = id;
  input.id = 'projectId';
  const div = document.createElement('div');
  div.classList.add('card-see');
  div.append(input, button);
  return div;
}

const cardGra = (data) => {
  const div = document.createElement('div');
  div.classList.add('card-gra');
  div.append(cardHeader(data.title), createCardList(data.techLanguage), createSeeButtonContainer(data.id));
  return div;
}

export const cardGenerator = (data) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.append(cardGra(data));
  const cards = document.createElement('div');
  cards.classList.add('cards');
  cards.append(cardHeaderBg(data), card)
  return cards;
}

export const projectSectionGenerator = () => {
  projects.forEach((project) => {
    document.querySelector('.box-card').append(cardGenerator(project));
  })
}