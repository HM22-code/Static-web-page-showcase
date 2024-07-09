/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"wood-bark-dark": "url('./assets/img/wood-bark-dark.png')",
				"zipline-dark": "url('./assets/img/zipline-dark.png')",
			},
		},
	},
	plugins: [],
	/* media */
	darkMode: "media",
};
