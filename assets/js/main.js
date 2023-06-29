const linksOption = {
  linkPortfolio: document.querySelector('#item-portfolio'),
  linkAbout: document.querySelector('#item-about'),
  linkContact: document.querySelector('#item-contact'),
};
const { linkPortfolio, linkAbout, linkContact } = linksOption;

//*****PORTOFOLIO ENDS******************************************
const hamburguerBtn = document.querySelector('#hamburg-icon');


//fUNCTIONS HIDE****************************************************
function hide() {
  document.querySelector('.headline-section').classList.toggle('hide');
  document.querySelector('.works-section').classList.toggle('hide');
  document.querySelector('.about').classList.toggle('hide');
  document.querySelector('.contact').classList.toggle('hide');
  document.querySelector('.socialmedia-links').classList.toggle('hide');
  document.querySelector('.email_links_container > ul').classList.toggle('hide');
  document.querySelector('.nav-links').classList.toggle('hide');
  document.querySelector('.popup').classList.toggle('hide');
}
/*function hideToPopup() {
  document.querySelector('.header-menu').classList.toggle('hide');
  document.querySelector('.indicator-finish').classList.toggle('hide');
  document.querySelector('.popup').classList.toggle('hide');
  hide();
}
*/
function removeBgHeight() {
 // document.querySelector('.header-menu').classList.remove('defaultHeight');
  document.querySelector('.container').classList.remove('bodyBg');
  hamburguerBtn.src = './assets/img/hamburguer.svg';
}

function addBgHeight() {
  document.querySelector('.header-menu').classList.toggle('defaultHeight');
  document.querySelector('.container').classList.toggle('bodyBg');
}
/*function addFullHeight() {
  document.querySelector('.popup').classList.toggle('fullHeight');
}*/

/*****************END FUNCTIONS************************************* */

/*****************EVENTS */
linkPortfolio.addEventListener('click', () => {
  removeBgHeight();
  hide();
});

linkAbout.addEventListener('click', () => {
  removeBgHeight();
  hide();
});

linkContact.addEventListener('click', () => {
  removeBgHeight();
  hide();
});

hamburguerBtn.addEventListener('click', () => {
  const adress = (hamburguerBtn.src).replace('http://127.0.0.1:5501', '');
  if (adress === '/assets/img/close.svg') {
    hamburguerBtn.src = './assets/img/hamburguer.svg';
  } else {
    hamburguerBtn.src = './assets/img/close.svg';
  }
  hide();
  addBgHeight();

});




function createButtons(project){
  let button=document.createElement('button'); 
  button.classList.add("project-btn-primary");
  button.textContent=project.button.label[0];
  
 // let span=document.createElement('span');
  //span.append(project.button.space.repeat(1));
  
  let img=document.createElement('img'); 
  img.src=project.button.iconsPath[0];
  img.alt="";
  button.append(img);
  return button;
}

function createPopup(){
  
  const project={
    images:{iot:{path:"./assets/img/iot.svg",alt:"iot"},close:{path:"./assets/img/iotclose.svg",alt:"iot"}},
    title:"Keeping track of hundreds of components",
    techLanguage:["Ruby on Rails","Css","JavaScript"],
    content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
             when an unknown printer took a galley of type and scrambled it 1960s.`,
    button:{
      label:["See live","See source"],
      iconsPath:["./assets/img/seeLive.svg","./assets/img/seeGit.svg"],
      space:"&ThinSpace;"
    }
  };

  const popupDiv=document.createElement('div'); popupDiv.classList.add("popup");
  popupDiv.appendChild(createButtons(project));
  document.querySelector('.popup').appendChild(popupDiv);
  
/*  const projectDiv=document.createElement('div'); projectDiv.classList.add("project");
  
  const imgDiv=document.createElement('div'); imgDiv.classList.add("project-img");
  
  const img=document.createElement('img'); img.attributes.alt="";
  
  const projectCardDiv=document.createElement('div'); projectCardDiv.classList.add("project-card");
  
  const projectHeaderDiv=document.createElement('div'); projectHeaderDiv.classList.add("project-header");
  
  const h3=document.createElement('h3'); h3.classList.add("project-title");
  
  const ul=document.createElement('ul'); ul.classList.add("project-list");
  
  const li=document.createElement('li'); li.classList.add("language");
  
  const a=document.createElement('li'); a.href="#";
  
  const projectContentDiv=document.createElement('div'); projectContentDiv.classList.add("project-contet");
  
  const p=document.createElement('p');
  
  const projectSeeDiv=document.createElement('div'); projectSeeDiv.classList.add("project-see");
  */
}
const seeProjectBtn = document.querySelector('.btn-primaryy');
seeProjectBtn.addEventListener("click",()=>{
createPopup();
})

/*

//const closeProjectBtn = document.querySelector('#projectClose');
seeProjectBtn.addEventListener('click',()=>{
  hideToPopup();
  addFullHeight();
})

closeProjectBtn.addEventListener('click',()=>{
  hideToPopup();
})

*/
/*****************END EVTS */

/*

<div class="popup">
<div class="project">
    <div class="project-img">
        <img src="./assets/img//iotclose.svg" alt="Iot" id="projectClose">
        <img src="./assets/img/iot.svg" alt="Iot">
    </div>
    <div class="project-card">
            <div class="project-header">
                <h3 class="project-title" >
                    Keeping track of hundreds of
                    components</h3>
                    <ul class="project-list">
                        <li class="language">
                            <a href="http://">Ruby on Rails</a>
                        </li>
                        <li class="language ">
                            <a href="http://">Css</a>
                        </li>
                        <li class="language">
                            <a href="http://">JavaScript</a>
                        </li>
                    </ul>
            </div>
            
            <div class="project-content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it 1960s.</p>
                    
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it 1960s.</p>
                    
                </div>
            <div class="project-see">
                <button class="project-btn-primary">See Live <span>&ThinSpace; &ThinSpace;</span><img src="./assets/img/seeLive.svg" alt=""></button>
                <button class="project-btn-primary">See Source <span>&ThinSpace;&ThinSpace;</span><img src="./assets/img/seeGit.svg" alt=""></button>
            </div>
        </div>
    </div>
</div>

*/