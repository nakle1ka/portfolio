"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "./carouselContainer.module.css";

type Props = {
    elementsCount: number
    visibleElementsCount: TVisibleElementsCount;
    activeIndex: number;
    setActiveIndex: Dispatch<SetStateAction<number>>;
    className?: string;
}

export type TVisibleElementsCount = number | "dynamic"

export const CarouselContainer: React.FC<React.PropsWithChildren<Props>> = ({
    elementsCount,
    visibleElementsCount,
    activeIndex,
    setActiveIndex,
    className = "",
    children
}) => {
    const ref = useRef(null);
    const [dynamicElementsCount, setDynamicElementsCount] = useState<number>(1);

    useEffect(() => {
        if (!ref.current) return;

        const count = getComputedStyle(ref.current).getPropertyValue("--visible-elements-count");
        setDynamicElementsCount(Number(count))
    }, [])

    const k = visibleElementsCount === "dynamic"
        ? '(100% / var(--visible-elements-count))'
        : `(100% / ${visibleElementsCount})`

    const lastAllowIndex = elementsCount - (
        visibleElementsCount === "dynamic" ? dynamicElementsCount : visibleElementsCount
    );


    function handleScrollLeft() {
        if (activeIndex != 0) setActiveIndex(prev => prev - 1)
    }

    function handleScrollRight() {
        if (activeIndex == elementsCount - 1) return;
        
        if (activeIndex !== lastAllowIndex) {
            setActiveIndex(p => p + 1)
        }
    }

    return (
        <div className={`${styles.carousel} ${className}`} ref={ref}>
            <button
                className={`${styles.btn} ${styles.left}`}
                onClick={handleScrollLeft}
                disabled={activeIndex === 0}
            >
                <ArrowLeft className={styles.svg} />
            </button>

            <div className={styles.listContainer}>
                <div className={styles.list} style={{
                    margin: `0 calc(${-activeIndex} * ${k})`
                }}>
                    {children}
                </div>
            </div>

            <button
                className={`${styles.btn} ${styles.right}`}
                onClick={handleScrollRight}
                disabled={activeIndex === lastAllowIndex}
            >
                <ArrowRight className={styles.svg} />
            </button>
        </div>
    )
}