/** @type {import('tailwindcss').Config} */
module.exports = {
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
                'bg-linear': 'linear-gradient( -45deg, #bd34fe 50%, #47caff 50% )',
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
};
