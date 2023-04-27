import { Media } from '@/types'
import styled from 'styled-components'
import RecommendedCard from './RecommendedCard'

type Props = { mode: string; items: Media[] }

const ListContainer = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    .recommended-media-list {
        padding-top: 25px;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        overflow-y: scroll;
    }
`

function RecommendedList({ mode, items }: Props) {
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

    return (
        <ListContainer>
            <h1>{title}</h1>
            <div className="recommended-media-list">
                {items.map((item, index) => (
                    <RecommendedCard key={index} item={item} />
                ))}
            </div>
        </ListContainer>
    )
}

export default RecommendedList
