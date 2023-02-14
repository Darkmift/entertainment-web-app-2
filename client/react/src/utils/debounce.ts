export default function debounce(func: Function, delay: number) {
    let timeoutId: number | null

    return function debounced(...args: any[]) {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }

        timeoutId = window.setTimeout(() => {
            func(...args)
            timeoutId = null
        }, delay)
    }
}
