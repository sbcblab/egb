import { API_TOKEN } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';
import { type Schema } from '$lib/types';
import { createDirectus, readItems, readSingleton, rest, staticToken } from '@directus/sdk';

const client = createDirectus<Schema>(PUBLIC_API_URL).with(staticToken(API_TOKEN)).with(rest());

export async function getGlobal() {
	const global = await client.request(readSingleton('global'));
	console.log(global.startDate);
	return {
		...global,
		startDate: new Date(`${global.startDate}T00:00:00`),
		endDate: new Date(`${global.endDate}T00:00:00`)
	};
}

export async function getHome() {
	const home = await client.request(
		readSingleton('home', {
			fields: [
				'*',
				{
					translations: ['*'],
					organizers: [{ institutions_id: ['*'] }],
					sponsors: [{ institutions_id: ['*'] }]
				}
			]
		})
	);
	return home;
}

export async function getAbout() {
	const about = await client.request(
		readSingleton('about', {
			fields: [
				'*',
				{
					translations: ['*'],
					committee: [
						{
							people_id: [
								'*',
								{
									institution: ['*'],
									picture: ['id', 'title'],
									country: ['*', { translations: ['*'] }]
								}
							]
						}
					]
				}
			]
		})
	);
	return about;
}

export async function getPreviousEditions() {
	const previousEditions = (
		await client.request(
			readItems('previousEditions', {
				fields: ['*', { image: ['id', 'title'], translations: ['*'] }]
			})
		)
	).reverse();
	return previousEditions;
}
