import React from 'react';
import styles from './Header.module.scss';
import { MENU } from '../../utils/MENU';
import Logo from '../../assets/icons/Logo.svg';
import { ButtonBlue, ButtonEmptyPhone } from '../UI/Buttons/Buttons';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = ({ isOpen, toggleMenu, setIsOpen }) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>

                        <a href="/">
                            <img src={Logo} alt="FullX" />
                        </a>
                    </div>
                    <nav className={styles.menu}>
                        <ul className={styles.list}>
                            {MENU.map((item) => (
                                <li key={item.name}>
                                    <a href={item.link}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.buttons}>

                        <ButtonBlue link='#calculator' text='Узнать стоимость' />
                        <ButtonEmptyPhone>+7 (991) 753-74-47</ButtonEmptyPhone>

                        <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} setIsOpen={setIsOpen} />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
