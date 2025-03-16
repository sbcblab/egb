import { API_TOKEN } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';
import { type Schema } from '$lib/types';
import { createDirectus, readSingleton, rest, staticToken } from '@directus/sdk';

const client = createDirectus<Schema>(PUBLIC_API_URL).with(staticToken(API_TOKEN)).with(rest());

export async function getGlobal() {
	const global = await client.request(readSingleton('global'));
	return { ...global, startDate: new Date(global.startDate), endDate: new Date(global.endDate) };
}

export async function getHome() {
	const home = await client.request(
		readSingleton('home', { fields: ['*', { translations: ['*'] }] })
	);
	return home;
}
