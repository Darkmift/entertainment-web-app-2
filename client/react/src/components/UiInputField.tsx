import React, { useState } from 'react'
import styled, { CSSObject } from 'styled-components'
import { uuid } from '../utils/uuid'

type Props = {
    label: string
    name: string
    changeHandler?: ({ name, value }: { name: string; value: string }) => void
    value: string
    errorText?: string
    type?: 'text' | 'number' | 'password'
    wrapperStyle?: CSSObject
}

type ContainerProps = {
    value: string
    errorText?: string
    wrapperStyle?: CSSObject
    touched: boolean
}

const InputContainer = styled.div<ContainerProps>`
    --input-border-color: var(
        ${({ touched, value, errorText }) =>
            value.length
                ? '--blue-gray'
                : touched && errorText?.length
                ? '--orange'
                : '--blue-gray'}
    );
    --input-text-color: var(
        ${({ touched, value, errorText }) =>
            value.length
                ? '--white'
                : touched && errorText?.length
                ? '--orange'
                : '--white'}
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--input-border-color);
    color: var(--input-text-color);
    padding: 0 17px 17px 16px;

    font-size: var(--text-size-s);
    line-height: 19px;

    &:focus-within {
        --input-border-color: var(
            ${({ touched, value, errorText }) =>
                value.length
                    ? '--white'
                    : touched && errorText?.length
                    ? '--orange'
                    : '--white'}
        );
    }

    .error-text {
        color: var(--input-color);
        pointer-events: none;
    }

    ${(props) => {
        return props.wrapperStyle
    }}
`

const Input = styled.input`
    font-size: 16px;
    border: none;
    background-color: transparent;
    color: var(--input-color);
    outline: none;
    font-weight: 300;
    width: 65%;
`

const UiInputField = ({
    errorText = "Can't be empty",
    label,
    name,
    value,
    wrapperStyle,
    type = 'text',
    changeHandler,
}: Props) => {
    const [touched, setTouched] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value

        if (changeHandler) {
            changeHandler({ name, value })
        }
    }

    return (
        <InputContainer
            wrapperStyle={wrapperStyle}
            value={value}
            errorText={errorText}
            touched={touched}
        >
            <Input
                onClick={() => setTouched(true)}
                className="input-field"
                data-error-text="H"
                id={uuid() + '-' + name}
                placeholder={label}
                name={name}
                type={type}
                value={value}
                onInput={handleChange}
            />

            <span className="error-text">
                {touched && value.length === 0 ? errorText : ''}
            </span>
        </InputContainer>
    )
}

export default React.memo(UiInputField)
