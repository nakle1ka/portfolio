'use client';

import { useState } from "react";

import { Title } from "@/components/ui/title/title";
import { PortfolioDialog } from "../portfolioDialog/portfolioDialog";
import { TPortfolioCard } from "@/types/portfolioCard";

import styles from "./portfolioCard.module.css"

type Props = {
    card: TPortfolioCard
}

export const PortfolioCard: React.FC<Props> = ({card}) => {
    const [isActive, setIsActive] = useState<boolean>(false)

    function handleClick() {
        setIsActive(true)
    }

    return (
        <>
        <button className={styles.card} onClick={handleClick}>
            <img src={card.images[0]} alt="card image" className={styles.image} />
            <Title size="sm" id={styles.title}>{card.title}</Title>
            <p className={styles.description}>{card.description.substring(0, 200)}...</p>
        </button>
        
        <PortfolioDialog card={card} isActive={isActive} setIsActive={setIsActive} />
        </>
    )
}