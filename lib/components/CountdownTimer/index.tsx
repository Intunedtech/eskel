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
    message: string;
}

//Target time
// const COUNTDOWN_TARGET = new Date("2024-12-06T20:00:00");

//Time remaining
export const getTimeLeft = (endtime: Date, comparisonTime:Date ): TimeLeft => {
    const totalTimeLeft = endtime.getTime() - comparisonTime.getTime();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { days, hours, minutes, seconds };
};

/**
 * Standalong function that checks whether the passed targetTimestamp 
 *  has expired in relation to comparisionTimestamp
 * @param {string} targetTimestamp
 * @param {string} comparisionTimestamp 
 * @returns {boolean}
 */

export const isTimeExpired = (targetTimestamp:string, comparisionTimestamp:Date) => {

    const targetTimestampObj = new Date(targetTimestamp);
    
    if(targetTimestampObj <= comparisionTimestamp){
        return true;
    }

    return false;
}

export const CountdownTimer = (props: CountdownTimerProps) => {
    //Setup timer to change state every second
    const { endTimestamp, message } = props;
    const [ timeExpired, setTimeExpired] = useState(false);
    // console.log("End timestamp",endTimestamp);
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft( new Date(endTimestamp), new Date() ));

    useEffect(() => {

        if(!isTimeExpired(endTimestamp, new Date())){

            const timer = setInterval(() => {
                setTimeLeft( getTimeLeft( new Date(endTimestamp), new Date() ));
                
                if(isTimeExpired(endTimestamp,new Date())){
                    setTimeExpired(true);
                    // clearInterval(timer);
                }

            }, 1000);
    
            return () => {
                console.log("Clean up reached");
                clearInterval(timer);
            };
            
        }
        else{
            setTimeExpired(true);
        }
        
        
    }, []);
    return (<>
            {timeExpired ? (<h2>{message}</h2>) : (
                <div>
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
            
    </>)
}
