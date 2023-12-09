import styles from './Contacts.module.scss'
import { ButtonBlueSocials } from '../UI/Buttons/Buttons'
import RuslanContacts from '../../assets/images/RuslanContacts.png'
import tg from '../../assets/images/Telegram.svg'
import wa from '../../assets/images/WA.svg'
const Contacts=()=>{
    return (
        <div id={'address'} className={styles.contacts}>
            <div className={styles.wrapper}>
<div className={styles.content}>Свяжитесь с нами:</div>
<div className={styles.content}>+7 (977) 864-14-17</div>
<div className={styles.buttons}><ButtonBlueSocials link={'https://telegram.me/'} text='Telegram' img={tg}/>  <ButtonBlueSocials link={'https://wa.me/'} text='WhatsApp' img={wa}/></div>
<div className={styles.text}>или напишите в мессенджере:</div>
</div>
<img className={styles.image} src={RuslanContacts} alt="pic" />
        </div>
    )
}

export default Contacts