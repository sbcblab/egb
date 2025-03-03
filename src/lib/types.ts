import type { DirectusFile } from '@directus/sdk';

export type Contact = {
	email: string;
	phone: string;
};

export type SocialLinks = {
	instagram: string;
	twitter: string;
	linkedin: string;
	github: string;
};

export type About = {
	body: string;
	speakers: Person[];
	committee: Person[];
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
	contact: Contact;
	socialLinks: SocialLinks;
	about: About;
	directusFiles: DirectusFile[];
}
