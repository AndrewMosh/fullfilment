import styles from './Buttons.module.scss'
import error from '../../../assets/icons/error.png'
import resum from '../../../assets/icons/resum.png'
export const ButtonBlue = ({ link, text }) => {
    return (
        <button
            className={styles.btn + ' ' + styles.blue}
        >
            <a href={link}>
                {text}
            </a>
        </button>
    )
}

export const ButtonBlueSocials = ({ link, text, img }) => {
    return (
        <button
            className={styles.btn + ' ' + styles.blue + ' ' + styles.socials + ' ' + styles.withMin}
        >
            <a href={link} target='_blank'>
                <img src={img} alt="icon" /> {text}
            </a>
        </button>
    )
}
export const ButtonBlueDownload = ({ buttonText, download, link }) => {
    return (
        <button
            className={styles.btn + ' ' + styles.blue}
        >
            <a href={link} download={download}>
                {buttonText}
            </a>
        </button>
    )
}

export const ButtonBlueWithoutLink = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={styles.btn + ' ' + styles.blue + ' ' + styles.noLink}>
            {children}
        </button>
    )
}

export const ButtonTransparent = ({ children }) => {
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
export const ButtonTransparentPhone = ({ children }) => {
    return (
        <button
            className={styles.btn + ' ' + styles.transparent}
        >
            <a href="tel:+79917537447">
                {children}
            </a>
        </button>
    )
}
export const ButtonTransparentDownload = ({ buttonText, download, link }) => {
    return (
        <button
            className={styles.btn + ' ' + styles.transparent + ' ' + styles.transparentDownload}
        >
            <a href={link} download={download}>
                {buttonText}
            </a>
        </button>
    )
}
export const ButtonSocials = ({ children }) => {
    return (
        <button
            className={styles.btnSocials}
        >
            {children}
        </button>
    )
}
export const ButtonEmptyPhone = ({ children }) => {
    return (
        <button
            type='tel'
            className={styles.empty}
        >
            <a href="tel:+79917537447"> {children}</a>

        </button>
    )
}
export const ButtonClear = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={styles.clear}
        >
            {children}
        </button>
    )
}
export const ButtonError = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={styles.btn + ' ' + styles.error}
        >
            <img src={error} alt="error" /> {children}
        </button>
    )
}

export const ButtonRecalculate = ({ children, onClick, link }) => {
    return (
        <button
            onClick={onClick}
            className={styles.btn + ' ' + styles.blue + ' ' + styles.recalculate}>
            <a href={link}><img src={resum} alt="recalculate" /></a> {children}
        </button>
    )
}