import style from '../style/About.module.css';

const MoreAbout = () => (
  <div className={style.moreAboutContainer} id="contact-section-area">
    <p>
      I`&apos;`m always 🤩  interested in hearing 👂 about
      new projects, so if you`&apos;`d like to chat please🙏 get in
      touch
      {' '}
      <span className={style.pointerDown}>👇</span>
      {' '}
      <span className={style.pointerLeft}>👉</span>
      .
    </p>
  </div>
);

export default MoreAbout;
