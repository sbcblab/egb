import { client } from '$lib/server';
import { readSingleton } from '@directus/sdk';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const home = await client.request(readSingleton('home'));
	return { home };
};
