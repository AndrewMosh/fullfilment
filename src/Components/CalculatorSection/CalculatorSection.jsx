import styles from './CalculatorSection.module.scss'
import Calculator from '../Calculator/Calculator'
import Contacts from '../Contacts/Contacts'

const CalculatorSection=()=>{
    return (
        <section id={'calculator'} className={styles.calculatorSection}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
            <Calculator/>
            <Contacts/>
            </div>
            </div>
        </section>
    )
}

export default CalculatorSection