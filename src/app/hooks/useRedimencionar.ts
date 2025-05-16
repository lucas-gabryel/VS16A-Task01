import { useCallback, useRef } from "react";

interface useRedimencionarType {
    redimencionar: () => void;
    resetar: () => void;
}

const useRedimencionar = (xResize: number = 0, yResize: number = 0): useRedimencionarType => {
    const xInitial = useRef<number>(window.outerWidth);
    const yInitial = useRef<number>(window.outerHeight);

    const redimencionar = useCallback(() => {
        window.resizeTo(xResize, yResize);
    }, [xResize, yResize]);
    
    const resetar = useCallback(() => {
        window.resizeTo(xInitial.current, yInitial.current);
    }, []);

    return { redimencionar, resetar };
}

export default useRedimencionar;