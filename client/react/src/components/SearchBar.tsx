import React from 'react'
import styled from 'styled-components'
import SVGIcon from './SVGIcon'

type Props = {
    searchText: string
    onSearchTextChange: (searchText: string) => void
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 32px 0 0 32px;
    gap: 24px;
    input {
        font-size: 24px;
        line-height: 30.24px;
        background-color: transparent;
        border: none;
        width: 100%;
    }
`

function SearchBar({}: Props) {
    return (
        <Wrapper>
            <SVGIcon
                iconName="search"
                svgProp={{ width: '32px', height: '32px' }}
            />
            <input type="text" placeholder="Search for movies or TV series" />
        </Wrapper>
    )
}

export default SearchBar
