import floatButton from '../../img/see.svg';
import style from '../../style/Headline.module.css';

const FloatButton = () => (
  <div className={style.btnHoverContainer}>
    <a href="#work-section-area" rel="noopener">
      <img src={floatButton} alt="see more" />
    </a>
  </div>
);

export default FloatButton;
