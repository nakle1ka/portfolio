"use client";

import { useState } from "react";

import { Container } from "@/components/container/container"
import { Title } from "@/components/ui/title/title"
import { CarouselContainer, TVisibleElementsCount } from "@/components/carousel/carouselContainer/carouselContainer"
import { CarouselElement } from "@/components/carousel/caruoselElement/caruoselElement";
import { PortfolioCard } from "./components/portfolioCard/portfolioCard"

import { portfolioList } from "./helpers/portfolioList"

import styles from "./portfolio.module.css"

export const Portfolio: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const visibleElementsCount: TVisibleElementsCount = "dynamic";

    return (
        <Container>
            <Title size="lg" id={styles.title}>Portfolio</Title>
            
            <CarouselContainer
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                elementsCount={portfolioList.length}
                visibleElementsCount={visibleElementsCount}
                className={styles.carouselContainer}
            >
                {portfolioList.map(el => (
                    <CarouselElement
                        visibleElementsCount={visibleElementsCount}
                        key={el.title}
                    >
                        <PortfolioCard card={el} />
                    </CarouselElement>
                ))}
            </CarouselContainer>
        </Container>
    )
}