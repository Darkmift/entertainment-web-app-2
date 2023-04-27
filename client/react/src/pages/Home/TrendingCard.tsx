import useDynamicImageImport from '../../hooks/useDynamicImageImport'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Media } from 'types'
import SVGIcon from 'components/SVGIcon'

type Props = {
    item: Media
}
type StyledProps = Props & { bgImage: string }

const Card = styled.div<StyledProps>`
    margin-right: 40px;
    display: flex;
    flex-direction: column;
    min-width: 470px;
    min-height: 230px;
    background-image: ${(props) => `url(${`${props.bgImage}`})`};
    background-size: cover;
    background-repeat: no-repeat;
    padding: 24px;
    justify-content: space-between;
    border-radius: 8px;
    cursor: pointer;

    .media-details {
        display: flex;
        flex-direction: column;

        .media-meta {
            font-size: 15px;
            display: flex;
            gap: 0 8px;

            color: #ffffff;
            mix-blend-mode: normal;
            opacity: 0.75;

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
                    }
                }
            }
        }
        .media-title {
            font-size: 24px;
            font-weight: 500;
        }
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

function TrendingCard({ item }: Props) {
    const bgImage = useDynamicImageImport(
        item.thumbnail?.trending?.large || item.thumbnail?.regular?.large
    )
    const [isTrending, setIsrending] = useState(item.isTrending)

    const trendingToggle = () => setIsrending(!isTrending)

    return (
        <Card item={item} bgImage={bgImage}>
            <span
                className="media-favorite-icon-wrapper"
                onClick={trendingToggle}
            >
                <SVGIcon
                    className="media-favorite-icon"
                    svgProp={{ width: '12px', height: '12px' }}
                    iconName={
                        isTrending ? 'bookmark-checked' : 'bookmark-unchecked'
                    }
                />
            </span>
            <div className="media-details">
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
            </div>
        </Card>
    )
}

export default TrendingCard
