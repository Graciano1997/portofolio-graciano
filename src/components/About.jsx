import style from '../style/About.module.css';

const About = () => (
  <section className={style.aboutContainer} id="about-section-area">
    <div className={style.aboutContainerHeader}>
      <h2 className="headline-primary">About me</h2>
    </div>
    <p>
      I&apos;ve spent much time immersed in remote development, working,
      and mentoring other devs, remotely and asynchronously
      across different time zones, building everything from single pages,
      and websites to fullStack Web Application. I love 😍🤩: Code, Math, Learning and People.
    </p>
    <p> I run this race with great pleasure and love!</p>
    <div className={style.formContainerBtns}>
      <button type="button" className="btnPrimary">
        <a href="https://docs.google.com/document/d/1KxZ_RiCEUgvVXsTxhMdi0JK5LTeEiGgmLJkkAj6YQxE/edit?usp=sharing" target="_blank" rel="noreferrer">
          Get my resume
        </a>
      </button>
    </div>
  </section>
);

export default About;
