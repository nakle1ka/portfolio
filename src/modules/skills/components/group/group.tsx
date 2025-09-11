import { TSkill } from '../../helpers/skillsList';
import { Card } from '../card/card';
import styles from './group.module.css';

type Props = {
    list: TSkill[];
}

export const Group: React.FC<Props> = ({ list }) => {
    return (
        <div className={styles.container} >
            {list.map((s, i) => <Card
                icon={s.icon}
                name={s.name}
                key={i}
            />)}
        </div>
    );
}