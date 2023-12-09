import React from 'react';
import styles from './About.module.scss';
import { ABOUT } from '../../utils/ABOUT';
import { TallCard, ShortCard } from '../UI/Cards/Cards';
import RuslanAbout from '../../assets/images/RuslanAbout.png';

// Создадим компонент для отображения карточек
const renderCards = (aboutData) => (
  <div className={styles.cards}>
    {aboutData.map((item) => (
      !item.tall && <ShortCard key={item.title} title={item.title} text={item.text} img={item.pic} />
    ))}
  </div>
);

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {/* Отрисовка карточек с высокими блоками */}
          {ABOUT.filter((item) => item.tall).map((item) => (
            <TallCard key={item.title} title={item.title} text={item.text} img={RuslanAbout} />
          ))}

          {/* Отрисовка карточек с низкими блоками */}
          {renderCards(ABOUT)}
        </div>
      </div>
    </section>
  );
};

export default About;
