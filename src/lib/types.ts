export type LanguageCode = 'en-US' | 'pt-BR';

export interface Global {
	startDate: string | Date;
	endDate: string | Date;
	email: string;
	phone: string;
	instagramLink: string;
	twitterLink: string;
	linkedinLink: string;
	githubLink: string;
}

export interface Schema {
	global: Global;
}
