import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import './App.css'
import MainLayout from "./layouts/MainLayout.tsx"
import CountTime from './pages/CountTime.tsx'
import { theme } from './theme'

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
                    <Route path="/" element={<MainLayout><CountTime /></MainLayout>} />
                </Routes>
            </Router>
        </MantineProvider>
    )
}

export default App
