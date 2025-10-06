import type {TVisibleElementsCount} from "../carouselContainer/carouselContainer"
import styles from "./caruoselElement.module.css"

type Props = {
    visibleElementsCount: TVisibleElementsCount;
}

export const CarouselElement: React.FC<React.PropsWithChildren<Props>> = ({visibleElementsCount, children}) => {
    const width = visibleElementsCount !== "dynamic"
        ? `calc(100% / ${visibleElementsCount})`
        : "calc(100% / var(--visible-elements-count))"
    return (
        <div className={styles.element} style={{
            width: width
        }}>
            {children}
        </div>
    )
}