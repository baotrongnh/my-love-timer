import {MantineProvider} from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'
import {theme} from './theme'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import CountTime from "./pages/CountTime.tsx"
import MainLayout from "./layouts/MainLayout.tsx";

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
                    <Route path="/" element={<MainLayout><CountTime/></MainLayout>}/>
                </Routes>
            </Router>
        </MantineProvider>
    )
}

export default App
