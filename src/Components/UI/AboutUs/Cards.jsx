import styles from './Cards.module.scss'

export const ShortCard = ({title, text}) => {
    return (
        <div className={styles.card + ' ' + styles.short}>
            <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
            </div>
            
                {/* <img className={styles.image} src={short} alt="pic" /> */}
       
        </div>
    )
}

export const TallCard = ({title, text}) => {
    return (
        <div className={styles.card + ' ' + styles.tall}>
            <div className={styles.content}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.text}>{text}</p>
            </div>
            
                {/* <img className={styles.image} src={circle} alt="pic" /> */}
       
        </div>
    )
}