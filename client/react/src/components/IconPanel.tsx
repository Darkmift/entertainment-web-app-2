import React, { useEffect } from 'react'
import styled from 'styled-components'
import SVGIcon from './SVGIcon'
import userLogo from '../assets/images/portfolio.png'
import { CategoryName } from 'types'

type Props = {
    onIconClick: (iconName: CategoryName) => void
    category: CategoryName
}
type WrapperProps = {
    category: CategoryName
}

const PanelWrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    background-color: var(--dark-blue);
    align-items: center;

    width: 96px;
    height: 960px;
    padding: 35px 0 32px 0;
    border-radius: 20px;

    @media (max-width: 768px) {
        padding: 21px 19px 19px 24px;
        flex-direction: row;
        width: 100%;
        height: 72px;
        justify-content: space-between;
    }

    @media (max-width: 375px) {
        svg {
            width: 25px;
        }
    }

    .nav-icons {
        margin-top: 75px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        flex: 1;
        .nav-icon {
            svg {
                fill: var(--blue-gray);
            }
            @media (max-width: 375px) {
                svg {
                    width: 16px;
                }
            }
        }
        .nav-icon-selected {
            svg {
                fill: var(--white);
            }
        }

        @media (max-width: 768px) {
            flex-direction: row;
            margin-top: 0;
            flex: 0;
        }

        @media (max-width: 375px) {
            width: 100%;
            gap: 20px;
        }
    }

    img {
        width: 40px;
        height: 40px;

        @media (max-width: 375px) {
            width: 24px;
            height: 24px;
        }
    }
`

function IconPanel({ onIconClick, category }: Props) {
    const clickedIconHandler = (iconName: CategoryName) => {
        onIconClick(iconName)
    }

    useEffect(() => {
        console.log(
            '🚀 ~ file: IconPanel.tsx:52 ~ useEffect ~ category',
            category
        )
    }, [category])

    return (
        <PanelWrapper category={category}>
            <SVGIcon iconName="clip" />
            <div className="nav-icons">
                {['all-media', 'movies', 'series', 'favorites'].map(
                    (categoryName, i) => (
                        <span
                            key={i}
                            onClick={(e) =>
                                clickedIconHandler(categoryName as CategoryName)
                            }
                        >
                            <SVGIcon
                                iconName={categoryName}
                                className={
                                    categoryName === category
                                        ? 'nav-icon nav-icon-selected'
                                        : 'nav-icon'
                                }
                            />
                        </span>
                    )
                )}
            </div>

            <img src={userLogo} alt={userLogo} />
        </PanelWrapper>
    )
}

export default IconPanel
