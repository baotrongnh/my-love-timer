import { MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'

function App() {

  return (
    <MantineProvider defaultColorScheme='light'>
      <>
        <h1 className='text-pink-500 text-7xl'>Love timer</h1>
      </>
    </MantineProvider>
  )
}

export default App
