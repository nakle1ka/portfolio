"use client";

import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { CarouselContainer } from "@/components/carousel/carouselContainer/carouselContainer";
import { CarouselElement } from "@/components/carousel/caruoselElement/caruoselElement";
import { Title } from "@/components/ui/title/title";
import { Button } from "@/components/ui/button";
import Markdown from 'react-markdown';

import { TPortfolioCard } from "@/types/portfolioCard";

import styles from "./portfolioDialog.module.css"

type Props = {
    card: TPortfolioCard;
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const PortfolioDialogWrapper: React.FC<Props> = ({ card, isActive, setIsActive }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isClosing, setIsClosing] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isActive) {
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        }
    }, [isActive]);

    function handleClose() {
        setIsClosing(true);
        setTimeout(() => {
            setIsActive(false);
            setIsClosing(false);
            setActiveIndex(0);
        }, 300);
    }

    if ((!isActive && !isClosing) || !mounted) return null;

    const element = document.querySelector("#dialog-area");

    return createPortal((
        <div 
            className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ""}`} 
            onClick={handleClose}
        >
            <div 
                className={`${styles.dialog} ${isClosing ? styles.dialogClosing : ""}`} 
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={handleClose} className={styles.close} aria-label="Close dialog">
                    <X size={24} />
                </button>

                <div className={styles.scrollableContent}>
                    <div className={styles.carouselWrapper}>
                        <CarouselContainer
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            elementsCount={card.images.length}
                            visibleElementsCount={1}
                            className={styles.carousel}
                        >
                            {card.images.map(img => (
                                <CarouselElement visibleElementsCount={1} key={img.id}>
                                    <div className={styles.imageWrapper}>
                                        <img src={img.url} className={styles.image} alt={card.title} />
                                    </div>
                                </CarouselElement>
                            ))}
                        </CarouselContainer>
                    </div>

                    <Title id={styles.title}>{card.title}</Title>

                    <div className={styles.content}>
                        <Markdown>{card.readme}</Markdown>
                    </div>

                    <Button asChild className={styles.button}>
                        <a href={card.href} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                    </Button>
                </div>
            </div>
        </div>
    ), element || document.body)
}