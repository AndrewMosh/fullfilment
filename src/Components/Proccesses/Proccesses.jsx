import styles from './Proccesses.module.scss';
import {ProccessCard} from '../UI/Cards/Cards';
import { PROCCESSES } from '../../utils/PROCCESSES';

const Proccesses = () => {
    return (
        <div className={styles.proccesses}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    {PROCCESSES.map((proccess) => (
                        proccess.button && <ProccessCard
                        key={proccess.title}
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
        </div>
    )
}

export default Proccesses