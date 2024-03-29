import styles from './Cards.module.scss'
import { ButtonBlueDownload } from '../Buttons/Buttons'
import down from '../../../assets/icons/ChevronDown.svg'
import up from '../../../assets/icons/ChevronUp.svg'

export const ShortCard = ({ title, text, img }) => {
    return (
        <div className={styles.short}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{text}</p>
            </div>
            <div className={styles.imageContainer}><img className={styles.img} src={img} alt="pic" /></div>
        </div>
    )
}

export const TallCard = ({ title, text, img1, img2 }) => {
    return (
        <div className={styles.card + ' ' + styles.tall}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{text}</p>

            </div>
            <div className={styles.imageContainer}>
                <img className={styles.img1} src={img1} alt="pic" />
                <img className={styles.img2} src={img2} alt="pic" />

            </div>
        </div>
    )
}
export const TallCardAdvantages = ({ title, text, img }) => {
    return (
        <div style={{ justifyContent: 'space-between' }} className={styles.card + ' ' + styles.tallAdvantage}>
            <div className={styles.content}>
                <h1 className={styles.titleAdvantages}>{title}</h1>
                <p className={styles.text}>{text}</p>
            </div>

            <img className={styles.advantagePic} src={img} alt="pic" />

        </div>
    )
}

export const LongCard = ({ title, text, img }) => {
    return (
        <div className={styles.card + ' ' + styles.long}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{text}</p>
            </div>

            <img className={styles.image} src={img} alt="pic" />

        </div>
    )
}


export const ProccessCard = ({ title, text, image, button, download, buttonText, link }) => {
    return (
        <div className={styles.proccess}>
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{text}</p>
                {button && <ButtonBlueDownload download={download} link={link} buttonText={buttonText} />}
            </div>

            {button ? <div className={styles.images}><ButtonBlueDownload download={download} link={link} buttonText={buttonText} /> <img className={styles.image} src={image} alt='pic' />
            </div> : <img className={styles.image} src={image} alt='pic' />}

        </div>
    )
}

export const FBOCard = ({ title, text1, text2 }) => {
    return (

        <div className={styles.fbo + ' ' + styles.card}>
            <div className={styles.contentFbo}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text1}</p>
            </div>
            <div className={styles.grey}>{text2}</div>
        </div>
    )
}

export const ResultCard = ({ title, perUnit, value }) => {
    return (
        <div className={styles.resultCard}>
            <div className={styles.title}>{title}</div>
            <div className={styles.perUnit}>{perUnit}</div>
            <div className={styles.value}>{value}</div>
        </div>
    )
}

export const ResultCardWithLogistics = ({ title, place, info, price, weight }) => {
    return (
        <div className={styles.resultCard}>
            <div className={styles.content}><div className={styles.title}>{title}</div> <div>{price}</div></div>
            <div className={styles.price}>{place} {info ? <span className={styles.weight}>{weight}</span> : ''}</div>
            {info ? <div className={styles.info}>{info}</div> : ''}
        </div>
    )
}
export const FaqCard = ({ question, answer, collapsed, onClick }) => {
    return (
        <div className={styles.faqCard} onClick={onClick}>
            <div className={styles.question}>{question}</div>
            <div className={collapsed ? styles.answer + ' ' + styles.animate : styles.disappear + ' ' + styles.answer}>{answer}</div>
            <div className={styles.arrow}><img src={collapsed ? up : down} alt="arrow" /></div>
        </div>
    )
}