import PropTypes from 'prop-types';
import style from '../style/Card.module.css';

const Card = ({ info }) => (
  <div className={style.cardItem}>
    <img src={info.photo} alt={info.topic} />
    <h3 className={style.cardTitle}>{info.topic}</h3>
    <div className={style.techsContainer}>
      {
        info.items.length > 0 && info.items.map((tech) => (
          <p
            key={Math.random() + 5 + Math.sin(Math.random() * 10)}
          >
            {tech}
          </p>
        ))
      }
    </div>
  </div>
);

Card.propTypes = {
  info: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Card;
