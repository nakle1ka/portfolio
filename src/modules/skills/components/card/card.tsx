import styles from "./card.module.css"

type Props = {
    icon: string;
    name: string;
}

export const Card: React.FC<Props> = ({ icon, name }) => {
    return (
        <div className={styles.skill}>
            <img src={icon} alt="skill icon" className={styles.icon} />
            <p className={styles.name}>{name}</p>
        </div>
    )
}