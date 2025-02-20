import type { DirectusFile } from '@directus/sdk';

interface Entry {
	id: number;
}

interface PreviousEdition extends Entry {
	title: string;
	description: string;
	image: DirectusFile;
}

interface Country extends Entry {
	name: string;
	emoji: string;
}

interface CommitteeMember extends Entry {
	name: string;
	link?: string;
	institution: string;
	institutionLink?: string;
	country: Country;
}

interface Home extends Entry {
	mainTitle: string;
	startDate: string;
	endDate: string;
	buttonLabel: string;
	buttonLink: string;
	about: string;
}

interface About extends Entry {
	body: string;
}

interface Social extends Entry {
	instagramLink: string;
	twitterLink: string;
	githubLink: string;
	linkedinLink: string;
}

export interface Schema {
	home: Home;
	about: About;
	social: Social;
	previousEditions: PreviousEdition[];
	countries: Country[];
	committeeMembers: CommitteeMember[];
	directusFiles: DirectusFile[];
}
