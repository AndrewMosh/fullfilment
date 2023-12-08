import styles from './Advantages.module.scss';
import { ADVANTAGES } from '../../utils/ADVANTAGES';
import { TallCardAdvantages,LongCard } from '../UI/Cards/Cards';

const Advantages = () => {

    return (
        <section id={'advantages'} className={styles.advantages}>
            
            <div className={styles.container}>
            <h1 className={styles.title}>Наши преимущества</h1>
                <div className={styles.wrapper}>
                    
{ADVANTAGES.map(item => (
    !item.long && <TallCardAdvantages title={item.title} text={item.text} />
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