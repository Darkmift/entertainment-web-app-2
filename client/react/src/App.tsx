import UiButton from './components/UiButton'

function App() {
    return (
        <div className="App">
            <h1>Hi</h1>
            <UiButton
                variant="white"
                text="hello"
                clickHandler={(evt) => {
                    console.log(evt)
                }}
            />
        </div>
    )
}

export default App
