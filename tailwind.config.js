/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"wood-bark": "url('../public/assets/img/wood-bark.jpg')",
			},
		},
	},
	plugins: [],
	darkMode: "class",
});
