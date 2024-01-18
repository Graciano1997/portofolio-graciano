import project from '../img/projects/summit.png'
import close from '../img/close.svg';
import style from '../style/Modal.module.css';

const Modal = () => {
    return (
        <div className="modalContainer hide">
            <div className={style.modalBody}>
                <div className={style.modalBodyDescription}>
                    <div className={style.imageContainer}>
                        <img src={project} />
                    </div>
                    <div className={style.titleContainer}>
                        <p className="headline-primary">
                            BudgetApp
                        </p>
                        <div className={style.languageContainer}>
                            <p>Ruby on Rails</p>
                            <p>CSS</p>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>
                    <div className={style.description}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it 1960s.

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it 1960s.
                        </p>
                    </div>
                    <div className={style.modalButtons}>
                        <button className="btnPrimary">See Live</button>
                        <button className="btnPrimary">See Source</button>
                    </div>
                    <div className={style.modalClose}>
                        <button onClick={()=>{
                            document.querySelector('.modalContainer').classList.add('hide');
                        }}><img src={close} />{' '}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
