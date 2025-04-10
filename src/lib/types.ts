export type LanguageCode = 'en-US' | 'pt-BR';

export type CourseLevel = 1 | 2 | 3;

export type Reference = {
	title: string;
	author: string;
	link: string | null;
};

export type Image = {
	id: string;
	title: string;
};

export type Topic = {
	topic: string;
};

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
	organizers: HomeInstitution[];
	sponsors: HomeInstitution[];
}

export interface About {
	translations: AboutTranslation[];
	image: Image | null;
	committee: AboutPerson[];
}

export interface Program {
	speakers: ProgramPerson[];
}

export interface Institution {
	name: string;
	link: string | null;
	logo: string | null;
}

export interface Person {
	name: string;
	picture: Image;
	country: Country;
	institution: Institution;
	link: string | null;
}

export interface Country {
	alpha2: string;
	translations: CountriesTranslation[];
}

export interface PreviousEdition {
	title: string;
	year: number;
	translations: PreviousEditionsTranslation[];
	image: Image;
}

export interface Course {
	slug: string;
	duration: number;
	level: CourseLevel;
	instructors: CoursePerson[];
	references: Reference[];
	translations: CourseTranslation[];
}

export interface Activity {
	translations: ActivityTranslation[];
	date: string | null;
	startTime: string | null;
	endTime: string | null;
	speakers: ActivityPerson[];
	clickable: boolean;
}

export interface HomeInstitution {
	institutions_id: Institution;
}

export interface AboutPerson {
	people_id: Person;
}

export interface ProgramPerson {
	people_id: Person;
}

export interface CoursePerson {
	people_id: Person;
}

export interface ActivityPerson {
	people_id: Person;
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

export interface PreviousEditionsTranslation extends Translation {
	description: string;
}

export interface CourseTranslation extends Translation {
	title: string;
	keywords: string[];
	summary: string;
	objectives: string;
	topics: Topic[];
	methods: string;
	prerequisites: string;
}

export interface ActivityTranslation extends Translation {
	title: string;
}

export interface Schema {
	global: Global;
	home: Home;
	about: About;
	program: Program;
	institutions: Institution[];
	people: Person[];
	countries: Country[];
	previousEditions: PreviousEdition[];
	courses: Course[];
	activities: Activity[];

	homeInstitutions: HomeInstitution[];
	aboutPeople: AboutPerson[];
	programPeople: ProgramPerson[];
	coursePeople: CoursePerson[];
	activityPeople: ActivityPerson[];

	homeTranslations: HomeTranslation[];
	aboutTranslations: AboutTranslation[];
	countriesTranslations: CountriesTranslation[];
	previousEditionsTranslations: PreviousEditionsTranslation[];
	courseTranslations: CourseTranslation[];
	activityTranslations: ActivityTranslation[];

	directusFiles: Image[];
}
