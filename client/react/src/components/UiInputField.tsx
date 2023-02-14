import React, { useState } from 'react'
import styled from 'styled-components'
import { uuid } from '../utils/uuid'
import { spawn } from 'child_process'

type Props = {
    label: string
    name: string
    changeHandler?: (value: string) => void
    value: string
    errorText?: string
}
type ContainerProps = {
    value: string
    errorText?: string
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
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
    margin-bottom: 17px;
    border-bottom: 1px solid var(--input-color);
    color: var(--input-color);

    &:focus-within {
        --input-color: var(
            ${(props) => (props.errorText ? '--orange' : '--white')}
        );
    }

    .error-text {
        color: var(--input-color);
        pointer-events: none;
        padding-right: 17px;
    }
`

const Input = styled.input`
    padding: 8px;
    font-size: 16px;
    padding-left: 16px;
    /* padding-bottom: 17px; */
    border: none;
    background-color: transparent;
    color: var(--input-color);
    outline: none;
    font-weight: 300;
    width: 65%;
`

const UiInputField = ({
    errorText,
    label,
    name,
    value,
    changeHandler,
}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value

        if (changeHandler) {
            changeHandler(newValue)
        }
    }

    return (
        <InputContainer value={value} errorText={errorText}>
            <Input
                data-error-text="H"
                id={uuid() + '-' + name}
                placeholder={label}
                name={name}
                type="text"
                value={value}
                onInput={handleChange}
            />
            {errorText && <span className="error-text">{errorText}</span>}
        </InputContainer>
    )
}

export default React.memo(UiInputField)
