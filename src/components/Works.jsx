import { useState } from 'react';
import projects from '../data/projectsData';
import styles from '../style/Work.module.css';
import Modal from './Modal';

const Works = () => {
  const [selectedProject, setSelectedProject] = useState({
    image: '',
    title: '',
    techLanguage: [],
    content: '',
    link: [],
  });
  return (
    <section className={styles.workscontainer} id="work-section-area">
      <div className={styles.worksHeader}>
        <h2 className="headline-primary">My Recent Works</h2>
        <hr className={styles.indicator} />
      </div>
      <div className={styles.works}>
        {
          projects.length > 0 && projects.map((project, index) => (
            <div className={styles.workContainerItem} key={{ index }}>
              <div className={styles.workImage}>
                <img
                  src={project.image}
                  alt={project.title}
                />
              </div>
              <div className={styles.workBody}>
                <h4 className={styles.workTitle}>{project.title}</h4>
                <div className={styles.techsContaier}>
                  {project.techLanguage.length > 0
                    && project.techLanguage.map((tech, index) => <p key={{ index }}>{tech}</p>)}
                </div>
                <div className="btnContainer">
                  <button
                    type="button"
                    className="btnPrimary"
                    onClick={() => {
                      setSelectedProject(project);
                      document.querySelector('.modalContainer').classList.remove('hide');
                    }}
                  >
                    See Project
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Modal projectInfo={selectedProject} />
    </section>
  );
};

export default Works;
