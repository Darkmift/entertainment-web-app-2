import IconPanel from 'components/IconPanel'
import styled from 'styled-components'
import { SetStateAction, useState } from 'react'
import { CategoryName } from 'types'

type Props = {}

const HomeContainer = styled.div`
    display: flex;
    padding: 32px 0 0 32px;
    gap: 0 36px;

    .media-browser {
        background-color: var(--dark-blue);
    }
`

function Home({}: Props) {
    const [category, setCategory] = useState<CategoryName>('all-media')
    return (
        <HomeContainer>
            <IconPanel
                category={category}
                onIconClick={(categoryName: string) => {
                    console.log('icon set', { iconName: categoryName })
                    setCategory(categoryName as SetStateAction<CategoryName>)
                }}
            />
            <div className="media-browser">MEDIA AREA</div>
        </HomeContainer>
    )
}

export default Home
