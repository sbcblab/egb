import { client } from '$lib/server';
import { readItems } from '@directus/sdk';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async () => {
	const committeeMembers = await client.request(
		readItems('committeeMembers', { fields: ['*', { country: ['*'] }] })
	);
	return { committeeMembers };
};
