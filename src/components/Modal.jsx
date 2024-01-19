import close from '../img/close.svg';
import style from '../style/Modal.module.css';

const Modal = ({ projectInfo }) => {
    return (
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
                            <p>Ruby on Rails</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                        </div>
                        <div className={style.modalButton}>
                            <button className="btnPrimary"><a href={projectInfo.link[0]} target="_blank">See Live</a></button>
                            <button className="btnPrimary"><a href={projectInfo.link[1]} target="_blank">See Source</a></button>
                        </div>
                    </div>
                    <div className={style.description}>
                        <p>{projectInfo.content}</p>
                    </div>
                    <div className={style.modalButtons}>
                        <button className="btnPrimary"><a href={projectInfo.link[0]} target="_blank">See Live</a></button>
                        <button className="btnPrimary"><a href={projectInfo.link[1]} target="_blank">See Source</a></button>
                    </div>
                    <div className={style.modalClose}>
                        <button onClick={() => {
                            document.querySelector('.modalContainer').classList.add('hide');
                        }}><img src={close} />{' '}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
