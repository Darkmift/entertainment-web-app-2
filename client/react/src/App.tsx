import { useState } from 'react'
import UiButton from './components/UiButton'
import UiInputField from './components/UiInputField'

function App() {
    const [value, setValue] = useState('')

    const handleNameChange: (value: string) => void = (event) => {
        setValue(event)
        console.log(
            '🚀 ~ file: App.tsx:11 ~ handleNameChange ~ event.target.value',
            event
        )
    }

    return (
        <div className="App">
            <div style={{ padding: '3vmin' }}>
                <h1>Hi</h1>

                <UiInputField
                    label="Name"
                    name="name"
                    value={value}
                    changeHandler={handleNameChange}
                    errorText={'sdfd'}
                />
                <UiInputField
                    label="Name"
                    name="name"
                    value={value}
                    changeHandler={handleNameChange}
                    errorText={''}
                />
                <UiInputField
                    label="Name"
                    name="name"
                    value={''}
                    changeHandler={handleNameChange}
                    errorText={''}
                />
                <UiButton
                    variant="white"
                    text="hello"
                    clickHandler={(evt) => {
                        console.log(evt)
                    }}
                />
            </div>
        </div>
    )
}

export default App
