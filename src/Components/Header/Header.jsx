import styles from './Header.module.scss'
import { MENU } from '../../utils/MENU'
import Logo from '../../assets/images/Logo.svg'
import { ButtonBlue, ButtonEmpty } from '../UI/Buttons/Buttons'
const Header = () => {
    return (
        <header className={styles.header}>
<div className={styles.container}>
    <div className={styles.wrapper}>
    <div className={styles.logo}><img src={Logo} alt="FullX" /></div>
    <nav className={styles.menu}>
        <ul className={styles.list}>
            {
                MENU.map(item => (
                    <li key={item.name}>
                        <a href={item.link}>{item.name}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
    <div className={styles.buttons}>
<ButtonBlue>Рассчитать стоимость</ButtonBlue>
<ButtonEmpty>+79001111111</ButtonEmpty>
</div>
</div>
</div>
        </header>
    )
}

export default Header