import github from '../img/github.svg';
import linkedin from '../img/Linkedin icon.svg';
import twitter from '../img/twitter.svg';
import angellist from '../img/angellist.svg';
import medium from '../img/medium.svg';
import style from '../style/Headline.module.css';

const Networks = () => (
  <ul className={style.socialMedia}>
    <li>
      <a href=" https://github.com/Graciano1997" target="_blank" rel="noopener">
        <img src={github} alt="github icon" />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/graciano-manuel-henrique-175527221/" target="_blank" rel="noopener noreferrer">
        <img
          src={linkedin}
          alt="linkedin icon"
        />
      </a>
    </li>
    <li><a href="https://wellfound.com/u/graciano-manuel-henrique" rel="noopener"><img src={angellist} alt="Angel List" /></a></li>
    <li><a href="https://twitter.com/GracianoSoft" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter icon" /></a></li>
    <li>
      <a href="https://medium.com/@gracianomanuelhenrique" target="_blank" rel="noopener noreferrer"><img src={medium} alt="medium icon" /></a>
    </li>
  </ul>
);

export default Networks;
