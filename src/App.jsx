import Headline from './components/Headline';
import style from './App.module.css';
import Works from './components/Works';
import FloatButton from './components/HeadlineComponents/FloatButton';
import About from './components/About';
import Cards from './components/Cards';
import MoreAbout from './components/MoreAbout';
import Form from './components/Form';
import FooterItem from './components/FooterItem';
import Hamburguer from './components/Hamburguer';
import box from './img/box.svg';

function App() {
  return (
    <div className={style.appBlack}>
      <Hamburguer />
      <Headline />
      <FloatButton />
      <Works />
      <About />
      <Cards />
      <div className={style.contact}>
        <div className={style.moreFormContainer}>
          <MoreAbout />
          <Form />
        </div>
      </div>
      <FooterItem />
      <div className={style.appBackground}>
        <img src={box} />
      </div>
    </div>
  );
}

export default App;
