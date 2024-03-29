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
        height: 373px;
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

function Login({}: Props) {
    const [formData, setFormData] = useState<{
        email: string
        password: string
    }>({ email: '', password: '' })

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
                <h1>Login</h1>
                <UiInputField
                    wrapperStyle={{ marginTop: '40px' }}
                    label="Email address"
                    name="email"
                    value={formData.email}
                    changeHandler={handleNameChange}
                />
                <UiInputField
                    wrapperStyle={{ marginTop: '24px', marginBottom: '40px' }}
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    changeHandler={handleNameChange}
                />
                <UiButton
                    clickHandler={(evt) => {
                        console.log(evt)
                    }}
                >
                    Login to your account
                </UiButton>

                <div className="sign-up-link">
                    <p>Don’t have an account?</p>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </HomeContainer>
    )
}

export default Login
