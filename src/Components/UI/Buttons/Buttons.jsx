import styles from './Buttons.module.scss'

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