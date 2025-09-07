import { useState,useMemo,useRef } from "react"

export function DebounceTest() {
    const [value, SetValue] = useState('')
    const inputRef = useRef<string | null>(null)
    const handleChange = useMemo(
        () => debounce(e => {
            inputRef.current = e.target.value
            console.log(`更新 ${inputRef.current}`)
        }, 500),
        []
    );
    function debounce(callback: (e: React.ChangeEvent<HTMLInputElement>) => void, delay = 1000) {
        let timerRef: number | null = null
        return function (e: React.ChangeEvent<HTMLInputElement>) {
            if (timerRef !== null) clearTimeout(timerRef)
            timerRef = setTimeout(() => {
                callback(e)
            }, delay)
        }
    }
    return (
        <input value={value} onChange={(e) => {
            handleChange(e)
            SetValue(e.target.value)
        }} />
    )
}