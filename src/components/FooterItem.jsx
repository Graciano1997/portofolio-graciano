import Networks from './Network';
import style from '../style/Footer.module.css';

const FooterItem = () => (
  <footer className={style.footerContainer}>
    <hr className={style.indicator} />
    <Networks />
    <hr className={style.indicatorFinish} />
  </footer>
);

export default FooterItem;
