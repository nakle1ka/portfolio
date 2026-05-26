"use client";

import { useInView } from 'react-intersection-observer';
import { Card } from '../card/card';
import { TSkill } from '../../helpers/skillsList';
import styles from './group.module.css';

type Props = {
    list: TSkill[];
}

export const Group: React.FC<Props> = ({ list }) => {
    const { inView, ref } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })

    return (
        <div className={styles.container} ref={ref}>
            {list.map((s, i) => (
                <Card
                    icon={s.icon}
                    name={s.name}
                    count={i}
                    inView={inView}
                    key={s.name}
                />
            ))}
        </div>
    );
}