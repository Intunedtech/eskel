
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
    return (
        <>
            <div>
                <h2>Countdown</h2>
                <div className={styles.content}>
                    <div className={styles.box}>
                        <div className={styles.value}>
                            <span>30</span>
                        </div>
                        <span className={styles.label}>days</span>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.value}>
                            <span>10</span>
                        </div>
                        <span className={styles.label}>hours</span>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.value}>
                            <span>10</span>
                        </div>
                        <span className={styles.label}>minutes</span>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.value}>
                            <span>10</span>
                        </div>
                        <span className={styles.label}>seconds</span>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default CountdownTimer