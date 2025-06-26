import dayjs from "dayjs"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import FlipUnitContainer from "./FlipUnitContainer"

const FlipClock = ({time}: { time: string }) => {
    const {t} = useTranslation()
    const [isFirstTime, setIsFirstTime] = useState(true)
    const [hoursShuffle, setHoursShuffle] = useState<boolean>(true)
    const [minutesShuffle, setMinutesShuffle] = useState<boolean>(true)
    const [daysShuffle, setDaysShuffle] = useState<boolean>(true)

    const [days, setDays] = useState<number>(0)
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)

    const intervalRef = useRef<ReturnType<typeof setInterval>>()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const now = dayjs()
            const durationInSeconds = now.diff(dayjs(time), 'second')
            const newSeconds = durationInSeconds % 60
            const newMinutes = Math.floor((durationInSeconds % (60 * 60)) / 60)
            const newHours = Math.floor((durationInSeconds % (24 * 60 * 60)) / (60 * 60))
            const newDays = Math.floor(durationInSeconds / (24 * 60 * 60))

            if (newSeconds === 0) {
                setIsFirstTime(false)
            }

            if (newSeconds !== seconds) {
                setSeconds(newSeconds)
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
        }, 1000)

        return () => clearInterval(intervalRef.current)
    }, [seconds, minutes, hours, days, time])

    if (seconds === 0 && isFirstTime) {
        return <h1>loading...</h1>
    }

    return (
        <div className='flex gap-3 justify-center'>
            <div className="text-center">
                <FlipUnitContainer unit='day' digit={639} shuffle={daysShuffle}/>
                <p className="text-pink-500 text-sm mt-3">{t('days')}</p>
            </div>

            <div className="text-center">
                <FlipUnitContainer unit='hours' digit={hours} shuffle={hoursShuffle}/>
                <p className="text-pink-500 text-sm mt-3">{t('hours')}</p>
            </div>

            <div className="text-center">
                <FlipUnitContainer unit='minutes' digit={minutes} shuffle={minutesShuffle}/>
                <p className="text-pink-500 text-sm mt-3">{t('minutes')}</p>
            </div>
            <div className="text-center">
                <FlipUnitContainer unit='seconds' digit={45} shuffle={false}/>
                <p className="text-pink-500 text-sm mt-3">{t('seconds')}</p>
            </div>
        </div>
    )
}

export default FlipClock
