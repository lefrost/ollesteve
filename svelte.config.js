import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import inject from '@rollup/plugin-inject';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})

		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte'
	}
};

export default config;
