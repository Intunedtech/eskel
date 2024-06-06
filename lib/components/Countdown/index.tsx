import styles from './styles.module.css';
export interface CountdownProps{
    timezone: string,
    endTime: Date,
}

export function Countdown(props: CountdownProps){
    const {timezone,endTime} = props;
    const epochTime = endTime.getTime();
    return <>
        <div className={styles.countdown}>
            <p>Timezone: {timezone}</p>
            <p>endTime: {endTime.toDateString()} {endTime.toTimeString()}</p>
            <p>epochTime: {epochTime}</p>
        </div>
    </>
}