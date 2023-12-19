import notfound from '../../assets/images/notfound.png'
import { ButtonBlue } from '../UI/Buttons/Buttons'
import styles from './NotFound.module.scss'
const NotFound=()=> {
    return (
        <div className={styles.notfound}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
            <div className={styles.title}>УПС, ошибка(</div>
            <div className={styles.text}>Возникли проблемы при работе сайта, мы о них уже знаем и скоро вернемся к вам</div>
            <div><ButtonBlue text={'Обновить страницу'} link={'/'}/></div>
            </div>
           <div className={styles.image}><img src={notfound} alt="notfound"/></div> 
           </div>
        </div>
    )
}

export default NotFound