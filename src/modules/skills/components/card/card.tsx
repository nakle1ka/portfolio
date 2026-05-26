import styles from "./card.module.css"

type Props = {
    icon: string;
    name: string;
    count: number;
    inView: boolean;
}

export const Card: React.FC<Props> = ({ icon, name, inView, count }) => {
    const animateStyle = inView ? {
        animationName: styles.animate,
        animationDelay: String(count * 100) + "ms"
    } : {}

    return (
        <div className={styles.skill} style={animateStyle}>
            <img src={icon} alt="skill icon" className={styles.icon} />
            <p className={styles.name}>{name}</p>
        </div>
    )
}