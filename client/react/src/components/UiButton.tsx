import React from 'react'
import styled from 'styled-components'

type Props = {
    className?: string
    clickHandler: React.MouseEventHandler<HTMLButtonElement>
    variant?: 'white' | 'orange'
    children: React.ReactNode
}

function UnstyledButton({
    className,
    children,
    clickHandler,
    variant = 'orange',
}: Props) {
    return (
        <button
            onClick={clickHandler}
            className={`${className} ui-button ui-button-variant-${
                variant === 'white' ? 'white' : 'orange'
            }`}
        >
            {children}
        </button>
    )
}
const UiButton = styled(UnstyledButton)`
    &.ui-button {
        font-size: var(--text-size-s);
        width: 336px;
        height: 48px;
        border: none;
        border-radius: 6px;
        padding: 15px;
    }
    &.ui-button-variant-orange {
        background-color: var(--orange);
    }
    &.ui-button-variant-white {
        background-color: var(--white);
        color: var(--black);
    }
`

export default UiButton
