/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            tw: ['Titillium Web', 'sans-serif'],
        },
        extend: {
            container: {
                center: true,
                padding: '15px',
            },
            backgroundImage: {
                'linear-text': 'repeating-radial-gradient(circle farthest-corner at center center, #121FCF 0%, #CF1512 100%)',
                'backdrop-filter': 'linear-gradient( -45deg, #ec4899 50%, #8b5cf6 50% )',
            },
            backgroundColor: {
                base: '#0f172a',
                TextGradient: '#121FCF',
            },
            colors: {
                body: '#94a3b8',
            },
        },
    },
    plugins: [],
}
