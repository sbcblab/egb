import { API_TOKEN } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';
import { type Schema } from '$lib/types';
import { createDirectus, readItems, readSingleton, rest, staticToken } from '@directus/sdk';

const client = createDirectus<Schema>(PUBLIC_API_URL).with(staticToken(API_TOKEN)).with(rest());

export async function getGlobal() {
	const global = await client.request(readSingleton('global'));
	return {
		...global,
		eventStartDate: `${global.eventStartDate}T00:00:00`,
		eventEndDate: `${global.eventEndDate}T00:00:00`,
		coursesStartDate: `${global.coursesStartDate}T00:00:00`,
		coursesEndDate: `${global.coursesEndDate}T00:00:00`
	};
}

export async function getAbout() {
	const about = await client.request(
		readSingleton('about', {
			fields: [
				'*',
				{
					translations: ['*'],
					whatIsEgbImage: ['id', 'title'],
					theVenueImage: ['id', 'title'],
					committee: [
						{
							people_id: [
								'*',
								{
									picture: ['id', 'title'],
									institution: ['*'],
									country: ['*', { translations: ['*'] }]
								}
							]
						}
					],
					organizers: [{ institutions_id: ['*'] }],
					sponsors: [{ institutions_id: ['*'] }]
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
									country: ['*', { translations: ['*'] }],
									translations: ['*']
								}
							]
						}
					],
					translations: ['*']
				}
			]
		})
	);
	return courses.map((course) => ({
		...course,
		schedule: course.schedule
			? course.schedule.map((s) => ({ ...s, date: `${s.date}T00:00:00` }))
			: null
	}));
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

export async function getRegistration() {
	const registration = await client.request(
		readSingleton('registration', {
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
	return registration;
}
export async function getSubmissions() {
	const submissions = await client.request(readSingleton('submissions'));
	return {
		...submissions,
		submissionStart: submissions.submissionStart ? `${submissions.submissionStart}T00:00:00` : null,
		submissionDeadline: submissions.submissionDeadline
			? `${submissions.submissionDeadline}T00:00:00`
			: null,
		acceptanceNotification: submissions.acceptanceNotification
			? `${submissions.acceptanceNotification}T00:00:00`
			: null
	};
}
