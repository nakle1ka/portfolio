"use client";

import { Dispatch, SetStateAction, useState } from "react";

import { PortfolioDialogDesktop } from "../desktop/portfolioDialogDesktop";
import { PortfolioDialogMobile } from "../mobile/portfolioDialogMobile";

import { useDeviceDetection } from "@/hooks/useDeviceDetection";
import { TPortfolioCard } from "@/types/portfolioCard";

type Props = {
    card: TPortfolioCard;
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const PortfolioDialogWrapper: React.FC<Props> = ({ card, isActive, setIsActive }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const visibleElementsCount = 1;

    const device = useDeviceDetection();

    if (device == "desktop") {
        return <PortfolioDialogDesktop
            activeIndex={activeIndex}
            card={card}
            isActive={isActive}
            setActiveIndex={setActiveIndex}
            setIsActive={setIsActive}
            visibleElementsCount={visibleElementsCount}
        />;
    }
    else {
        return <PortfolioDialogMobile 
            activeIndex={activeIndex}
            card={card}
            isActive={isActive}
            setActiveIndex={setActiveIndex}
            setIsActive={setIsActive}
            visibleElementsCount={visibleElementsCount}
        />
    }
}