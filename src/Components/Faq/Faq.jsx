import { FaqCard } from "../UI/Cards/Cards";
import { FAQ } from "../../utils/FAQ";
import styles from './Faq.module.scss'
import { useState } from "react";
const Faq=()=> {
    const [faq, setFaq] = useState(FAQ);
    const toggleCollapsed = (question) => {
        setFaq(faq.map(item => item.question === question? {...item, collapsed:!item.collapsed } : item));
    }
    return (
        <div id={'faq'} className={styles.faq}>
            <div className={styles.container}>
                <div className={styles.title}>Нас часто спрашивают</div>
                <div className={styles.cards}>
                    {faq.map((item, index) => (
                        <FaqCard key={index} collapsed={item.collapsed} question={item.question} onClick={() => toggleCollapsed(item.question)} answer={item.answer}  />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq