import dayjs from "dayjs"
import { useEffect, useRef, useState } from "react"
import FlipUnitContainer from "./FlipUnitContainer"

const FlipClock = () => {
     const [hoursShuffle, setHoursShuffle] = useState<boolean>(true)
     const [minutesShuffle, setMinutesShuffle] = useState<boolean>(true)
     const [secondsShuffle, setSecondsShuffle] = useState<boolean>(true)
     const [daysShuffle, setDaysShuffle] = useState<boolean>(true)

     const [days, setDays] = useState<number>(0)
     const [hours, setHours] = useState<number>(0)
     const [minutes, setMinutes] = useState<number>(0)
     const [seconds, setSeconds] = useState<number>(0)

     const intervalRef = useRef<ReturnType<typeof setInterval>>()

     useEffect(() => {
          intervalRef.current = setInterval(() => {
               const now = dayjs()
               const durationInSeconds = now.diff(dayjs("2023-09-13"), 'second')
               const newSeconds = durationInSeconds % 60
               const newMinutes = Math.floor((durationInSeconds % (60 * 60)) / 60)
               const newHours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60))
               const newDays = Math.floor(durationInSeconds / (24 * 60 * 60))

               if (newSeconds !== seconds) {
                    setSeconds(newSeconds)
                    setSecondsShuffle((prevShuffle) => !prevShuffle)
               }

               if (newMinutes !== minutes) {
                    setMinutes(newMinutes)
                    setMinutesShuffle((prevShuffle) => !prevShuffle)
               }

               if (newHours !== hours) {
                    setHours(newHours)
                    setHoursShuffle((prevShuffle) => !prevShuffle)
               }

               if (newDays !== days) {
                    setDays(newDays)
                    setDaysShuffle((prevShuffle) => !prevShuffle)
               }

               console.log(newMinutes)
               console.log(minutes)
               console.log(seconds)
          }, 1000)

          return () => clearInterval(intervalRef.current)
     }, [seconds, minutes, hours, days])

     return (
          <div className='flex gap-2'>
               <div>
                    <p>Days</p>
                    <FlipUnitContainer unit='day' digit={days} shuffle={daysShuffle} />
               </div>

               <div>
                    <p>Hours</p>
                    <FlipUnitContainer unit='hours' digit={hours} shuffle={hoursShuffle} />
               </div>

               <div>
                    <p>Minutes</p>
                    <FlipUnitContainer unit='minutes' digit={minutes} shuffle={minutesShuffle} />
               </div>
               <div>
                    <p>Seconds</p>
                    <FlipUnitContainer unit='seconds' digit={seconds} shuffle={secondsShuffle} />
               </div>

          </div>
     )
}

export default FlipClock
