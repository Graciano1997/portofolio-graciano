import styles from '../style/Work.module.css';

const Work = ({ projectInfo }) => {
  return (
    <div className={styles.workContainerItem}>
      <div className={styles.workImage}>
        <img src={projectInfo.image}
          alt="summit" />
      </div>
      <div className={styles.workBody}>
        <h4 className={styles.workTitle} >{projectInfo.title}</h4>
        <div className={styles.techsContaier}>
          {projectInfo.techLanguage.length > 0 && projectInfo.techLanguage.map((tech, index) =>
            <p key={{ index }}>{tech}</p>)}
        </div>
        <div className="btnContainer">
          <button className="btnPrimary" onClick={() => {
            document.querySelector('.modalContainer').classList.remove('hide');
          }}>See Project</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
