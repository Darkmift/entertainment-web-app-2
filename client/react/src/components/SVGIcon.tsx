import { useDynamicSvgImport } from '../hooks/useDynamicSvgImport'

interface IProps {
    iconName: string
    wrapperStyle?: { [key: string]: string }
    className?: string
    svgProp?: React.SVGProps<SVGSVGElement>
}

function SvgIcon({ iconName, wrapperStyle, svgProp, className = '' }: IProps) {
    const { loading, SvgIcon: ImportedIcon } = useDynamicSvgImport(iconName)

    return (
        <>
            {loading && <span>Loading...</span>}
            {ImportedIcon && (
                <span
                    style={wrapperStyle ? wrapperStyle : {}}
                    className={
                        className.length
                            ? 'svg-wrapper ' + className
                            : 'svg-wrapper'
                    }
                >
                    <ImportedIcon {...svgProp} />
                </span>
            )}
        </>
    )
}

export default SvgIcon
