import { useDynamicSvgImport } from '../hooks/useDynamicSvgImport'
import LoadingSvg from '@/assets/images/loading.svg'
import { ReactSVG } from 'react-svg'

interface IProps {
    iconName: string
    wrapperStyle?: { [key: string]: string }
    className?: string
    svgProp?: React.SVGProps<SVGSVGElement>
}

function SvgIcon({ iconName, wrapperStyle, svgProp, className = '' }: IProps) {
    const {
        loading,
        SvgIcon: ImportedIcon,
        BaseSVG,
    } = useDynamicSvgImport(iconName)

    return (
        <>
            {loading && <img src={LoadingSvg} alt="loading" />}
            {ImportedIcon && (
                <span
                    style={wrapperStyle ? wrapperStyle : {}}
                    className={
                        className.length
                            ? 'svg-wrapper ' + className
                            : 'svg-wrapper'
                    }
                >
                    <ReactSVG
                        src={`./assets/images/${iconName}.svg`}
                        {...svgProp}
                    />
                </span>
            )}
        </>
    )
}

export default SvgIcon
