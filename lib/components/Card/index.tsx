import styles from './styles.module.css';
export interface CardProps{
    title: string;
    body?: string;
    footer?: string;
    backgroundColor?:string;
}

export function Card(props: CardProps){
    const {title, body, footer, backgroundColor} = props;
    const defaultBackgroundColor = '#cdcdcd'
    return <>
        <div className={styles.card}
            style={{ backgroundColor: backgroundColor??defaultBackgroundColor}}
        >
            <div className={styles.card_header}>{title}</div>
            <div className={styles.card_body}>{body}</div>
            <div className={styles.card_footer}>{footer}</div>
        </div>
    </>
}