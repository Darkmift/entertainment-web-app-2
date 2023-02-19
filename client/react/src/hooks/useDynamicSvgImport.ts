/* @vite-ignore */
import React, { useEffect, useRef, useState } from 'react'

export function useDynamicSvgImport(
    iconName: string,
    path = '../assets/images/',
    ext = 'svg'
) {
    const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<unknown>()

    useEffect(() => {
        setLoading(true)
        const importSvgIcon = async (): Promise<void> => {
            try {
                // have to give absolute path while importing the icon
                importedIconRef.current = (
                    await import(/* @vite-ignore */ `${path}${iconName}.${ext}`)
                ).ReactComponent // svgr provides ReactComponent for svg url
            } catch (err) {
                setError(err)
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        importSvgIcon()
    }, [iconName])

    return { error, loading, SvgIcon: importedIconRef.current }
}
