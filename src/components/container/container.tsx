import styles from './container.module.css';

type Props = {
    className?: string;
    id?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, className = "", id = "" }) => {
    return (
        <div className={`${styles.container} ${className}`} id={id} >
            {children}
        </div>
    );
}