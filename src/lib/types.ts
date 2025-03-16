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

export interface Home {
	translations: HomeTranslation[];
	aboutImage: string;
}

export interface HomeTranslation extends Translation {
	about: string;
}

export interface Schema {
	global: Global;
	home: Home;

	homeTranslations: HomeTranslation[];
}
