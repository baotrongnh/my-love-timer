export const getLanguage = (languageCode: string): string => {
    switch (languageCode) {
        case 'en': return 'English'
        case 'vi': return 'Việt Nam'
        default: return 'Error'
    }
}