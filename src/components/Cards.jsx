import languagePic from '../img/language.svg';
import skillPic from '../img/skills.svg';
import frameworkPic from '../img/framework.svg';
import style from '../style/Card.module.css';
import Card from './Card';

const Cards = () =>
  <div className={style.cardsContainer}>
    <Card info={{
      topic: 'languages',
      photo: languagePic, items: [
        "Ruby on Rails",
        "CSS",
        "JAVASCRIPT",
        "HTML"
      ]
    }} />
    <Card
      info={{
        topic: 'Frameworks',
        photo: frameworkPic, items: ["React.js","Jest",
          "Ruby on Rails", "Rspec",
          "Capybara", "Selenium"
        ]
      }} />
    <Card
      info={{
        topic: 'Skills',
        photo: skillPic, items: [
          "Database Management",
          "Version Control",
          "CLI",
          "Web Development", "API Design"
        ]
      }} />
  </div>;

export default Cards;
