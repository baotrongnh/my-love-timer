import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            'days': 'days',
            'hours': 'HOURS',
            'minutes': 'MINUTES',
            'seconds': 'SECONDS',

            'we have been together for': 'We have been together for',

            'languages': 'Languages'
        }
    },
    vi: {
        translation: {
            'days': 'NGÀY',
            'hours': 'GIỜ',
            'minutes': 'PHÚT',
            'seconds': 'GIÂY',

            'we have been together for': 'Chúng tôi đã bên nhau được',

            'languages': 'Ngôn ngữ'
        },
    }
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    })

export default i18n