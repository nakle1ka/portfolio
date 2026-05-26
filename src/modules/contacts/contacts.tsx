"use client";

import { useInView } from "react-intersection-observer";
import { Container } from "@/components/container/container"
import { Title } from "@/components/ui/title/title"
import { ContactCard } from "./components/contactCard/contactCard"
import { contactsList } from "./helpers/contactsList"
import styles from "./contacts.module.css"

export const Contacts = () => {
    const { inView, ref } = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (
        <div className={styles.wrapper} ref={ref}>
            <Container>
                <div className={`${styles.content} ${inView ? styles.inView : ""}`}>
                    <div className={styles.header}>
                        <Title size="md">Let's Connect</Title>
                        <p className={styles.subtitle}>
                            Have a project in mind or just want to chat? Feel free to reach out through any of these channels. I'm always open to new opportunities and collaborations.
                        </p>
                    </div>

                    <div className={styles.grid}>
                        {contactsList.map((contact, index) => (
                            <ContactCard
                                key={contact.label}
                                contact={contact}
                                animationDelay={index * 150}
                            />
                        ))}
                    </div>
                    
                    <p className={styles.copyHint}>click to copy</p>
                </div>
            </Container>
        </div>
    )
}