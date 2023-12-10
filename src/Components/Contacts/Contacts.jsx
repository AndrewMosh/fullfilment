import React from 'react';
import styles from './Contacts.module.scss';
import { ButtonBlueSocials } from '../UI/Buttons/Buttons';
import RuslanContacts from '../../assets/images/RuslanContacts.png';
import tg from '../../assets/icons/Telegram.svg';
import wa from '../../assets/icons/WA.svg';

const Contacts = () => {
    return (
        <div  className={styles.contacts}>
            <div className={styles.wrapper}>
                <div className={styles.content}>Свяжитесь с нами:</div>
                <div className={styles.content}>+7 (977) 864-14-17</div>
                <div className={styles.text}>или напишите в мессенджере:</div>
                <div className={styles.buttons}>
                    {/* Используйте кнопки соцсетей для обеспечения доступа к контактам */}
                    <ButtonBlueSocials link={'https://telegram.me/'} text='Telegram' img={tg} />
                    <ButtonBlueSocials link={'https://wa.me/'} text='WhatsApp' img={wa} />
                </div>

            </div>
            <img className={styles.image} src={RuslanContacts} alt="Ruslan Contacts" /> 
        </div>
    );
}

export default Contacts;
