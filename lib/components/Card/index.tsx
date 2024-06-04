import styles from './styles.module.css';

export function Card(){
    return <>
        <div className={styles.card}>
            <div className={styles.card_header}>Card Title</div>
            <div className={styles.card_body}>Card Body</div>
            <div className={styles.card_footer}>Card footer</div>
        </div>
    </>
}