import useDrag from '@/hooks/useDrag'
import { useState } from 'react'
import styled from 'styled-components'
import { Media } from 'types'
import TrendingCard from './TrendingCard'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import 'react-horizontal-scrolling-menu/dist/styles.css'

type Props = { items: Media[] }

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    .trending-media-list {
        padding-top: 25px;
        display: flex;
        gap: 40px;
        overflow-x: scroll;
    }
`
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15

    if (isThouchpad) {
        ev.stopPropagation()
        return
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext()
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev()
    }
}

function TrendingList({ items }: Props) {
    const { dragStart, dragStop, dragMove, dragging } = useDrag()

    const [selected, setSelected] = useState<string>('')

    const handleItemClick = (itemId: string) => () => {
        if (dragging) {
            return false
        }
        setSelected(selected !== itemId ? itemId : '')
    }
    const handleDrag =
        ({ scrollContainer }: scrollVisibilityApiType) =>
        (ev: React.MouseEvent) =>
            dragMove(ev, (posDiff) => {
                if (scrollContainer.current) {
                    scrollContainer.current.scrollLeft += posDiff
                }
            })

    return (
        <ListContainer onMouseLeave={dragStop}>
            <h1>Trending</h1>
            <ScrollMenu
                onWheel={onWheel}
                onMouseDown={() => dragStart}
                onMouseUp={() => dragStop}
                onMouseMove={handleDrag}
            >
                {items.map((item, index) => (
                    <TrendingCard key={index} item={item} />
                ))}
            </ScrollMenu>
        </ListContainer>
    )
}

export default TrendingList
