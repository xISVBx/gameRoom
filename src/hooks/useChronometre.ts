import { useEffect, useRef, useState } from "react"

export const useChronometre = (): [
    number,
    () => void,
    () => void,
    () => void
] => {

    const [last, setLast] = useState(0);
    const [current, setCurrent] = useState(0);

    const intervalRef = useRef<number | null>(null);

    const start = () => {
        if(intervalRef.current) return;
        if(last != 0) {
            setCurrent(last);
            setLast(0);
        }
        intervalRef.current = setInterval(() => {
            setCurrent(c => ++c);
        }, 1000);
    }

    const restart = () => {
        if(!intervalRef.current) return;
        setCurrent(0);
        setLast(0);
    }

    const stop = () => {
        if(!intervalRef.current) return;
        setLast(current);
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    return [current, start, stop, restart];
}