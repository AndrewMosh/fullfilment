import styles from './Contacts.module.scss'
import { ButtonBlueSocials } from '../UI/Buttons/Buttons'

const Contacts=()=>{
    return (
        <div id={'address'} className={styles.contacts}>
<div className={styles.content}><div>Свяжитесь с нами:</div><div>+7 (977) 864-14-17</div></div>
<div className={styles.text}>или напишите в мессенджере:</div>
<div className={styles.buttons}><ButtonBlueSocials link={'https://telegram.me/'} text='Telegram'/>  <ButtonBlueSocials link={'https://wa.me/'} text='WhatsApp'/></div>
        </div>
    )
}

export default Contacts