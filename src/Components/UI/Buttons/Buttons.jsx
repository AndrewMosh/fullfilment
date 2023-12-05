import styles from './Buttons.module.scss'
import error from '../../../assets/images/error.png'
export const ButtonBlue = ({children}) => {
    return (
        <button
            className={styles.btn + ' ' + styles.blue}
        >
             <a href="">
            {children}
            </a>
        </button>
    )
}

export const ButtonTransparent = ({children}) => {
    return (
        <button
            className={styles.btn + ' ' + styles.transparent}
        >
            <a href="">
            {children}
            </a>
        </button>
    ) 
}
export const ButtonSocials = ({children}) => {
    return (
        <button
            className={styles.btnSocials}
        >
            {children}
        </button>
    )
}
export const ButtonEmpty = ({children}) => {
    return (
        <button
        type='tel'
            className={styles.empty}
        >
            <a href="tel:+79001111111"> {children}</a>
           
        </button>
    )
}
export const ButtonClear = ({children, onClick}) => {
    return (
        <button 
        onClick={onClick}
        className={styles.clear}
        >
            {children}
        </button>
    )
}
export const ButtonError = ({children, onClick}) => {
    return (
        <button 
        onClick={onClick}
        className={styles.btn + ' '+styles.error}
        >
        <img src={error} alt="error" /> {children}
        </button>
    )
}