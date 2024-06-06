import { useState, useEffect } from 'react';
import styles from './styles.module.css';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface CountdownTimerProps {
    endTimestamp: string;
}

//Target time
// const COUNTDOWN_TARGET = new Date("2024-12-06T20:00:00");

//Time remaining
const getTimeLeft = (endtime: Date): TimeLeft => {
    const totalTimeLeft = endtime.getTime() - new Date().getTime();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
};

const CountdownTimer = (props: CountdownTimerProps) => {
    //Setup timer to change state every second
    const { endTimestamp } = props;
    const [endtimeMessage, setEndtimeMessage] = useState(false);
    // console.log("End timestamp",endTimestamp);
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft( new Date(endTimestamp) ));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft( getTimeLeft( new Date(endTimestamp) ));
            if(timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
                setEndtimeMessage(true);
            }
        }, 1000);

        return () => {
            console.log("reached here");
            clearInterval(timer);
        };
    }, []);
    return (
        <>
            {endtimeMessage ? (<h2>Countdown Ended!</h2>) : (
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
            )}
            
        </>
    )
}

export default CountdownTimer