import FlipClock from "../components/FlipClock/FlipClock.tsx"
import {useTranslation} from "react-i18next"
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import music from '../assets/audio/Die With A Smile - Bruno Mars & Lady Gaga (Piano Cover by Riyandi Kusuma).mp3'

export default function CountTime() {
    const {t} = useTranslation()

    return (
        <div>
            <div className='h-svh w-full flex justify-center items-center flex-col'>
                <h1 className='text-center text-2xl font-semibold text-pink-700 mb-3'>{t('we have been together for')}</h1>
                <FlipClock time='2023-9-13'/>
            </div>

            <div className='container pt-72 fixed bottom-5'>
                <AudioPlayer
                    autoPlay={true}
                    src={music}
                    loop={true}
                    showDownloadProgress={true}
                    className='bg-pink-50 shadow-none mt-6'
                />
            </div>
        </div>
    )
}
