/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				"dark-2": "#212529",
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
	darkMode: 'class',
}
