import style from '../style/Card.module.css';

const Card = ({ info }) => {
  return (
    <div className={style.cardItem}>
      <img src={info.photo} alt={info.topic} />
      <h3 className={style.cardTitle}>{info.topic}</h3>
      <div className={style.techsContainer}>
        {
          info.items.length > 0 && info.items.map((tech) => (<p key={Math.random() + 5 + Math.sin(Math.random() * 10)}>{tech}</p>))}
      </div>
    </div>
  )
};

export default Card;
