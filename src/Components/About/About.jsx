import styles from './About.module.scss'
import { ABOUT } from '../../utils/ABOUT'
import { TallCard, ShortCard } from '../UI/Cards/Cards'
const About = () => {

    return (
     <section className={styles.about}>
<div className={styles.container}>
    <div className={styles.wrapper}>
{ABOUT.map(item => (
    item.tall && <TallCard title={item.title} text={item.text} /> 
))}
<div className={styles.cards}>
   {ABOUT.map(item => (
    !item.tall && <ShortCard title={item.title} text={item.text} />
   ))}
</div>
    </div>
</div>
     </section>   
    )                        
    
}
export default About