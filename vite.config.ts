import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import {join} from 'path';
import { partytownVite } from '@builder.io/partytown/utils';

const config: UserConfig = {
	plugins: [sveltekit(), partytownVite({
		dest: join(process.cwd(), 'script', '~partytown')
	})],
	define: {
		'import.meta.env.VERCEL_ANALYTICS_ID': JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
	},
};

export default config;