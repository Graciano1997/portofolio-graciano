const Menu = () => {
  return (
    <>
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
    </>
  );
};

export default Menu;
