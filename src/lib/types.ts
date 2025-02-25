import type { DirectusFile } from '@directus/sdk';

export type Contact = {
	email: string;
	phone: string;
};

export type Social = {
	instagram: string;
	twitter: string;
	linkedin: string;
	github: string;
};

export type Country = {
	name: string;
	alpha2: string;
};

export type Institution = {
	name: string;
	link?: string;
};

export type Person = {
	name: string;
	country: Country;
	link?: string;
	institution?: Institution;
};

export type Activity = {
	title: string;
	startTime: string;
	endTime: string;
	people: Person[];
};

export type Schedule = {
	day: string;
	activities: Activity[];
}[];

export interface Schema {
	directusFiles: DirectusFile[];
}
