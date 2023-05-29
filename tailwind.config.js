/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			raleway: ["raleway"],
			Staatliches: ["staatliches"],
		},
		extend: {
			colors: {
				"light-blue": "#549697",
				"dark-blue": "#1b1d44",
				yellow: "#ffc757",
			},
		},
	},
	plugins: [],
};
