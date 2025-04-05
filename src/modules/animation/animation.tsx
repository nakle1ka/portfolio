'use client';

import { useEffect, useState } from 'react';
import styles from './animation.module.css';
import { Column } from './components/column/column';

type Props = {

}

export const Animation: React.FC<Props> = ({ }) => {
    const [isShow, setIsShow] = useState<boolean>(true);

    // Но только нечётное
    const columnsCount = 5;
    const animationDuration = 2000; /* ms */

    useEffect(() => {
        const timeoutId = setTimeout(() => setIsShow(false), animationDuration + 500);

        return () => clearTimeout(timeoutId);
    }, [])


    if (!isShow) return null;

    return (
        <div className={styles.container} >
            <div className={styles.columnsContainer}>
                {Array.from({ length: columnsCount }).map((_, i) =>
                    <Column
                        count={Math.abs(Math.floor(columnsCount / 2) - i) + 1}
                        animationDuration={animationDuration}
                        key={i}
                    />)
                }
            </div>

            <div className={styles.textContainer}>
                <span className={styles.l1}>My</span>
                <span className={styles.l2}>Portfolio</span>
            </div>
        </div>
    );
}