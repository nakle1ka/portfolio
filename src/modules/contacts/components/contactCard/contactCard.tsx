"use client";

import { useState } from "react";
import { Mail, Send, Phone, Check } from "lucide-react"
import type { ContactInfo } from "../../helpers/contactsList"
import styles from "./contactCard.module.css"

type Props = {
    contact: ContactInfo;
    animationDelay: number;
}

const iconMap = {
    Mail,
    Send,
    Phone
}

export const ContactCard: React.FC<Props> = ({ contact, animationDelay }) => {
    const [isCopied, setIsCopied] = useState(false);
    const Icon = iconMap[contact.icon as keyof typeof iconMap]
    
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(contact.value);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }
    
    return (
        <button
            className={`${styles.card} ${isCopied ? styles.copied : ""}`}
            onClick={handleCopy}
            style={{ 
                animationDelay: `${animationDelay}ms`,
                '--card-color': contact.color
            } as React.CSSProperties}
        >
            <div className={styles.iconWrapper}>
                {isCopied ? <Check size={24} /> : <Icon size={24} />}
            </div>
            <div className={styles.info}>
                <span className={styles.label}>
                    {isCopied ? "Copied!" : contact.label}
                </span>
                <span className={styles.value}>{contact.value}</span>
            </div>
        </button>
    )
}