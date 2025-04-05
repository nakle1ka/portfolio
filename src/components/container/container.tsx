import styles from './container.module.css';

type Props = {
    className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
    return (
        <div className={styles.container} >
            {children}
        </div>
    );
}