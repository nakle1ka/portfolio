"use client";

import { useInView } from "react-intersection-observer";
import { Container } from "@/components/container/container"
import { Title } from "@/components/ui/title/title"
import { Mail, Phone, Send } from "lucide-react"
import styles from "./contacts.module.css"

export const Contacts = () => {
    const { inView, ref } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    console.log(inView)

    return (
        <div className={styles.wrapper}>
            <Container>
                <Title size="sm">Contacts</Title>

                <div className={`${styles.grid} ${inView ? styles.inView : ""}`} ref={ref}>
                    <div className={styles.contact}>
                        <Mail className={styles.icon} />
                        <p className={styles.p}>nakle1ka.dev@gmail.com</p>
                    </div>
                    <div className={styles.contact}>
                        <Send className={styles.icon} />
                        <p className={styles.p}>@nakle1kaaa</p>
                    </div>
                    <div className={styles.contact}>
                        <Phone className={styles.icon} />
                        <p className={styles.p}>+7 901 203 75-51</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}