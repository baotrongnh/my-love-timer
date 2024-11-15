import {MantineProvider} from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'
import {theme} from './theme'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import CountTime from "./pages/CountTime.tsx"

function App() {

    return (
        <MantineProvider defaultColorScheme='light' theme={theme}>
            <Router
                future={{
                    v7_relativeSplatPath: true,
                    v7_startTransition: true,
                }}
            >
                <Routes>
                    <Route path="/" element={<CountTime/>}/>
                </Routes>
            </Router>
        </MantineProvider>
    )
}

export default App
