import styles from './Contacts.module.scss'
import { ButtonBlue } from '../UI/Buttons/Buttons'

const Contacts=()=>{
    return (
        <div className={styles.contacts}>
<div className={styles.content}><div>Свяжитесь с нами</div><div>+7 (999) 999-99-99</div></div>
<div className={styles.text}>или напишите в мессенджере:</div>
<div className={styles.buttons}><ButtonBlue>Telegram</ButtonBlue> <ButtonBlue>WhatsApp</ButtonBlue></div>
        </div>
    )
}

export default Contacts