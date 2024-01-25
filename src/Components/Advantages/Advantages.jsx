import React from 'react';
import styles from './Advantages.module.scss';
import { ADVANTAGES } from '../../utils/ADVANTAGES';
import { TallCardAdvantages, LongCard } from '../UI/Cards/Cards';

const Advantages = () => {

    return (
        <section id="advantages" className={styles.advantages}>
            <div className={styles.container}>
                <h1 className={styles.title}>Наши преимущества</h1>
                <div className={styles.wrapper}>
                    {/* Отрисовка карточек с низкими блоками */}
                    {ADVANTAGES.filter((item) => !item.long).map((item) => (
                        <TallCardAdvantages key={item.title} title={item.title} text={item.text} img={item.pic} />
                    ))}
                </div>

                {/* Отрисовка карточек с высокими блоками */}
                {ADVANTAGES.filter((item) => item.long).map((item) => (
                    <LongCard key={item.title} title={item.title} text={item.text} img={item.pic} />
                ))}
            </div>
        </section>
    );
};

export default Advantages;
