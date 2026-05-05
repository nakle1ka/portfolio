import { RefObject, useEffect, useRef } from "react";

export function useSwipe(
    ref: RefObject<HTMLElement | null>,
    onLeftSwipe: () => void,
    onRightSwipe: () => void,
    options = {
        threshold: 50,
        maxVertical: 100,
        maxTime: 300
    }
) {
    const startX = useRef(0);
    const startY = useRef(0);
    const startTime = useRef(0);
    const isSwiping = useRef(false);

    // телефоны
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleTouchStart = (e: TouchEvent) => {
            startX.current = e.touches[0].clientX;
            startY.current = e.touches[0].clientY;
            startTime.current = Date.now();
            isSwiping.current = true;
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isSwiping.current) return;
            if (Math.abs(e.touches[0].clientX - startX.current) > 10) {
                e.preventDefault();
            }
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (!isSwiping.current) return;
            
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const endTime = Date.now();
            
            const diffX = endX - startX.current;
            const diffY = endY - startY.current;
            const elapsedTime = endTime - startTime.current;
            
            if (
                elapsedTime < options.maxTime &&
                Math.abs(diffX) > options.threshold &&
                Math.abs(diffY) < options.maxVertical
            ) {
                if (diffX < 0) {
                    onRightSwipe();
                } else {
                    onLeftSwipe();
                }
            }
            
            isSwiping.current = false;
        };

        element.addEventListener('touchstart', handleTouchStart, { passive: false });
        element.addEventListener('touchmove', handleTouchMove, { passive: false });
        element.addEventListener('touchend', handleTouchEnd);

        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchmove', handleTouchMove);
            element.removeEventListener('touchend', handleTouchEnd);
        };
    }, [ref, onLeftSwipe, onRightSwipe, options]);

    // Мышь
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseDown = (e: MouseEvent) => {
            startX.current = e.clientX;
            startY.current = e.clientY;
            startTime.current = Date.now();
            isSwiping.current = true;
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isSwiping.current) return;
            e.preventDefault();
        };

        const handleMouseUp = (e: MouseEvent) => {
            if (!isSwiping.current) return;
            
            const endX = e.clientX;
            const endY = e.clientY;
            const endTime = Date.now();
            
            const diffX = endX - startX.current;
            const diffY = endY - startY.current;
            const elapsedTime = endTime - startTime.current;
            
            if (
                elapsedTime < options.maxTime &&
                Math.abs(diffX) > options.threshold &&
                Math.abs(diffY) < options.maxVertical
            ) {
                if (diffX < 0) {
                    console.log("Свайп вправо (мышь)");
                    onRightSwipe();
                } else {
                    console.log("Свайп влево (мышь)");
                    onLeftSwipe();
                }
            }
            
            isSwiping.current = false;
        };

        element.addEventListener('mousedown', handleMouseDown);
        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseup', handleMouseUp);

        return () => {
            element.removeEventListener('mousedown', handleMouseDown);
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseup', handleMouseUp);
        };
    }, [ref, onLeftSwipe, onRightSwipe, options]);
}