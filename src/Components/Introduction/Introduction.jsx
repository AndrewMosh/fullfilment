import styles from './Introduction.module.scss';
import { ButtonBlue, ButtonTransparentPhone } from '../UI/Buttons/Buttons';
import Intro from '../../assets/images/Intro.svg'
const Introduction = () => {
    return (
        <section id={'home'} className={styles.introduction}>
            <div className={styles.container}>
                <div className={styles.wrapper}>

                    <h1 className={styles.title}>
                        Фулфилмент, которому можно  доверять
                    </h1>
                    <p className={styles.text}>
                        Надежно доставим ваш груз на склады маркетплейсов в Москве и МО
                    </p>

                    <div className={styles.buttons}>
                        <ButtonBlue link='#calculator' text='Узнать стоимость' />
                        <ButtonTransparentPhone>Позвонить</ButtonTransparentPhone>
                    </div>

                </div>
                <div className={styles.image}>
                    <img src={Intro} alt="intro" />
                </div>
                <div className={styles.buttonsHidden}>
                    <ButtonBlue link='#calculator' text='Узнать стоимость' />
                    <ButtonTransparentPhone>Позвонить</ButtonTransparentPhone>
                </div>
            </div>

        </section>
    )
}

export default Introduction