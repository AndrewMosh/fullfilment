import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/icons/Logo.svg';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.ownerContainer}>
                        <img src={logo} alt="Company Logo" />
                        <div className={styles.ceo}>
                            <div>Индивидуальный предприниматель</div>
                            <div>Аккузин Руслан Марсельевич</div>
                        </div>
                    </div>
                    <div className={styles.copyright}>
                        ©Copyright {new Date().getFullYear()} 
                    </div>
                    <a href='https://taplink.cc/m_links' target='_blank' rel='noopener noreferrer'>
                        Написать дизайнеру
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
