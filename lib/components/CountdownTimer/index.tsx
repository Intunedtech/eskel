import React from 'react';
import styles from './styles.module.css';

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