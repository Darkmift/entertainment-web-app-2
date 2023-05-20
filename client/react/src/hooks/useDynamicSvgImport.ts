/* @vite-ignore */
import React, { useEffect, useRef, useState } from 'react'

export function useDynamicSvgImport(
    iconName: string,
    path = '../assets/images/',
    ext = 'svg'
) {
    const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>()
    const importedIconAsStringRef = useRef<any>()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<unknown>()

    useEffect(() => {
        setLoading(true)
        const importSvgIcon = async (): Promise<void> => {
            try {
                const dynamicPath = `${path}${iconName}.${ext}`
                // have to give absolute path while importing the icon
                console.log(
                    '🚀 ~ file: useDynamicSvgImport.ts:20 ~ importSvgIcon ~ dynamicPath:',
                    dynamicPath
                )
                importedIconAsStringRef.current = React.createElement('img', {
                    src: dynamicPath,
                })
                importedIconRef.current = (
                    await import(/* @vite-ignore */ dynamicPath)
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

    return {
        path: `${path}${iconName}.${ext}`,
        error,
        loading,
        SvgIcon: importedIconRef.current,
        BaseSVG: importedIconAsStringRef,
    }
}
