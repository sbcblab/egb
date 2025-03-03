import { client } from '$lib/server';
import { readSingleton } from '@directus/sdk';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const [contact, socialLinks] = await Promise.all([
		client.request(readSingleton('contact')),
		client.request(readSingleton('socialLinks'))
	]);
	return { contact, socialLinks };
};
