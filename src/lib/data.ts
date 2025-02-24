import { MailIcon, PhoneIcon } from 'lucide-svelte';
import RiGithubFill from '~icons/ri/github-fill';
import RiInstagramLine from '~icons/ri/instagram-line';
import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
import RiTwitterXFill from '~icons/ri/twitter-x-fill';

export const title = 'EGB 2025';

export const contactItems = [
	{ Icon: MailIcon, value: 'egb@inf.ufrgs.br' },
	{ Icon: PhoneIcon, value: '+55 51 3308-6824' }
];

export const socialItems = [
	{ Icon: RiInstagramLine, href: 'https://www.instagram.com/sbcblab/' },
	{ Icon: RiGithubFill, href: 'https://x.com/sbcblab' },
	{ Icon: RiLinkedinBoxFill, href: 'https://www.linkedin.com/company/sbcblab' },
	{ Icon: RiTwitterXFill, href: 'https://github.com/sbcblab' }
];

export const schedule = [
	{
		day: 'Monday, July 21',
		activities: [
			{
				title: 'Credenciamento e Entrega de Material',
				startTime: '08:30',
				endTime: '08:50',
				people: []
			},
			{
				title: 'Abertura',
				startTime: '09:00',
				endTime: '09:30',
				people: []
			},
			{
				title: 'Palestra Aula - I',
				startTime: '09:30',
				endTime: '10:30',
				people: [
					{
						name: 'Marilene Henning Vainstein',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UFRGS', link: 'http://www.ufrgs.br/ufrgs/inicial' }
					}
				]
			},
			{
				title: 'Coffee Break + Pôster',
				startTime: '10:30',
				endTime: '11:00',
				people: []
			},
			{
				title: 'Palestra Aula - II',
				startTime: '11:00',
				endTime: '12:00',
				people: [
					{
						name: 'Marisa Farber',
						country: { name: 'Argentina', alpha2: 'ar' },
						institution: { name: 'INTA', link: 'https://www.argentina.gob.ar/inta' }
					}
				]
			},
			{
				title: 'Almoço',
				startTime: '12:00',
				endTime: '14:00',
				people: []
			},
			{
				title: 'Palestra Aula - III',
				startTime: '14:00',
				endTime: '15:00',
				people: [
					{
						name: 'Rita de Cassia Aleixo Tostes Passaglia',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'FMRP', link: 'https://www.fmrp.usp.br/pb/' }
					}
				]
			},
			{
				title: 'Palestra Aula - IV',
				startTime: '15:00',
				endTime: '16:00',
				people: [
					{
						name: 'Maria Cátira Bortolini',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UFRGS', link: 'http://www.ufrgs.br/ufrgs/inicial' }
					}
				]
			},
			{
				title: 'Palestra Aula - V',
				startTime: '16:00',
				endTime: '17:00',
				people: [
					{
						name: 'Fernanda Morone',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'PUCRS', link: 'https://portal.pucrs.br/ensino-e-pesquisa/' }
					}
				]
			},
			{
				title: 'Coffee Break + Pôster',
				startTime: '17:00',
				endTime: '18:00',
				people: []
			}
		]
	},
	{
		day: 'Tuesday, July 22',
		activities: [
			{
				title: 'Fundamentos de Edição Gênica: CRISPR-CAS9',
				startTime: '09:00',
				endTime: '10:30',
				people: [
					{
						name: 'Esteban Gonzalez',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'INSCER', link: 'https://inscer.pucrs.br/' }
					}
				]
			},
			{
				title: 'Coffee Break + Pôster',
				startTime: '10:30',
				endTime: '11:00',
				people: []
			},
			{
				title: 'Fundamentos de Edição Gênica: CRISPR-CAS9',
				startTime: '11:00',
				endTime: '12:30',
				people: [
					{
						name: 'Esteban Gonzalez',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'INSCER', link: 'https://inscer.pucrs.br/' }
					}
				]
			},
			{
				title: 'Almoço',
				startTime: '12:00',
				endTime: '14:00',
				people: []
			},
			{
				title: 'Palestra Aula - VI',
				startTime: '14:00',
				endTime: '15:00',
				people: [
					{
						name: 'José Eduardo Vargas',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UFPR', link: 'https://ufpr.br/' }
					}
				]
			},
			{
				title: 'Palestra Aula - VII',
				startTime: '15:00',
				endTime: '16:00',
				people: [
					{
						name: 'Eduardo Eizirik',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'PUCRS', link: 'https://portal.pucrs.br/ensino-e-pesquisa/' }
					}
				]
			},
			{
				title: 'Coffee Break + Pôster',
				startTime: '16:00',
				endTime: '16:30',
				people: []
			},
			{
				title: 'Palestra Aula - VIII',
				startTime: '16:30',
				endTime: '17:30',
				people: [
					{
						name: 'Glauber Wagner',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UFSC', link: 'https://ufsc.br/' }
					}
				]
			},
			{
				title: 'Palestra Aula - IX',
				startTime: '17:30',
				endTime: '18:30',
				people: [
					{
						name: 'Marta Giovanetti',
						country: { name: 'Italy', alpha2: 'it' },
						institution: { name: 'UCBM', link: 'https://www.unicampus.it/en/' }
					}
				]
			},
			{
				title: 'Confraternização por Adesão - Aventura Gastronomia e Diversão',
				startTime: '19:00',
				endTime: '21:00',
				people: []
			}
		]
	},
	{
		day: 'Wednesday, July 23',
		activities: [
			{
				title: 'Fundamentos de Edição Gênica: CRISPR-CAS9',
				startTime: '09:00',
				endTime: '10:30',
				people: [
					{
						name: 'Esteban Gonzalez',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'INSCER', link: 'https://inscer.pucrs.br/' }
					}
				]
			},
			{
				title: 'Coffee Break + Pôster',
				startTime: '10:30',
				endTime: '11:00',
				people: []
			},
			{
				title: 'Fundamentos de Edição Gênica: CRISPR-CAS9',
				startTime: '11:00',
				endTime: '12:30',
				people: [
					{
						name: 'Esteban Gonzalez',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'INSCER', link: 'https://inscer.pucrs.br/' }
					}
				]
			},
			{
				title: 'Almoço',
				startTime: '12:00',
				endTime: '14:00',
				people: []
			},
			{
				title: 'Palestra Aula - X',
				startTime: '14:00',
				endTime: '15:00',
				people: [
					{
						name: 'Hugo Verli',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UFRGS', link: 'http://www.ufrgs.br/ufrgs/inicial' }
					}
				]
			},
			{
				title: 'Palestra Aula - XI',
				startTime: '15:00',
				endTime: '16:00',
				people: [
					{
						name: 'Luis Fernando Saraiva Macedo Timmers',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UNIVATES', link: 'https://www.univates.br/' }
					}
				]
			},
			{
				title: 'Coffee Break + Pôster',
				startTime: '16:00',
				endTime: '16:30',
				people: []
			},
			{
				title: 'Palestra Aula - XII',
				startTime: '16:30',
				endTime: '17:30',
				people: [
					{
						name: 'Dennis Maletich Junqueira',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UFSM', link: 'https://www.ufsm.br/' }
					}
				]
			},
			{
				title: 'Palestra Aula - XIII',
				startTime: '17:30',
				endTime: '18:30',
				people: [
					{
						name: 'Maurício Menegatti Rigo',
						country: { name: 'Italy', alpha2: 'it' },
						institution: { name: 'UFRGS', link: 'http://www.ufrgs.br/ufrgs/inicial' }
					}
				]
			},
			{
				title: 'Confraternização por Adesão - 4Beer Bela Vista',
				startTime: '19:00',
				endTime: '21:00',
				people: []
			}
		]
	},
	{
		day: 'Thursday, July 24',
		activities: [
			{
				title: 'IA + Deep Learning + Machine Learning',
				startTime: '09:00',
				endTime: '10:30',
				people: []
			},
			{
				title: 'Coffee Break',
				startTime: '10:30',
				endTime: '11:00',
				people: []
			},
			{
				title: 'IA + Deep Learning + Machine Learning',
				startTime: '11:00',
				endTime: '12:30',
				people: []
			},
			{
				title: 'Almoço',
				startTime: '12:00',
				endTime: '14:00',
				people: []
			},
			{
				title: 'Palestra Aula - XIV',
				startTime: '14:00',
				endTime: '15:00',
				people: [
					{
						name: 'Thiago Wendt Viola',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'PUCRS', link: 'https://portal.pucrs.br/ensino-e-pesquisa/' }
					}
				]
			},
			{
				title: 'Palestra Aula - XV',
				startTime: '15:00',
				endTime: '16:00',
				people: [
					{
						name: 'Leonardo Carbonera',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'HMV', link: 'https://www.hospitalmoinhos.org.br/institucional' }
					},
					{
						name: 'Ana Claudia de Souza',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'HMV', link: 'https://www.hospitalmoinhos.org.br/institucional' }
					}
				]
			},
			{
				title: 'Coffee Break + Pôster',
				startTime: '16:00',
				endTime: '16:30',
				people: []
			},
			{
				title: 'Palestra Aula - XVI',
				startTime: '16:30',
				endTime: '17:30',
				people: [
					{
						name: 'Mario Inostroza-Ponta',
						country: { name: 'Chile', alpha2: 'cl' },
						institution: { name: 'USACH', link: 'https://www.usach.cl/en' }
					}
				]
			},
			{
				title: 'Palestra Aula - XVII',
				startTime: '17:30',
				endTime: '18:30',
				people: []
			},
			{
				title: 'Confraternização por Adesão - Boteco Pedrini Protásio Alves',
				startTime: '19:00',
				endTime: '21:00',
				people: []
			}
		]
	},
	{
		day: 'Friday, July 25',
		activities: [
			{
				title: 'Palestra Aula - XVIII',
				startTime: '09:00',
				endTime: '10:00',
				people: [
					{
						name: 'Ana Carolina Ramos Guimarães',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'FIOCRUZ', link: 'https://portal.fiocruz.br/' }
					}
				]
			},
			{
				title: 'Coffee Break',
				startTime: '10:00',
				endTime: '10:30',
				people: []
			},
			{
				title: 'Mesa Redonda - Regional Sul AB3C',
				startTime: '10:30',
				endTime: '11:30',
				people: []
			},
			{
				title: 'Bioinformática + Inovação + Empreendedorismo',
				startTime: '11:30',
				endTime: '12:30',
				people: [
					{
						name: 'Adriana Seixas',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UFCSPA', link: 'https://ufcspa.edu.br/' }
					}
				]
			},
			{
				title: 'Almoço',
				startTime: '12:00',
				endTime: '14:00',
				people: []
			},
			{
				title: 'Palestra Aula - XXI',
				startTime: '14:00',
				endTime: '15:00',
				people: [
					{
						name: 'Mauro Castro',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: { name: 'UFPR', link: 'https://ufpr.br/' }
					}
				]
			},
			{
				title: 'Palestra Aula - XXII',
				startTime: '15:00',
				endTime: '16:00',
				people: [
					{
						name: 'Daniel Martins de Souza',
						country: { name: 'Brazil', alpha2: 'br' },
						institution: {
							name: 'UNICAMP',
							link: 'https://unicamp.br/'
						}
					}
				]
			},
			{
				title: 'Coffee Break + Pôster',
				startTime: '16:00',
				endTime: '16:30',
				people: []
			},
			{
				title: 'Palestra Aula - XXIII',
				startTime: '16:30',
				endTime: '17:30',
				people: []
			},
			{
				title: 'Encerramento',
				startTime: '17:30',
				endTime: '17:45',
				people: []
			}
		]
	}
];
