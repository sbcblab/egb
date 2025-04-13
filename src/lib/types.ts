export interface Schema {
	global: Global;
	home: Home;
	homeTranslations: HomeTranslation[];
	homeInstitutions: HomeInstitution[];
	about: About;
	aboutTranslations: AboutTranslation[];
	aboutPeople: AboutPerson[];
	program: Program;
	programPeople: ProgramPerson[];
	registration: Registration;
	registrationTranslations: RegistrationTranslation[];
	institutions: Institution[];
	people: Person[];
	countries: Country[];
	countriesTranslations: CountriesTranslation[];
	previousEditions: PreviousEdition[];
	previousEditionsTranslations: PreviousEditionsTranslation[];
	courses: Course[];
	courseTranslations: CourseTranslation[];
	coursePeople: CoursePerson[];
	activities: Activity[];
	activityTranslations: ActivityTranslation[];
	activityPeople: ActivityPerson[];
	directusFiles: Image[];
}

export interface Global {
	eventStartDate: string | Date;
	eventEndDate: string | Date;
	coursesStartDate: string | Date;
	coursesEndDate: string | Date;
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

export interface HomeTranslation extends Translation {
	about: string;
}

export interface HomeInstitution {
	institutions_id: Institution;
}

export interface About {
	translations: AboutTranslation[];
	image: Image | null;
	committee: AboutPerson[];
}

export interface AboutTranslation extends Translation {
	body: string;
}

export interface Program {
	speakers: ProgramPerson[];
}

export interface ProgramPerson {
	people_id: Person;
}

export interface Registration {
	undergraduateStudent: number | null;
	graduateStudent: number | null;
	researcher: number | null;
	industryProfessional: number | null;
	courseCategories: CourseCategory[];
	registrationLink: string | null;
	translations: RegistrationTranslation[];
	howToGetToPortoAlegre: string | null;
	nearbyHotels: string | null;
	localTransport: string | null;
	whatToDoInPortoAlegre: string | null;
}

export interface RegistrationTranslation extends Translation {
	faq: FaqItem[];
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
	links: PersonLink[];
	translations: PersonTranslation[];
}

export interface PersonTranslation extends Translation {
	summary: string | null;
}

export interface AboutPerson {
	people_id: Person;
}

export interface Country {
	alpha2: string;
	translations: CountriesTranslation[];
}

export interface CountriesTranslation extends Translation {
	name: string;
}

export interface PreviousEdition {
	title: string;
	year: number;
	translations: PreviousEditionsTranslation[];
	image: Image;
}

export interface PreviousEditionsTranslation extends Translation {
	description: string;
}

export interface Course {
	slug: string;
	duration: number;
	level: CourseLevel;
	instructors: CoursePerson[];
	references: Reference[];
	translations: CourseTranslation[];
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

export interface CoursePerson {
	people_id: Person;
}

export interface Activity {
	slug: string | null;
	type: string | null;
	translations: ActivityTranslation[];
	date: string | null;
	startTime: string | null;
	endTime: string | null;
	locationLine1: string | null;
	locationLine2: string | null;
	speakers: ActivityPerson[];
}

export interface ActivityTranslation extends Translation {
	title: string;
	topics: string[];
	summary: string | null;
}

export interface ActivityPerson {
	people_id: Person;
}

export interface Translation {
	languages_code: LanguageCode;
}

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

export type PersonLink = {
	type: 'website' | 'lattes' | 'linkedin' | 'orcid' | 'scholar' | 'researchgate' | 'github';
	link: string;
};

export type CourseCategory = {
	duration: number;
	fee: number;
};

export type FaqItem = {
	question: string;
	answer: string;
};
