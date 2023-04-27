import IconPanel from 'components/IconPanel'
import styled from 'styled-components'
import { SetStateAction, useState } from 'react'
import { CategoryName, Media } from 'types'
import SearchBar from 'components/SearchBar'
import TrendingList from './TrendingList'
import mediaJson from '@/mock/data.json'

const items = mediaJson as Media[]

type Props = {}

const HomeContainer = styled.div`
    display: flex;
    padding: 32px 0 0 32px;
    gap: 0 36px;

    .media-browser {
        width: 80vw;
        /* background-color: var(--dark-blue); */
        flex: 1;
    }
`

function Home({}: Props) {
    const [category, setCategory] = useState<CategoryName>('all-media')

    const [searchText, setSearchText] = useState('')

    return (
        <HomeContainer>
            <IconPanel
                category={category}
                onIconClick={(categoryName: string) => {
                    console.log('icon set', { iconName: categoryName })
                    setCategory(categoryName as SetStateAction<CategoryName>)
                }}
            />
            <div className="media-browser">
                <SearchBar
                    searchText={searchText}
                    onSearchTextChange={setSearchText}
                />
                <TrendingList items={items} />
            </div>
        </HomeContainer>
    )
}

export default Home
