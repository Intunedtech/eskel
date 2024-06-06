import { useState, useEffect } from 'react';

import styles from './styles.module.css';
interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

//Target time
const COUNTDOWN_TARGET = new Date("2024-12-06T20:00:00");

//Time remaining
const getTimeLeft = (): TimeLeft => {
    const totalTimeLeft = COUNTDOWN_TARGET.getTime() - new Date().getTime();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
};

const CountdownTimer = () => {
    //Setup timer to change state every second
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            <div>
                <h2 className={styles.h2}>Countdown</h2>
                <div className={styles.content}>
                    {Object.entries(timeLeft).map(el => {
                        const label = el[0];
                        const value = el[1];
                        return (
                            <div className={styles.box} key={`label-${label}`}>
                                <div className={styles.value}>
                                    <span>{value}</span>
                                </div>
                                <span className={styles.label}>{label}</span>
                            </div>
                        )
                    })}
                    
                </div>
                
            </div>
        </>
    )
}

export default CountdownTimer