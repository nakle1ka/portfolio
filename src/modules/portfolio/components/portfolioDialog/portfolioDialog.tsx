"use client";

import { createPortal } from "react-dom"
import { Dispatch, SetStateAction, useState } from "react";

import { CarouselContainer } from "@/components/carousel/carouselContainer/carouselContainer";
import { CarouselElement } from "@/components/carousel/caruoselElement/caruoselElement";
import { TPortfolioCard } from "@/types/portfolioCard";
import { Title } from "@/components/ui/title/title";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

import styles from "./portfolioDialog.module.css"

type Props = {
    card: TPortfolioCard;
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const PortfolioDialog: React.FC<Props> = ({ card, isActive, setIsActive }) => {
    if (!isActive) return null;

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const visibleElementsCount = 1;

    const element = document.querySelector("#dialog-area")

    function handleClose() {
        setIsActive(false);
    }

    return createPortal((
        <div className={styles.background} onClick={handleClose}>
            <div className={styles.board} onClick={(e) => e.stopPropagation()}>
                <button onClick={handleClose} className={styles.close}>
                    <X className={styles.closeSvg} />
                </button>

                <CarouselContainer
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                elementsCount={card.images.length}
                visibleElementsCount={visibleElementsCount}
                className={styles.carousel}
            >
                {card.images.map(src => (
                    <CarouselElement visibleElementsCount={visibleElementsCount} key={src}>
                        <img src={src} className={styles.image} alt="card image" />
                    </CarouselElement>
                ))}
            </CarouselContainer>
                
                <Title size="md" id={styles.title}>{card.title}</Title>
                <p className={styles.description}>{card.description}</p>

                <Button className={styles.button}>View on GitHub</Button>
            </div>
        </div>
    ), element || document.body)
}