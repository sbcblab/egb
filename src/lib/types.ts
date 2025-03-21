export type LanguageCode = 'en-US' | 'pt-BR';

export interface Translation {
	languages_code: LanguageCode;
}

export interface HomeTranslation extends Translation {
	about: string;
}

export interface AboutTranslation extends Translation {
	body: string;
}

export interface CountriesTranslation extends Translation {
	name: string;
}

export interface Image {
	id: string;
	title: string;
}

export interface Institution {
	name: string;
	link: string | null;
	logo: string | null;
}

export interface Country {
	alpha2: string;
	translations: CountriesTranslation[];
}

export interface Person {
	name: string;
	picture: Image;
	country: Country;
	institution: Institution;
	link: string | null;
}

export interface HomeInstitution {
	institutions_id: Institution;
}

export interface AboutPerson {
	people_id: Person;
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

export interface Home {
	translations: HomeTranslation[];
	aboutImage: string;
	organizers: HomeInstitution[];
	sponsors: HomeInstitution[];
}

export interface About {
	translations: AboutTranslation[];
	committee: AboutPerson[];
}

export interface Schema {
	global: Global;
	home: Home;
	about: About;

	homeTranslations: HomeTranslation[];
	aboutTranslations: AboutTranslation[];
}
