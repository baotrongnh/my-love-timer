import FlipClock from "../components/FlipClock/FlipClock.tsx"
import {useTranslation} from "react-i18next"
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import music from '../assets/audio/Intro (Mong Em Hạnh Phúc Suốt Cuộc Đời Này)  buitruonglinh.mp3'

export default function CountTime() {
    const {t} = useTranslation()

    return (
        <div>
            <div className='h-svh w-full flex justify-center items-center flex-col'>
                <h1 className='text-center text-2xl font-semibold text-pink-700 mb-3'>{t('we have been together for')}</h1>
                <FlipClock time='2023-9-13'/>
            </div>

            <div className='fixed bottom-5 w-full px-2.5 md:px-8'>
                <div className='container'>
                    <AudioPlayer
                        autoPlay={true}
                        src={music}
                        loop={true}
                        showDownloadProgress={true}
                        className='bg-transparent shadow-none backdrop-brightness-90 mt-6 rounded-2xl'
                    />
                </div>
            </div>
        </div>
    )
}
