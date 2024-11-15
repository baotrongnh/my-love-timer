import {createTheme, DEFAULT_THEME, MantineColorsTuple, mergeMantineTheme} from "@mantine/core"

const pinkTheme: MantineColorsTuple = [
    "#ffe9f2",
    "#ffd1e0",
    "#faa1bd",
    "#f66e99",
    "#f2437a",
    "#f02866",
    "#f0185c",
    "#d6084c",
    "#c00043",
    "#a90039"
]

const themeOverride = createTheme({
    fontFamily: 'montserrat, sans-serif',
    colors: {
        pinkTheme
    },
    primaryColor: 'pinkTheme',
    defaultRadius: 'md',
    autoContrast: true,
    defaultGradient: {from: 'violet', to: 'blue', deg: 88}
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)