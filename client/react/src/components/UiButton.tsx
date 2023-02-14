import React from 'react'
import styled from 'styled-components'

type Props = {
    text: string
    className?: string
    clickHandler: React.MouseEventHandler<HTMLButtonElement>
    variant?: 'white' | 'orange'
}

function UnstyledButton({ className, text, clickHandler, variant='orange' }: Props) {
    return (
        <button
            onClick={clickHandler}
            className={`${className} ui-button ui-button-variant-${
                variant === 'white' ? 'white' : 'orange'
            }`}
        >
            {text}
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
