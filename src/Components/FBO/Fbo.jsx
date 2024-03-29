import React from 'react';
import styles from './Fbo.module.scss';
import { FBO } from '../../utils/FBO';
import { FBOCard } from '../UI/Cards/Cards';

const Fbo = () => {
    return (
        <section id={'fbo'} className={styles.fbo}>
            <div className={styles.container}>
                <h1 className={styles.title}>FBO или FBS?</h1>
                <div className={styles.content}>
                    {/* Используйте фрагменты для оборачивания списка компонентов */}
                    {FBO.map((item, index) => (
                        <FBOCard key={index} title={item.title} text1={item.wText} text2={item.gText} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Fbo;
