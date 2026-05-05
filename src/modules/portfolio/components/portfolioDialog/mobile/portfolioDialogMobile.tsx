import { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { PortfolioDialogContent } from "../content/portfolioDialogContent";
import { Title } from "@/components/ui/title/title";

import { TPortfolioCard } from "@/types/portfolioCard";

import styles from "./portfolioDialogMobile.module.css";

type Props = {
    card: TPortfolioCard;
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    visibleElementsCount: number;
    activeIndex: number;
}

export const PortfolioDialogMobile: React.FC<Props> = ({
    card, isActive, setIsActive, activeIndex, setActiveIndex, visibleElementsCount
}) => {
    if (!isActive) return null;
    const element = document.querySelector("#dialog-area");

    function handleClose() {
        setIsActive(false);
    }

    return createPortal((
        <div className={styles.overlay} onClick={handleClose}>
            <div
                className={`${styles.sheet} ${isActive ? styles.sheetOpen : ""}`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.header}>
                    <button onClick={handleClose} className={styles.close}>
                        <X className={styles.closeSvg} />
                    </button>
                </div>

                <div className={styles.carouselWrapper}>
                    <PortfolioDialogContent
                        card={card}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
                        visibleElementsCount={visibleElementsCount}
                    />
                </div>
            </div>
        </div>
    ), element || document.body);
}