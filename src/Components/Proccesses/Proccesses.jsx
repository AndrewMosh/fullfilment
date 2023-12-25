import styles from './Proccesses.module.scss';
import {ProccessCard} from '../UI/Cards/Cards';
import { PROCCESSES } from '../../utils/PROCCESSES';
import agreement from '../../assets/downloads/agreement.docx';
const Proccesses = () => {
  
    return (
        <section id={'proccess'} className={styles.proccesses}  >
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {PROCCESSES.map((proccess) => (
                        proccess.button && <ProccessCard
                        key={proccess.title}
                        download={agreement}
                        link={agreement}
                        buttonText='Скачать договор'
                    title={proccess.title}
                    text={proccess.text}
                    image={proccess.image}
                    button={proccess.button}/>))}
            {PROCCESSES.map((proccess) => (
               !proccess.button && <ProccessCard
                    key={proccess.title}
                    title={proccess.title}
                    text={proccess.text}
                    image={proccess.image}
                />
            ))}
            </div>
        </div>
        </section>
    )
}

export default Proccesses

// style={{overflowY: isAtTop ? 'auto' : 'hidden'}}