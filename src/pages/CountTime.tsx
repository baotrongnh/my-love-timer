import dayjs from 'dayjs'
import { useEffect, useRef } from 'react'
export default function CountTime() {
     const intervalRef = useRef<ReturnType<typeof setInterval>>()

     useEffect(() => {
          intervalRef.current = setInterval(() => {
               const now = dayjs()
               const durationInSeconds = now.diff(dayjs("2023-09-13"), 'second')
               console.log(Math.floor(durationInSeconds / (24 * 60 * 60)))
          }, 1000)

          return () => clearInterval(intervalRef.current)
     }, [])

     return (
          <div>

          </div>
     )
}
