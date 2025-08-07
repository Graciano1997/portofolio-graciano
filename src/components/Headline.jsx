import Description from './HeadlineComponents/Description';
import Header from './HeadlineComponents/Header';
import Networks from './Network';
import style from '../style/Headline.module.css';

const Headline = () => (
  <section className={style.headlineContainer}>
    <div className={style.headlineDivInfo}>
      <Header />
      <Description />
      <Networks />
      <div className={style.info}>
        <p>Thank you for being here!</p>
        <p>I would like to share that I have a new available portfolio website</p>
        <a href="https://portfolio-zeta-ten-c0263zs4e4.vercel.app/">Please click here to visit for a new experience</a>
      </div>
    </div>
  </section>
);

export default Headline;
