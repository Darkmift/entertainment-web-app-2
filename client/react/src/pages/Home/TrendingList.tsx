import React from 'react'
import styled from 'styled-components'
import { Media } from 'types'
import TrendingCard from './TrendingCard'

type Props = { items: Media[] }

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    .trending-media-list {
        padding-top: 25px;
        display: flex;
        gap: 40px;
        overflow-x: scroll;
    }
`

function TrendingList({ items }: Props) {
    return (
        <ListContainer>
            <h1>Trending</h1>
            <div className="trending-media-list">
                {items.map((item, index) => (
                    <TrendingCard key={index} item={item} />
                ))}
            </div>
        </ListContainer>
    )
}

export default TrendingList
