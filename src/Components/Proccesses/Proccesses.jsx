import styles from './Proccesses.module.scss';
import {ProccessCard} from '../UI/Cards/Cards';
import { PROCCESSES } from '../../utils/PROCCESSES';
import React, { useState, useEffect, useRef } from 'react';
const Proccesses = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollContainerRef = useRef(null);
  const handleScroll = () => {
    const scrollContainer = scrollContainerRef.current;
    const scrollPosition = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight;
    const clientHeight = scrollContainer.clientHeight;

    const percentage = (scrollPosition / (scrollHeight - clientHeight)) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return (
        <div className={styles.proccesses}>
           <div className={styles.barParent}> <div className={styles.scrollBar} style={{ height: `${scrollPercentage}%` }}></div></div>
      <div className={styles.scrollContainer} ref={scrollContainerRef}>
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
        </div>
    )
}

export default Proccesses