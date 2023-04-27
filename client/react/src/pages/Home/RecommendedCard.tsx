import SVGIcon from '@/components/SVGIcon'
import useDynamicImageImport from '@/hooks/useDynamicImageImport'
import { Media, MediaItemHandler } from '@/types'
import { useState } from 'react'
import styled from 'styled-components'

type Props = {
    item: Media
    handleFavoriteToggle: MediaItemHandler
}
type StyledProps = { bgImage: string }

const Card = styled.div<StyledProps>`
    display: flex;
    flex-direction: column;
    min-width: 280px;
    min-height: 176px;
    background-image: ${(props) => `url(${`${props.bgImage}`})`};
    background-size: cover;
    background-repeat: no-repeat;
    padding: 16px;
    justify-content: space-between;
    border-radius: 8px;
    cursor: pointer;

    @media (max-width: 768px) {
        min-width: 220px;
    }

    @media (max-width: 375px) {
        min-width: 164px;
        min-height: 110px;
        padding: 8px;
 
    }

    .media-favorite-icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        background-color: #10141e;
        mix-blend-mode: normal;
        opacity: 0.5;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        .media-favorite-icon {
            svg {
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`
const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    .media-meta {
        font-size: 15px;
        display: flex;
        margin-top: 8px;
        gap: 0 8px;

        color: #ffffff;
        mix-blend-mode: normal;
        opacity: 0.75;

        @media (max-width: 375px) {
            font-size: 11px;
        }

        .media-category-icon {
            margin-left: 8px;
            .media-icon {
                position: relative;
                margin-right: 6px;
                mix-blend-mode: normal;
                opacity: 0.75;

                svg {
                    position: absolute;
                    top: 4px;
                    right: -5px;
                    fill: white;
                    width: 12px;
                    height: 12px;

                    @media (max-width: 375px) {
                        width: 10px;
                        height: 10px;
                        top: 3px;
                    }
                }
            }
        }
    }
    .media-title {
        font-size: 24px;
        font-weight: 500;

        @media (max-width: 375px) {
            font-size: 14px;
        }
    }
`

function RecommendedCard({ item, handleFavoriteToggle }: Props) {
    const bgImage = useDynamicImageImport(item.thumbnail?.regular?.medium)
    const trendingToggle = () => handleFavoriteToggle(item)

    return (
        <span style={{ display: 'flex', flexDirection: 'column' }}>
            <Card bgImage={bgImage}>
                <span
                    className="media-favorite-icon-wrapper"
                    onClick={trendingToggle}
                >
                    <SVGIcon
                        className="media-favorite-icon"
                        svgProp={{ width: '12px', height: '12px' }}
                        iconName={
                            item.isBookmarked
                                ? 'bookmark-checked'
                                : 'bookmark-unchecked'
                        }
                    />
                </span>
            </Card>
            <CardDetails>
                <span className="media-meta">
                    {item.year} <span>&#x2022;</span>{' '}
                    <span className="media-category-icon">
                        <SVGIcon className="media-icon" iconName="movies" />
                        <span style={{ marginLeft: '6px' }}>
                            {item.category}
                        </span>
                    </span>
                    <span>&#x2022;</span> {item.rating}
                </span>
                <span className="media-title"> {item.title}</span>
            </CardDetails>
        </span>
    )
}

export default RecommendedCard
