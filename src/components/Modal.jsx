import PropTypes from 'prop-types';
import close from '../img/close.svg';
import style from '../style/Modal.module.css';
import git from '../img/seeGit.svg';
import live from '../img/seeLive.svg';

const Modal = ({ projectInfo }) => (
  <div className="modalContainer hide">
    <div className={style.modalBody}>
      <div className={style.modalBodyDescription}>
        <div className={style.imageContainer}>
          <img src={projectInfo.image} alt={projectInfo.title} />
        </div>
        <div className={style.titleContainer}>
          <p className="headline-primary">
            {projectInfo.title}
          </p>
          <div className={style.languageContainer}>
            {projectInfo.techLanguage.length > 0
              && projectInfo.techLanguage.map((tech, index) => <p key={{ index }}>{tech}</p>)}
          </div>
          <div className={style.modalButton}>
            <button type="button" className="btnPrimary">
              <a href={projectInfo.link[0]} target="_blank" rel="noreferrer">
                <span>See Live</span>
                {' '}
                <img src={live} alt="live" />
              </a>
            </button>
            <button type="button" className="btnPrimary">
              <a href={projectInfo.link[1]} target="_blank" rel="noreferrer">
                <span>See Source</span>
                <img src={git} alt="git" />
              </a>
            </button>
          </div>
        </div>
        <div className={style.description}>
          <p>{projectInfo.content}</p>
        </div>
        <div className={style.modalButtons}>
          <button type="button" className="btnPrimary">
            <a href={projectInfo.link[0]} target="_blank" rel="noreferrer">
              <span>See Live</span>
              {' '}
              <img src={live} alt="live" />
            </a>
          </button>
          <button type="button" className="btnPrimary">
            <a href={projectInfo.link[1]} target="_blank" rel="noreferrer">
              <span>See Source</span>
              <img src={git} alt="git" />
            </a>
          </button>
        </div>
        <div className={style.modalClose}>
          <button type="button"
            onClick={() => {
              document.querySelector('.modalContainer').classList.add('hide');
            }}
          >
            <img src={close} alt="close" />
            {' '}
          </button>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  projectInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    techLanguage: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Modal;
