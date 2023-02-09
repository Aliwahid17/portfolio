import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ...mdsvexConfig.extensions],

	preprocess: [
		preprocess({
			postcss: true,
			preserve:['partytown']
		}),
		mdsvex(mdsvexConfig),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
