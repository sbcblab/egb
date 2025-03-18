export type LanguageCode = 'en-US' | 'pt-BR';

export interface Translation {
	languages_code: LanguageCode;
}

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

export interface Institution {
	name: string;
	link: string | null;
	logo: string | null;
}

export interface Home {
	translations: HomeTranslation[];
	aboutImage: string;
	organizers: HomeInstitution[];
	sponsors: HomeInstitution[];
}

export interface About {
	translations: AboutTranslation[];
}

export interface HomeTranslation extends Translation {
	about: string;
}

export interface AboutTranslation extends Translation {
	body: string;
}

export interface HomeInstitution {
	institutions_id: Institution;
}

export interface Schema {
	global: Global;
	home: Home;
	about: About;

	homeTranslations: HomeTranslation[];
	aboutTranslations: AboutTranslation[];
}
