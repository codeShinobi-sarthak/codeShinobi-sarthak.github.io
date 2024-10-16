/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Dark, calming colors
                deepGreen: "#385248", // A deep green for a relaxing, earthy vibe.
                softOrange: "#F29849", // A soft orange for subtle warmth without being too bright.
                burntOrange: "#F27C38", // A muted burnt orange, a bit more intense, can be used for highlights or buttons.
                burntSienna: "#732D14", // A rich burnt sienna for accents or backgrounds to add depth.
                charcoalBlack: "#0D0D0D", // A dark background color for a soothing, calm look.

                // You can also use these lighter shades if you want more contrast for text or certain elements:
                lightYellow: "#FFF7D6", // A soft, light yellow for text or light accents.
                pastelYellow: "#FDE8B2", // A pastel yellow that’s gentle on the eyes.
                sunshineYellow: "#FFD56B", // A warm, subtle yellow for a highlight color, but still not too harsh.
            },
            fontFamily: {
                Domine: ["Domine", "serif"],
            },
        },
    },
    plugins: [],
};
