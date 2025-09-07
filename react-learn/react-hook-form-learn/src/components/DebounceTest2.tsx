import { useState, useEffect } from "react";

export function DebounceTest2() {
    const [value, setValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => setDebouncedValue(value), 500);
        return () => clearTimeout(id);
    }, [value]);

    return (
        <>
            <input value={value} onChange={e => setValue(e.target.value)} />
            <p>防抖后的值：{debouncedValue}</p>
        </>
    );
}