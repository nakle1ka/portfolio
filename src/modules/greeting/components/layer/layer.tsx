import styles from './layer.module.css';

type Props = {
    layerCount: number;
}

export const Layer: React.FC<React.PropsWithChildren<Props>> = ({ children, layerCount }) => {
    return (
        <div className={`${styles.layer} ${styles["layer" + layerCount]}`}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}