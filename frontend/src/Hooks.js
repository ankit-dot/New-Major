import { useEffect, useState } from "react"




export const useDebounce = (value, delay = 500) => {
    const [debounce, setDebouce] = useState(value);

    useEffect(() =>{
        const timeOut = setTimeout(() => {
            setDebouce(value);
        }, delay)

        return () => clearTimeout(timeOut);

    }, [value, delay])

    return debounce;
}