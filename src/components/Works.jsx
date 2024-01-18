import projects from '../data/projectsData';
import styles from '../style/Work.module.css';
import Modal from './Modal';
import Work from './Work';

const Works = () => {
  return (
    <section className={styles.workscontainer} id="work-section-area">
      <div className={styles.worksHeader}>
        <h2 class="headline-primary">My Recent Works</h2>
        <hr className={styles.indicator} />
      </div>
      <div className={styles.works}>
        {
          projects.length > 0 && projects.map((project, index) =>
            <Work
              projectInfo={project}
              key={{ index }} />)
        }
      </div>
      <Modal />
    </section>
  );
};

export default Works;