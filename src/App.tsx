import { MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'
import FlipClock from './components/FlipClock'


// const days = Math.floor(durationInSeconds / (24 * 60 * 60));
// const hours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60));
// const minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
// const seconds = durationInSeconds % 60;

function App() {
  
  return (
    <MantineProvider defaultColorScheme='light'>
      <>
        <h1 className='text-pink-500 text-7xl'>Love timer</h1>
        <FlipClock />
      </>
    </MantineProvider>
  )
}

export default App
