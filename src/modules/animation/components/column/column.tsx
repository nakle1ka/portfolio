import styles from './column.module.css';

type Props = {
    count: number;
    animationDuration: number;
}

export const Column: React.FC<Props> = ({ count, animationDuration }) => {

    return (
        <span
            className={styles.column}
            style={{
                animationDelay: `${animationDuration - 100*count}ms`
            }}
        />
    );
}