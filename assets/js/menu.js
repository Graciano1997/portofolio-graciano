const linksOption={
    linkPortfolio:document.querySelector("#item-portfolio"),
    linkAbout:document.querySelector("#item-about"),
    linkContact:document.querySelector("#item-contact")
};

const {linkPortfolio,linkAbout,linkContact}=linksOption;

const hamburguerBtn=document.querySelector("#hamburg-icon");


function hide(){
    document.querySelector(".headline-section").classList.toggle('hide');
    document.querySelector(".works-section").classList.toggle('hide');
    document.querySelector(".about").classList.toggle('hide');
    document.querySelector(".contact").classList.toggle('hide');
    document.querySelector(".socialmedia-links").classList.toggle('hide');
    document.querySelector(".email_links_container > ul").classList.toggle('hide');
    document.querySelector(".nav-links").classList.toggle('hide');
}

function removeBgHeight(){
    document.querySelector(".header-menu").classList.remove('defaultHeight');
    document.querySelector(".container").classList.remove('bodyBg');
    hamburguerBtn.src='./assets/img/hamburguer.svg'
}

function addBgHeight(){
    document.querySelector(".header-menu").classList.toggle('defaultHeight');
    document.querySelector(".container").classList.toggle('bodyBg');
}


linkPortfolio.addEventListener("click",()=>{    
    removeBgHeight(); 
    hide(); 
})

linkAbout.addEventListener("click",()=>{    
    removeBgHeight(); 
    hide(); 
})

linkContact.addEventListener("click",()=>{    
    removeBgHeight(); 
    hide(); 
})

hamburguerBtn.addEventListener("click",()=>{
let adress=(hamburguerBtn.src).replace("http://127.0.0.1:5501","");
adress=='/assets/img/close.svg'?hamburguerBtn.src='./assets/img/hamburguer.svg':hamburguerBtn.src='./assets/img/close.svg';
     hide();
     addBgHeight();
})

