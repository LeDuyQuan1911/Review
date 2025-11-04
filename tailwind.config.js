/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./views/**/*.{ejs,html}",  // view EJS
        "./src/**/*.{ts,js}",       // code TS/JS
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
