import { useState, useEffect } from 'react'

function useDynamicImage(url: string): string {
    const [imageSrc, setImageSrc] = useState('')

    // url = './assets/thumbnails/beyond-earth/trending/small.jpg'

    useEffect(() => {
        async function getThumbnailImageSrc(url: string) {
            const thumbnailImages = await import.meta.glob(
                '../mock/assets/thumbnails/**/**/*.*'
            )

            const key = Object.keys(thumbnailImages).find((key) => {
                return key.endsWith(url.replace('./assets/thumbnails/', ''))
            })

            return key ? thumbnailImages[key]() : undefined
        }

        getThumbnailImageSrc(url)
            .then((module) => {
                setImageSrc((module as any)?.default)
            })
            .catch((error) => {
                console.error('Failed to load image:', error)
            })
    }, [url])

    return imageSrc
}

export default useDynamicImage
