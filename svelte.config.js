import adapterAuto from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: process.env.PROD === '1' ? adapterNode() : adapterAuto(),
		paths: {
			base: process.env.PUBLIC_BASE_URL?.startsWith('/') ? process.env.PUBLIC_BASE_URL : ''
		}
	}
};

export default config;
