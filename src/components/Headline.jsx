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
    </div>
  </section>
);

export default Headline;
