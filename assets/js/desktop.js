
  /**************WINDOWS POPUP*********************/
  

let windowSize=window.outerWidth;

function handleResize() {
  var outerWidth = window.outerWidth;
  windowSize=outerWidth;
}



  const projectMedical={

    images:{medical:{path:"./assets/img/medicalIlustrate.svg", alt:"Medical Illustration sets"},
    btnClose:{path:"./assets/img/btnmedicalClose.svg",alt:"close icon",id:"modalClose"}},
    title:"Keeping track of hundreds of components",

    techLanguage:["Codekit","Github","JavaScript","Bootstrap","Terminal","Codepen"],

    content:`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it 1960s with the 
      releaLorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever 
    since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea`,
    
    button:{label:["See live","See source"],
    iconsPath:["./assets/img/seeLive.svg","./assets/img/seeGit.svg"]}
  };
  
  //*****PORTOFOLIO ENDS******************************************
  
  
  //fUNCTIONS HIDE****************************************************
  /*function hide() {
    document.querySelector('.headline-section').classList.toggle('hide');
    document.querySelector('.works-section').classList.toggle('hide');
    document.querySelector('.about').classList.toggle('hide');
    document.querySelector('.contact').classList.toggle('hide');
    document.querySelector('.socialmedia-links').classList.toggle('hide');
    document.querySelector('.email_links_container > ul').classList.toggle('hide');
    document.querySelector('.nav-links').classList.toggle('hide');
    //document.querySelector('.popup').classList.toggle('hide');
  }
  */
  function hideAll() {
    document.querySelector('.header-menu').classList.toggle('hide');
    document.querySelector('.main').classList.toggle('hide');
  }
 /* 
  function hideToPopup() {
    document.querySelector('.nav-links').classList.toggle('hide');
    document.querySelector('.header-menu').classList.toggle('hide');
    document.querySelector('.indicator-finish').classList.toggle('hide');
    document.querySelector('.popup').classList.toggle('hide');
    hide();
  }
  */
  function removeBgHeight() {
    document.querySelector('#modal').classList.remove('modalBackground');
  }
  
  function addBgHeight() {
    document.querySelector('#modal').classList.toggle('modalBackground');
  }
  /*function addFullHeight() {
    document.querySelector('.popup').classList.toggle('fullHeight');
  }*/
  
  /*****************END FUNCTIONS************************************* */
  
  /*****************EVENTS */
  
  
  /**BUTTON CONSTRUCTOR */
  function createSeeButtons(projectMedical,n){
    let button=document.createElement('button'); 
    button.classList.add("project-btn-primary");
    button.textContent=projectMedical.button.label[n];
    let img=document.createElement('img'); 
    img.src=projectMedical.button.iconsPath[n];
    img.alt="icon";
    button.appendChild(img);
    return button;
  }
  /**BUTTON CONSTRUCTOR */
  
  /* creating the List*/
  function createListItemModal(projectMedical,i){
    let li=document.createElement('li'); 
    li.classList.add("modal-language");
    let a=document.createElement('li'); 
    a.href="#";
    a.textContent=projectMedical.techLanguage[i];
    li.appendChild(a);
    return li;
  }
  function createListTechModal(projectMedical){
    let ul=document.createElement('ul'); 
    ul.classList.add("modal-list");
    for(let i=0;i<projectMedical.techLanguage.length;i++){
      ul.appendChild(createListItemModal(projectMedical,i));
    }
    return ul;
  }
  /* END LIST*/
  
  /* creating Title*/
  function createTitle(projectMedical){
    const h3=document.createElement('h3');
     h3.classList.add("project-title");
    h3.textContent=projectMedical.title;
    return h3;
  }
  /* END Creating content*/
  
  /* creating Contents*/
  function createContent(projectMedical){
    let p=document.createElement('p'); 
    p.textContent=projectMedical.content;
    return p;
  }
  /* END Creating content*/
  
  /* creating Contents*/
  function createImageMedical(projectMedical,name){
    let imageName=name.toLowerCase();
    
    if(imageName==="medical"){
      let imgMedical=document.createElement('img');
      imgMedical.alt=projectMedical.images.medical.alt;
      imgMedical.src=projectMedical.images.medical.path;
      return imgMedical;
    }
    
    if(imageName==="close"){
      let imgClose=document.createElement('img');
      imgClose.alt=projectMedical.images.btnClose.alt;
      imgClose.src=projectMedical.images.btnClose.path;
      imgClose.id=projectMedical.images.btnClose.id;
      return imgClose;
    }
    return console.log("please I only build: iot or close images");
  }
  /* END Creating content*/
  
  
  function createPopupWindows(projectMedical){
  const projectModalButtonDiv=document.createElement('div'); 
  projectModalButtonDiv.classList.add("modal-btns");
  projectModalButtonDiv.append(createSeeButtons(projectMedical,0),createSeeButtons(projectMedical,1))
  
  const projectModalHeaderDiv=document.createElement('div'); 
  projectModalHeaderDiv.classList.add("header-modal-text");
  projectModalHeaderDiv.append(createTitle(projectMedical))
  

  


  const projectModalCloseImgDiv=document.createElement('div');
  projectModalCloseImgDiv.classList.add("modal-close");
  projectModalCloseImgDiv.append(createImageMedical(projectMedical,"close"));
  
  const projectModalMedicalImgDiv=document.createElement('div');
  projectModalMedicalImgDiv.classList.add("modal-img");
  projectModalMedicalImgDiv.append(createImageMedical(projectMedical,"medical"));

  const projectModalListButtomDiv=document.createElement('div'); 
  projectModalListButtomDiv.classList.add("list-button");
  projectModalListButtomDiv.append(projectModalHeaderDiv,projectModalButtonDiv);


  const projectTecnolyList=document.createElement('div');
  projectTecnolyList.classList.add("modal-tecnology-list");
  projectTecnolyList.append(createListTechModal(projectMedical));
  
  const projectContentDiv=document.createElement('div'); 
  projectContentDiv.classList.add("modal-content");
  projectContentDiv.append(createContent(projectMedical));
  


  const projectMedicalBodyDiv=document.createElement('div');
  projectMedicalBodyDiv.classList.add("modal-body");
  projectMedicalBodyDiv.append(projectModalCloseImgDiv,projectModalMedicalImgDiv,projectModalListButtomDiv,projectTecnolyList,projectContentDiv);
  
  hideAll();
  
   //document.querySelector('.popup').classList.toggle('');
  
     document.querySelector('.modal').classList.remove("hide");

       document.querySelector('.modal').append(projectMedicalBodyDiv);
  
  const closeProjectBtn = document.querySelector('#modalClose');
   
  closeProjectBtn.addEventListener("click",()=>{
   //  document.querySelector(".popup").classList.add("hide");
   document.querySelector('.modal').removeChild(document.querySelector('.modal-body'));
   removeBgHeight();
    document.querySelector('.modal').classList.add("hide");
  
   });
   
  }

  /*
  seeProjectList.addEventListener('click', () => {
    
  });*/
  
  const seeProjectListW = document.querySelectorAll('.btnPopup');
  window.addEventListener('resize', handleResize);


  seeProjectListW.forEach((seeProject) => {
    seeProject.addEventListener('click', () => {   
  if(windowSize>=768){
    hideAll();
    addBgHeight();
    createPopupWindows(projectMedical);
  }
    });
  });

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
  <div class="modal-body">

  <div class="modal-close">
      <img src="./assets/img/btnmedicalClose.svg" alt="close icon" id="modalClose">
  </div>

  <div class="modal-img">
      <img src="./assets/img/medicalIlustrate.svg" alt="Medical Illustration sets">
  </div>

  <div class="list-button">
     
      <div class="header-modal-text">
          <h3>Keeping track of hundreds of components</h3> 
      </div>
      <div class="modal-btns">
          <button class="project-btn-primary">See live &nbsp;<img src="./assets/img/seeLive.svg" alt=""></button>
          <button class="project-btn-primary">See Source &nbsp;<img src="./assets/img/seeGit.svg" alt=""></button>
          
      </div>
  
  </div>

  <div class="modal-tecnology-list">
      <ul class="modal-list">
          <li class="modal-language ">
              <a href="http://">Codekit</a>
          </li>
          <li class="modal-language ">
              <a href="http://">Github</a>
          </li>
          <li class="modal-language">
              <a href="http://">JavaScript</a>
          </li>
          <li class="modal-language">
              <a href="http://">Bootstrap</a>
          </li>
          <li class="modal-language">
              <a href="http://">Terminal</a>
          </li>
          <li class="modal-language">
              <a href="http://">Codepen</a>
          </li>
      </ul>
  </div>

  <div class="modal-content">
      <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea
      </p>
  </div>

  </div>*/