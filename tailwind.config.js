module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "jcbackground": "#0D0D0D",
                "jcbackground-secondary": "#1A1A1A",
                "jcbackground-card": "#242424",
                "jctext": "#F5F5F0",
                "jctext-secondary": "#9A9A8E",
                "jcgold": "#C9A84C",
                "jcgold-light": "#E8C96A",
                "jcborder": "#2A2A2A",
            },
        },
    },
    plugins: [],
}
