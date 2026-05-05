import styles from "./card.module.css"

type Props = {
    icon: string;
    name: string;
    count: number;
    inView: boolean;
    isReversed?: boolean;
}

export const Card: React.FC<Props> = ({ icon, name, inView, count, isReversed = false }) => {
    const animateStyle = inView ? {
        animationName: styles.animate,
        animationDelay: String(count * 150) + "ms"
    } : {}

    return (
        <div className={`${styles.skill} ${isReversed ? styles.reversed : ""}`} style={animateStyle}>
            <img src={icon} alt="skill icon" className={styles.icon} />
            <p className={styles.name}>{name}</p>
        </div>
    )
}