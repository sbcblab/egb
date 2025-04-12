import { API_TOKEN } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';
import { type Schema } from '$lib/types';
import { createDirectus, readItems, readSingleton, rest, staticToken } from '@directus/sdk';

const client = createDirectus<Schema>(PUBLIC_API_URL).with(staticToken(API_TOKEN)).with(rest());

export async function getGlobal() {
	const global = await client.request(readSingleton('global'));
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
					image: ['id', 'title'],
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
	const previousEditions = await client.request(
		readItems('previousEditions', {
			fields: ['*', { image: ['id', 'title'], translations: ['*'] }]
		})
	);
	return previousEditions;
}

export async function getProgram() {
	const program = await client.request(
		readSingleton('program', {
			fields: [
				{
					speakers: [
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
	return program;
}

export async function getCourses() {
	const courses = await client.request(
		readItems('courses', {
			fields: [
				'*',
				{
					instructors: [
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
					],
					translations: ['*']
				}
			]
		})
	);
	return courses;
}

export async function getActivities() {
	const activities = await client.request(
		readItems('activities', {
			fields: [
				'*',
				{
					speakers: [
						{
							people_id: [
								'*',
								{
									institution: ['*'],
									picture: ['id', 'title'],
									country: ['*', { translations: ['*'] }],
									translations: ['*']
								}
							]
						}
					],
					translations: ['*']
				}
			],
			filter: { date: { _nnull: true }, startTime: { _nnull: true }, endTime: { _nnull: true } },
			sort: ['date', 'startTime']
		})
	);
	return activities.map((activity) => ({
		...activity,
		date: `${activity.date}T00:00:00`
	}));
}
