export interface Schema {
	global: Global;
	about: About;
	aboutPeople: AboutPerson[];
	aboutTranslations: AboutTranslation[];
	aboutInstitutions: AboutInstitution[];
	program: Program;
	programPeople: ProgramPerson[];
	submissions: Submissions;
	registration: Registration;
	registrationTranslations: RegistrationTranslation[];
	activities: Activity[];
	activityTranslations: ActivityTranslation[];
	activityPeople: ActivityPerson[];
	courses: Course[];
	courseTranslations: CourseTranslation[];
	coursePeople: CoursePerson[];
	people: Person[];
	institutions: Institution[];
	countries: Country[];
	countriesTranslations: CountriesTranslation[];
	previousEditions: PreviousEdition[];
	previousEditionsTranslations: PreviousEditionsTranslation[];
	directusFiles: Image[];
}

export interface Global {
	eventStartDate: string;
	eventEndDate: string;
	coursesStartDate: string;
	coursesEndDate: string;
	email: string;
	phone: string;
	instagramLink: string;
	twitterLink: string;
	linkedinLink: string;
	githubLink: string;
}

export interface About {
	translations: AboutTranslation[];
	whatIsEgbImage: Image | null;
	theVenueImage: Image | null;
	committee: AboutPerson[];
	organizers: AboutInstitution[];
	sponsors: AboutInstitution[];
}

export interface AboutTranslation extends Translation {
	whatIsEgb: string | null;
	theVenue: string | null;
}

export interface AboutInstitution {
	institutions_id: Institution;
}

export interface Program {
	speakers: ProgramPerson[];
}

export interface ProgramPerson {
	people_id: Person;
}

export interface Submissions {
	lattesTemplate: string | null;
	wordTemplate: string | null;
	submitLink: string | null;
	submissionStart: string | null;
	submissionDeadline: string | null;
	acceptanceNotification: string | null;
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
	schedule: CourseScheduleItem[] | null;
}

export interface CourseTranslation extends Translation {
	title: string | null;
	keywords: string[];
	summary: string | null;
	objectives: string | null;
	topics: Topic[];
	methods: string | null;
	prerequisites: string | null;
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

export type CourseScheduleItem = {
	date: string;
	startTime: string;
	endTime: string;
};
