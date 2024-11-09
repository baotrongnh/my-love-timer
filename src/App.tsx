import { MantineProvider } from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'
import dayjs from 'dayjs'
import { useEffect, useRef } from 'react'

// const days = Math.floor(durationInSeconds / (24 * 60 * 60));
// const hours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60));
// const minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
// const seconds = durationInSeconds % 60;

function App() {
  const intervalRef = useRef<ReturnType<typeof setInterval>>()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const now = dayjs();
      const durationInSeconds = now.diff(dayjs("2023-09-13"), 'second');
      console.log(durationInSeconds);
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <MantineProvider defaultColorScheme='light'>
      <>
        <h1 className='text-pink-500 text-7xl'>Love timer</h1>
      </>
    </MantineProvider>
  )
}

export default App
