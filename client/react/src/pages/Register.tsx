import SVGIcon from '../components/SVGIcon'
import styled from 'styled-components'
import UiButton from 'components/UiButton'
import UiInputField from 'components/UiInputField'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BasicAttrObject } from 'types'

type Props = {}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .login-panel {
        display: flex;
        flex-direction: column;
        background-color: var(--dark-blue);
        width: 400px;
        height: 418px;
        border-radius: 20px;
        padding: 32px;
        margin-top: 83px;
    }

    .sign-up-link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0 9px;
        font-size: var(--text-size-s);
        margin-top: 24px;
    }
`

function Register({}: Props) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        repeatPassword: '',
    })

    const handleNameChange = ({ name, value }: BasicAttrObject) => {
        setFormData({ ...formData, [name]: value })
    }

    return (
        <HomeContainer>
            <SVGIcon
                iconName="clip"
                wrapperStyle={{ marginTop: '78px' }}
                // svgProp={{ fill: '#ccc' }}
            />
            <div className="login-panel">
                <h1>Sign Up</h1>
                <UiInputField
                    wrapperStyle={{ marginTop: '40px' }}
                    label="Email address"
                    name="email"
                    value={formData.email}
                    changeHandler={handleNameChange}
                />
                <UiInputField
                    wrapperStyle={{ marginTop: '24px' }}
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    changeHandler={handleNameChange}
                />
                <UiInputField
                    wrapperStyle={{ marginTop: '24px', marginBottom: '24px' }}
                    label="Repeat Password"
                    name="repeatPassword"
                    type="password"
                    value={formData.repeatPassword}
                    changeHandler={handleNameChange}
                />
                <UiButton
                    clickHandler={(evt) => {
                        console.log(evt)
                    }}
                >
                    Create an account
                </UiButton>

                <div className="sign-up-link">
                    <p>Already have an account?</p>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Register
