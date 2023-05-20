import { ReactSVG } from 'react-svg'

interface IProps {
    iconName: string
    wrapperStyle?: { [key: string]: string }
    className?: string
    svgProp?: React.SVGProps<SVGSVGElement>
}

function SvgIcon({ iconName, wrapperStyle, svgProp, className = '' }: IProps) {
    return (
        <>
            <span
                style={wrapperStyle ? wrapperStyle : {}}
                className={
                    className.length
                        ? 'svg-wrapper ' + className
                        : 'svg-wrapper'
                }
            >
                <ReactSVG
                    src={`/assets/images/${iconName}.svg`}
                    // {...svgProp}
                />
            </span>
        </>
    )
}

export default SvgIcon
