import { client } from '$lib/server';
import { readItems, readSingleton } from '@directus/sdk';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const about = await client.request(readSingleton('about'));
	const previousEditions = await client.request(
		readItems('previousEditions', { fields: ['*', { image: ['id', 'description'] }] })
	);

	return { about, previousEditions };
};
