import { Media } from '@/types'
import styled from 'styled-components'
import RecommendedCard from './RecommendedCard'

type Props = {
    mode: string
    items: Media[]
    searchText?: string
    handleFavoriteToggle: (item: Media) => void
}

const ListContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 768px) {
        gap: 29px;
    }
    @media (max-width: 375px) {
        margin-top: 10px;
        gap: 0px;
        padding: 0px 16px;
        font-size: 10px;
    }
    .recommended-media-list {
        padding-top: 25px;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        overflow-y: scroll;
        @media (max-width: 375px) {
            gap: 15px;
        }
    }
`

function RecommendedList({
    mode,
    items,
    searchText = '',
    handleFavoriteToggle,
}: Props) {
    let title = ''

    switch (mode) {
        case 'all-media':
            title = 'Recommended for you'
            break
        case 'movies':
            title = 'Movies'
            break
        case 'series':
            title = 'TV Series'
            break
        case 'favorites movies':
            title = 'Bookmarked TV Series'
            break
        case 'favorites series':
            title = 'Bookmarked TV Series'
            break

        default:
            title = '??'
            break
    }

    if (searchText.length > 0) {
        title = `Found ${items.length} results for "${searchText}"`
    }

    return (
        <ListContainer>
            <h1>{title}</h1>
            <div className="recommended-media-list">
                {items.map((item, index) => (
                    <RecommendedCard
                        handleFavoriteToggle={handleFavoriteToggle}
                        key={index}
                        item={item}
                    />
                ))}
            </div>
        </ListContainer>
    )
}

export default RecommendedList
