import style from '../App.module.css';
import menu from '../style/Menu.module.css';
import hamburguer from '../img/hamburguer.svg';
import close from '../img/close.svg';

const Hamburguer = () => {
  return (
    <>
      <div className={style.hamburguerContainer}>
        <button type='button' onClick={() => {
          document.querySelector('.geralMenuContainer').classList.toggle('hide');
        }}><img src={hamburguer} alt='Hamburguer' /></button>
      </div>

      <div className='geralMenuContainer hide'>
        <div className={menu.menuContainer}>
          <div className={menu.menuCloseContainer}>
            <button type='button' onClick={() => {
              document.querySelector('.geralMenuContainer').classList.toggle('hide');
            }}><img src={close} alt='close' /></button>
          </div>
          <ul>
            <li ><a href="#work-section-area" id="item-portfolio-menu"
              onClick={() => {
                document.querySelector('.geralMenuContainer').classList.add('hide');
              }}
            >Recent Projects</a></li>
            <li ><a href="#about-section-area"
              id="item-about-menu"
              onClick={() => {
                document.querySelector('.geralMenuContainer').classList.add('hide');
              }}
            >About Me</a></li>
            <li ><a href="#contact-section-area"
              onClick={() => {
                document.querySelector('.geralMenuContainer').classList.add('hide');
              }}
              id="item-contact-menu">Get in Touch</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hamburguer;
