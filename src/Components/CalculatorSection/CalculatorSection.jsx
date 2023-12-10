import React from 'react';
import styles from './CalculatorSection.module.scss';
import Calculator from '../Calculator/Calculator';
import Contacts from '../Contacts/Contacts';

const CalculatorSection = () => {
    return (
        <section   className={styles.calculatorSection}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {/* Используйте комментарии, чтобы объяснить структуру разметки и компонентов */}
                    <Calculator />
                    <Contacts />
                </div>
            </div>
        </section>
    );
};

export default CalculatorSection;
