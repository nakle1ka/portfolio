import { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { PortfolioDialogContent } from "../content/portfolioDialogContent";

import { TPortfolioCard } from "@/types/portfolioCard";

import styles from "./portfolioDialogDesktop.module.css";

type Props = {
    card: TPortfolioCard;
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    visibleElementsCount: number;
    activeIndex: number;
}

export const PortfolioDialogDesktop: React.FC<Props> = ({
    card, isActive, setIsActive, activeIndex, setActiveIndex, visibleElementsCount
}) => {
    if (!isActive) return null;
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

                <PortfolioDialogContent
                    card={card}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                    visibleElementsCount={visibleElementsCount}
                />
            </div>
        </div>
    ), element || document.body)
}