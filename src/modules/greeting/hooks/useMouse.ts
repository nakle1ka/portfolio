import { useEffect, useState } from "react";

export function useMouse() {
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);

    function updateValues({ clientX, clientY }: MouseEvent) {
        setX(clientX);
        setY(clientY);
    }

    useEffect(() => {
        document.addEventListener("mousemove", updateValues);

        return () => removeEventListener("mousemove", updateValues)
    }, [])

    return { x, y };
}