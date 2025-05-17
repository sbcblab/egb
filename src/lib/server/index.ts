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
					bannerImage: ['id', 'title'],
					translations: ['*'],
					whatIsEgbImage1: ['id', 'title'],
					whatIsEgbImage2: ['id', 'title'],
					theVenueImage: ['id', 'title'],
					committee: [
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
					monitors: [
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
					bannerImage: ['id', 'title'],
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
	return {
		...registration,
		registrationStartDate: registration.registrationStartDate
			? `${registration.registrationStartDate}T00:00:00`
			: null,
		registrationEndDate: registration.registrationEndDate
			? `${registration.registrationEndDate}T00:00:00`
			: null
	};
}
export async function getSubmissions() {
	const submissions = await client.request(
		readSingleton('submissions', {
			fields: ['*', { translations: ['*'], bannerImage: ['id', 'title'] }]
		})
	);
	return {
		...submissions,
		submissionStart: submissions.submissionStart ? `${submissions.submissionStart}T00:00:00` : null,
		submissionDeadline: submissions.submissionDeadline
			? `${submissions.submissionDeadline}T00:00:00`
			: null,
		reviewEnd: submissions.reviewEnd ? `${submissions.reviewEnd}T00:00:00` : null,
		acceptanceNotification: submissions.acceptanceNotification
			? `${submissions.acceptanceNotification}T00:00:00`
			: null
	};
}

export async function getProgram() {
	const program = await client.request(
		readSingleton('program', {
			fields: [
				'*',
				{
					translations: ['*'],
					bannerImage: ['id', 'title']
				}
			]
		})
	);
	return program;
}

export async function getContact() {
	const program = await client.request(
		readSingleton('contact', { fields: ['*', { bannerImage: ['id', 'title'] }] })
	);
	return program;
}
