export const getLanguage = (languageCode: string): string => {
    switch (languageCode) {
        case 'en': return 'English'
        case 'vi': return 'Tiếng Việt'
        default: return 'Error'
    }
}