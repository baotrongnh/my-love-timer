/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                pink: {
                    50: '#ffe9f2',
                    100: '#ffd1e0',
                    200: '#faa1bd',
                    300: '#f66e99',
                    400: '#f2437a',
                    500: '#f02866',
                    600: '#f0185c',
                    700: '#d6084c',
                    800: '#c00043',
                    900: '#a90039',
                }
            },
            container: {
                center: true,
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
    },
    plugins: [],
}