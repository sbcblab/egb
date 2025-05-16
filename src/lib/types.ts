export interface Schema {
	global: Global;
	about: About;
	aboutPeople: AboutPerson[];
	aboutTranslations: AboutTranslation[];
	aboutInstitutions: AboutInstitution[];
	program: Program;
	programTranslations: ProgramTranslation[];
	submissions: Submissions;
	submissionsTranslations: SubmissionsTranslation[];
	registration: Registration;
	registrationTranslations: RegistrationTranslation[];
	contact: Contact;
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
	eventLocation: string | null;
	instagramLink: string | null;
	twitterLink: string | null;
	linkedinLink: string | null;
	githubLink: string | null;
}

export interface About {
	bannerImage: Image | null;
	translations: AboutTranslation[];
	whatIsEgbImage1: Image | null;
	whatIsEgbImage2: Image | null;
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
	bannerImage: Image | null;
	translations: ProgramTranslation[];
}

export interface ProgramTranslation extends Translation {
	activitiesSubtitle: string | null;
	coursesSubtitle: string | null;
}

export interface Submissions {
	bannerImage: Image | null;
	translations: SubmissionsTranslation[];
	lattesTemplate: string | null;
	wordTemplate: string | null;
	submitLink: string | null;
	submissionStart: string | null;
	submissionDeadline: string | null;
	reviewEnd: string | null;
	acceptanceNotification: string | null;
}

export interface SubmissionsTranslation extends Translation {
	overview: string | null;
	abstractGuidelines: { item: string }[];
	posterGuidelines: { item: string }[];
}

export interface Registration {
	bannerImage: Image | null;
	translations: RegistrationTranslation[];
	courseFees: CourseFee[];
	registrationLink: string | null;
	registrationStartDate: string | null;
	registrationEndDate: string | null;
	howToGetToPortoAlegre: string | null;
	nearbyHotels: string | null;
	localTransport: string | null;
	whatToDoInPortoAlegre: string | null;
}

export interface Contact {
	bannerImage: Image | null;
	email: string | null;
	phone: string | null;
	contactLocation: string | null;
}

export interface RegistrationTranslation extends Translation {
	eventFeesTitle: string;
	eventFeesSubtitle: string | null;
	courseFeesTitle: string;
	courseFeesSubtitle: string | null;
	eventFees: EventFee[];
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
	type: CourseType;
	level: CourseLevel;
	language: CourseLanguage;
	instructors: CoursePerson[];
	translations: CourseTranslation[];
	references: Reference[] | null;
	schedule: CourseScheduleItem[] | null;
}

export interface CourseTranslation extends Translation {
	title: string | null;
	keywords: string[];
	summary: string | null;
	objectives: string | null;
	topics: Topic[] | null;
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

export type CourseType = 1 | 2 | 3;

export type CourseLanguage = 'BR' | 'US' | 'ES';

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

export type CourseFee = {
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

export type EventFee = {
	category: string;
	fee: number;
};
