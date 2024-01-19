import resume from '../data/resume.pdf';
import style from '../style/About.module.css';

const About = () => (
  <section className={style.aboutContainer} id="about-section-area">
    <div className={style.aboutContainerHeader}>
      <h2 className="headline-primary">About me</h2>
    </div>
    <p>
      I can help you build a product ,
      feature or website Look through some of my work and experience!
      If
      you like what you see and have a project you need coded,
      don`&apos;`t hesitate to contact me.
    </p>
    <div className={style.formContainerBtns}>
      <button type="button" className="btnPrimary">
        <a href={resume} target="_blank" rel="noreferrer">
          Get my resume
        </a>
      </button>
    </div>
  </section>
);

export default About;
