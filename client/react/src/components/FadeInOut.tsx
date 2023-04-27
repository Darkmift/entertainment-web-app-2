// FadeInOut.js
import { CSSTransition } from 'react-transition-group'

const FadeInOut = ({
    condition,
    children,
}: {
    condition: boolean
    children: any
}) => {
    return (
        <CSSTransition
            in={condition}
            timeout={600}
            classNames="fade"
            unmountOnExit
        >
            {children}
        </CSSTransition>
    )
}

export default FadeInOut
