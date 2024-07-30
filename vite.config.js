import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@import '$lib/styling/style.scss';
				`
			},
		}
	}
};

export default config;
