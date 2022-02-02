module.exports = {
    content: ['./index.html'],
    theme: {
        colors: {
            white: 'hsl(0, 0%, 100%)',
            black: 'hsl(0, 0%, 0%)',
            gray: {
                dark: 'hsl(0, 0%, 55%)',
                'very-dark': 'hsl(0, 0%, 41%)',
            },
        },
        fontFamily: {
            alata: ['Alata', 'sans-serif'],
            'josefin-sans': ['Josefin Sans', 'sans-serif'],
        },
        extend: {
            fontSize: {
                body: '15px',
            },
        },
    },
    plugins: [],
};
