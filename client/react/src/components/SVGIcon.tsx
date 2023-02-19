import { useDynamicSvgImport } from '../hooks/useDynamicSvgImport'

interface IProps {
    iconName: string
    wrapperStyle?: string
    svgProp?: React.SVGProps<SVGSVGElement>
}

function SvgIcon(props: IProps) {
    const { iconName, wrapperStyle, svgProp } = props
    const { loading, SvgIcon: ImportedIcon } = useDynamicSvgImport(iconName)

    return (
        <>
            {loading && <div>Loading...</div>}
            {ImportedIcon && (
                <div className={wrapperStyle}>
                    <ImportedIcon {...svgProp} />
                </div>
            )}
        </>
    )
}

export default SvgIcon
