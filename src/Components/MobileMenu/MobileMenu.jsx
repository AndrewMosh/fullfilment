import React from "react";
import styles from "./MobileMenu.module.scss";
import { MENU } from "../../utils/MENU";
import closed from "../../assets/icons/menuclosed.svg";
import open from "../../assets/icons/menuopen.svg";
import logo from '../../assets/icons/Logo.svg'
function MobileMenu({ isOpen, toggleMenu }) {
    return (
        <div className={styles.burgerMenu}>

            <img
                className={styles.burger}
                onClick={toggleMenu}

                src={isOpen ? open : closed}
                alt="menu"
            />

            {isOpen && (
                <div className={styles.menu}>
                    <img style={{ position: "fixed", top: "16px", left: "20px" }} src={logo} alt="logo" />
                    <ul className={styles.menuList}>
                        {MENU.map((item) => (
                            <li key={item.name}>
                                <a className={styles.menuLink} onClick={toggleMenu} href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default MobileMenu;