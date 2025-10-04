module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Cores principais do portfólio
                "jcbackground": "#151925",
                "jcbackground-secondary": "#323846",
                "jcbackground-dark": "#0a0a0a",
                "jctext": "#ffffff",
                "jctext-secondary": "#b3b3b3",
                "jctext-muted": "#666666",

                // Cores de destaque
                "jcprimary": "#007bff",
                "jcprimary-light": "#3399ff",
                "jcprimary-dark": "#0056b3",
                "jcsecondary": "#6c757d",
                "jcsecondary-light": "#8a9299",
                "jcsecondary-dark": "#495057",

                // Cores de estado
                "jcsuccess": "#28a745",
                "jcsuccess-light": "#34ce57",
                "jcsuccess-dark": "#1e7e34",
                "jcwarning": "#ffc107",
                "jcwarning-light": "#ffd43b",
                "jcwarning-dark": "#e0a800",
                "jcdanger": "#dc3545",
                "jcdanger-light": "#e74c3c",
                "jcdanger-dark": "#bd2130",
                "jcinfo": "#17a2b8",
                "jcinfo-light": "#39b5d1",
                "jcinfo-dark": "#138496",

                // Cores para acentos e destaques
                "jcaccent": "#ff6b6b",
                "jcaccent-light": "#ff8787",
                "jcaccent-dark": "#ff5252",
                "jcgold": "#ffd700",
                "jcgold-light": "#ffed4e",
                "jcgold-dark": "#e6c200",

                // Cores para gradientes e temas
                "jcpurple": "#8b5cf6",
                "jcpurple-light": "#a78bfa",
                "jcpurple-dark": "#7c3aed",
                "jcteal": "#14b8a6",
                "jcteal-light": "#5eead4",
                "jcteal-dark": "#0f766e",
                "jcindigo": "#6366f1",
                "jcindigo-light": "#818cf8",
                "jcindigo-dark": "#4f46e5",
                "jcred": "#FF0138",

                // Cores neutras adicionais
                "jcgray": {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827",
                    950: "#030712",
                },

                // Cores para bordas e separadores
                "jcborder": "#333333",
                "jcborder-light": "#555555",
                "jcborder-dark": "#1a1a1a",
            },
        },
    },
    plugins: [],
}
