import { Dispatch, SetStateAction } from "react";
import Markdown from 'react-markdown'

import { CarouselContainer } from "@/components/carousel/carouselContainer/carouselContainer";
import { CarouselElement } from "@/components/carousel/caruoselElement/caruoselElement";
import { Title } from "@/components/ui/title/title";
import { Button } from "@/components/ui/button";

import { TPortfolioCard } from "@/types/portfolioCard";

import styles from "./portfolioDialogContent.module.css"

type Props = {
    card: TPortfolioCard;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    visibleElementsCount: number;
}

export const PortfolioDialogContent: React.FC<Props> = ({
    card,
    activeIndex,
    setActiveIndex,
    visibleElementsCount
}) => {
    return (
        <>
            <CarouselContainer
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                elementsCount={card.images.length}
                visibleElementsCount={visibleElementsCount}
                className={styles.carousel}
            >
                {card.images.map(img => (
                    <CarouselElement visibleElementsCount={visibleElementsCount} key={img.id}>
                        <div className={styles.img_wrapper}>
                            <img src={img.url} className={styles.image} alt="card image" />
                        </div>
                    </CarouselElement>
                ))}
            </CarouselContainer>

            <Title id={styles.title}>{card.title}</Title>

            <div className={styles.content}>
                <Markdown>{card.readme}</Markdown>
            </div>


            <Button asChild>
                <a href={card.href} target="_blank" className={styles.button}>View on GitHub</a>
            </Button>

        </>
    );
}