/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['dist/*html'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				darkBlue: 'hsl(217, 28%, 15%)',
				darkBlueOne: 'hsl(218, 28%, 13%)',
				darkBlueTwo: 'hsl(216, 53%, 9%)',
				darkBlueThree: 'hsl(219, 30%, 18%)',
				accentCyan: 'hsl(176, 68%, 50%)',
				accentBlue: 'hsl(198, 60%, 50%)',
				lightRed: 'hsl(0, 100%, 63%)',
			},
			fontFamily: {
				sans: ['Raleway', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
			},
			backgroundImage: (theme) => ({
				'logo-dark-mode': "url('../assets/logo-dark-mode.svg')",
				'logo-light-mode': "url('../assets/logo-light-mode.svg')",
				'curvy-dark-mode': "url('../assets/bg-curvy-dark-mode.svg')",
				'curvy-light-mode': "url('../assets/bg-curvy-light-mode.svg')",
			}),
		},
	},
	variants: {
		extend: {
			backgroundImage: ['dark'],
		},
	},
	plugins: [],
};
