"use client";

import { useInView } from "react-intersection-observer";
import { Container } from "@/components/container/container";
import { Title } from "@/components/ui/title/title";
import styles from "./experience.module.css";

export const Experience: React.FC = () => {
    const { inView, ref } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <Container>
            <div className={`${styles.content} ${inView ? styles.inView : ""}`} ref={ref}>
                <Title size="lg" id={styles.title}>Experience</Title>
                
                <div className={styles.card}>
                    <span className={styles.emoji}>🚧</span>
                    <p className={styles.text}>
                        I don&apos;t have any work experience yet. Cool companies will be here soon, but for now — I recommend checking out my projects
                    </p>
                </div>
            </div>
        </Container>
    );
};