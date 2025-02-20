import { client } from '$lib/server';
import { readSingleton } from '@directus/sdk';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const social = await client.request(readSingleton('social'));
	return { social };
};
