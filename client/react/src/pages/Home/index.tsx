import IconPanel from 'components/IconPanel'
import styled from 'styled-components'
import { SetStateAction, useEffect, useState } from 'react'
import { CategoryName, Media } from 'types'
import SearchBar from 'components/SearchBar'
import TrendingList from './TrendingList'
import mediaJson from '@/mock/data.json'
import RecommendedList from './RecommendedList'
import FadeInOut from '@/components/FadeInOut'

const media = mediaJson as Media[]
const CategoryMapper = {
    series: 'TV Series',
    movies: 'Movie',
    'all-media': 'all-media',
    favorites: 'favorites',
}

type Props = {}

const HomeContainer = styled.div`
    display: flex;
    padding: 32px 0 0 32px;
    gap: 0 36px;

    .media-browser {
        width: 80vw;
        flex: 1;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 23px 25px 24px 24px;
        .media-browser {
            width: 100vw;
        }
    }

    @media (max-width: 375px) {
        padding: 0px;
    }
`

function Home({}: Props) {
    const [category, setCategory] = useState<CategoryName>('all-media')
    const [searchText, setSearchText] = useState('')
    const [items, setItems] = useState<Media[]>(media)

    const handleFavoriteToggle = (item: Media) => {
        const newMedia = structuredClone(items)
        newMedia.forEach((target) => {
            if (target.title === item.title) {
                target.isBookmarked = !target.isBookmarked
            }
        })
        setItems(newMedia)
    }

    return (
        <HomeContainer>
            <IconPanel
                category={category}
                onIconClick={(categoryName: CategoryName) =>
                    setCategory(categoryName as SetStateAction<CategoryName>)
                }
            />
            <div className="media-browser">
                <SearchBar
                    searchText={searchText}
                    onSearchTextChange={setSearchText}
                />
                {searchText.length < 1 ? (
                    <>
                        <FadeInOut condition={category === 'all-media'}>
                            <TrendingList
                                handleFavoriteToggle={handleFavoriteToggle}
                                items={items.filter((item) => item.isTrending)}
                            />
                        </FadeInOut>

                        <FadeInOut condition={category === 'favorites'}>
                            <>
                                <RecommendedList
                                    handleFavoriteToggle={handleFavoriteToggle}
                                    mode={'favorites movies'}
                                    items={items.filter(
                                        (item) =>
                                            item.isBookmarked &&
                                            item.category ===
                                                CategoryMapper.movies
                                    )}
                                />
                                <RecommendedList
                                    handleFavoriteToggle={handleFavoriteToggle}
                                    mode={'favorites series'}
                                    items={items.filter(
                                        (item) =>
                                            item.isBookmarked &&
                                            item.category ===
                                                CategoryMapper.series
                                    )}
                                />
                            </>
                        </FadeInOut>

                        <FadeInOut condition={category != 'favorites'}>
                            <RecommendedList
                                handleFavoriteToggle={handleFavoriteToggle}
                                mode={category}
                                items={
                                    category === 'all-media'
                                        ? items
                                        : items.filter(
                                              (item) =>
                                                  item.category ===
                                                  CategoryMapper[category]
                                          )
                                }
                            />
                        </FadeInOut>
                    </>
                ) : (
                    <FadeInOut condition={searchText.length > 0}>
                        <RecommendedList
                            handleFavoriteToggle={handleFavoriteToggle}
                            mode={category}
                            searchText={searchText}
                            items={items.filter((item) =>
                                item.title
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            )}
                        />
                    </FadeInOut>
                )}
            </div>
        </HomeContainer>
    )
}

export default Home
