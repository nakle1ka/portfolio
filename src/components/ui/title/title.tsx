import styles from './title.module.css';

type Props = {
    size?: "sm" | "md" | "lg";
    color?: "white" | "red" | "blue"
    id?: string;
}

export const Title: React.FC<React.PropsWithChildren<Props>> = ({ children, size = "md", color = "white", id = "" }) => {

    switch (size) {
        case 'lg':
            return <h1 className={`${styles[size]} ${styles[color]}`} id={id}>{children}</h1>
        case 'md':
            return <h2 className={`${styles[size]} ${styles[color]}`} id={id}>{children}</h2>
        case 'sm':
            return <h3 className={`${styles[size]} ${styles[color]}`} id={id}>{children}</h3>
    }
}