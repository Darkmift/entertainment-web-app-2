import React from 'react'
import styled, { CSSObject } from 'styled-components'
import { uuid } from '../utils/uuid'

type Props = {
    label: string
    name: string
    changeHandler?: (value: string) => void
    value: string
    errorText?: string
    type?: 'text' | 'number' | 'password'
    wrapperStyle?: CSSObject
}
type ContainerProps = {
    value: string
    errorText?: string
    wrapperStyle?: CSSObject
}

const InputContainer = styled.div<ContainerProps>`
    --input-color: var(
        ${(props) =>
            props.errorText?.length
                ? '--orange'
                : props.value.length
                ? '--white'
                : '--blue-gray'}
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--input-color);
    color: var(--input-color);
    padding-bottom: 17px;

    &:focus-within {
        --input-color: var(
            ${(props) => (props.errorText ? '--orange' : '--white')}
        );
    }

    .error-text {
        color: var(--input-color);
        pointer-events: none;
        margin-right: 17px;
    }

    ${(props) => {
        return props.wrapperStyle
    }}
`

const Input = styled.input`
    font-size: 16px;
    padding-left: 16px;
    border: none;
    background-color: transparent;
    color: var(--input-color);
    outline: none;
    font-weight: 300;
    width: 65%;
    font-size: var(--text-size-s);
    line-height: 19px;
`

const UiInputField = ({
    errorText,
    label,
    name,
    value,
    wrapperStyle,
    type = 'text',
    changeHandler,
}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value

        if (changeHandler) {
            changeHandler(newValue)
        }
    }

    return (
        <InputContainer
            wrapperStyle={wrapperStyle}
            value={value}
            errorText={errorText}
        >
            <Input
                className="input-field"
                data-error-text="H"
                id={uuid() + '-' + name}
                placeholder={label}
                name={name}
                type={type}
                value={value}
                onInput={handleChange}
            />
            {errorText && <span className="error-text">{errorText}</span>}
        </InputContainer>
    )
}

export default React.memo(UiInputField)
