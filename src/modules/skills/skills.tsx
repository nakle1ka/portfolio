import { Title } from '@/components/ui/title/title';
import { Container } from '@/components/container/container';
import { Group } from './components/group/group';

import { frontendSkills, backendSkills } from './helpers/skillsList';

import styles from './skills.module.css';

export const Skills: React.FC = () => {
    return (
        <Container>
            <div className={styles.skills} >
                <Title size='lg' id={styles.skills}>Skills</Title>

                <div className={styles.skillsGrid}>
                    <div className={styles.group}>
                        <Title color='red' id={styles.frontend}>Frontend</Title>

                        <Group list={frontendSkills} />
                    </div>

                    <div className={styles.group}>
                        <Title color='blue' id={styles.backend}>Backend</Title>

                        <Group list={backendSkills} />
                    </div>
                </div>
            </div >
        </Container>
    );
}