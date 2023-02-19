import React, { useEffect } from 'react'
import styled from 'styled-components'
import SVGIcon from './SVGIcon'
import userLogo from '../assets/images/portfolio.png'
import { CategoryName } from 'types'

type Props = {
    onIconClick: (iconName: string) => void
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
    justify-content: space-between;
    width: 96px;
    height: 960px;
    padding: 35px 0 32px 0;
    border-radius: 20px;

    .nav-icons {
        margin-top: 75px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        .nav-icon {
            svg {
                fill: var(--blue-gray);
            }
        }
        .nav-icon-selected {
            svg {
                fill: var(--white);
            }
        }
    }

    img {
        width: 40px;
        height: 40px;
    }
`

function IconPanel({ onIconClick, category }: Props) {
    const clickedIconHandler = (iconName: string) => {
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
            <div className="nav-wrapper">
                <SVGIcon iconName="clip" />
                <div className="nav-icons">
                    {['all-media', 'movies', 'series', 'favorites'].map(
                        (categoryName, i) => (
                            <span
                                key={i}
                                onClick={(e) =>
                                    clickedIconHandler(categoryName)
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
            </div>
            <img src={userLogo} alt={userLogo} />
        </PanelWrapper>
    )
}

export default IconPanel
