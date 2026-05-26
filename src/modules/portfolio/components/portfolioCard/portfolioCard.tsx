'use client';

import { useState } from "react";

import { Title } from "@/components/ui/title/title";
import { PortfolioDialogWrapper } from "../portfolioDialog/wrapper/portfolioDialog";
import { TPortfolioCard } from "@/types/portfolioCard";

import styles from "./portfolioCard.module.css"

type Props = {
    card: TPortfolioCard;
    animationDelay?: number;
}

export const PortfolioCard: React.FC<Props> = ({ card, animationDelay = 0 }) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    function handleClick() {
        setIsActive(true)
    }

    return (
        <>
            <button 
                className={styles.card} 
                onClick={handleClick}
                style={{ animationDelay: `${animationDelay}ms` }}
            >
                <div className={styles.imageWrapper}>
                    <img src={card.images[0].url} alt={card.title} className={styles.image} />
                </div>
                <div className={styles.info}>
                    <Title size="sm" id={styles.title}>{card.title}</Title>
                    <p className={styles.description}>{card.description}</p>
                </div>
            </button>
            
            <PortfolioDialogWrapper card={card} isActive={isActive} setIsActive={setIsActive} />
        </>
    )
}