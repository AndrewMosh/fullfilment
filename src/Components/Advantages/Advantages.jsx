import styles from './Advantages.module.scss';
import { ADVANTAGES } from '../../utils/ADVANTAGES';
import { TallCard,LongCard } from '../UI/Cards/Cards';

const Advantages = () => {

    return (
        <section className={styles.advantages}>
            
            <div className={styles.container}>
            <h1 className={styles.title}>Наши преимущества</h1>
                <div className={styles.wrapper}>
                    
{ADVANTAGES.map(item => (
    !item.long && <TallCard title={item.title} text={item.text} />
))}
</div>

{ADVANTAGES.map(item => (
    item.long && <LongCard title={item.title} text={item.text} />
))}

            </div>
             </section>
    )
}
export default Advantages