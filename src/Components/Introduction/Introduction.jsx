import styles from './Introduction.module.scss';
import { ButtonBlue, ButtonTransparent} from '../UI/Buttons/Buttons';
import Intro from '../../assets/images/Intro.svg'
const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                    Фулфилмент, <br /> которому можно <br /> доверять
                    </h1>
                    <p className={styles.text}>
                    Надежно доставим ваш груз на склады маркетплейсов в Москве и МО
                    </p>
                </div>
                <div className={styles.buttons}>
                    <ButtonBlue>Узнать стоимость</ButtonBlue>
                    <ButtonTransparent>Позвонить</ButtonTransparent>
                </div>
                </div>
                <div className={styles.image}>
                <img src={Intro} alt="intro" />
            </div>
            </div>
            
        </section>
    )
}

export default Introduction