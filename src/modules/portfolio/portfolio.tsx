"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";

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

    const { inView, ref } = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    return (
        <Container>
            <div className={`${styles.content} ${inView ? styles.inView : ""}`} ref={ref}>
                <Title size="lg" id={styles.title}>Portfolio</Title>
                
                <CarouselContainer
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    elementsCount={portfolioList.length}
                    visibleElementsCount={visibleElementsCount}
                    className={styles.carouselContainer}
                >
                    {portfolioList.map((el, index) => (
                        <CarouselElement
                            visibleElementsCount={visibleElementsCount}
                            key={el.title}
                        >
                            <PortfolioCard 
                                card={el} 
                                animationDelay={index * 150}
                            />
                        </CarouselElement>
                    ))}
                </CarouselContainer>
            </div>
        </Container>
    )
}