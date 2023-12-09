import styles from './About.module.scss'
import { ABOUT } from '../../utils/ABOUT'
import { TallCard, ShortCard } from '../UI/Cards/Cards'
import RuslanAbout from '../../assets/images/RuslanAbout.png'

const About = () => {

    return (
     <section id={'about'} className={styles.about}>
<div className={styles.container}>
    <div className={styles.wrapper}>
{ABOUT.map(item => (
    item.tall && <TallCard title={item.title} text={item.text} img={RuslanAbout} /> 
))}
<div className={styles.cards}>
   {ABOUT.map(item => (
    !item.tall && <ShortCard title={item.title} text={item.text} img={item.pic} />
   ))}
</div>
    </div>
</div>
     </section>   
    )                        
    
}
export default About