import SVGIcon from '../components/SVGIcon'
import styled from 'styled-components'

type Props = {}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Home({}: Props) {
    return (
        <HomeContainer>
            <SVGIcon
                iconName="clip"
                wrapperStyle={{ marginTop: '78px' }}
                // svgProp={{ fill: '#ccc' }}
            />
        </HomeContainer>
    )
}

export default Home
