import type { Schedule } from './types';

export const title = 'EGB 2025';

export const contact = { email: 'egb@inf.ufrgs.br', phone: '+55 51 3308-6824' };

export const socialLinks = {
	instagram: 'https://www.instagram.com/sbcblab/',
	twitter: 'https://x.com/sbcblab',
	linkedin: 'https://www.linkedin.com/company/sbcblab',
	github: 'https://github.com/sbcblab'
};

export const speakers = [
	{
		name: 'Leonardo L. Dorneles',
		link: 'http://lattes.cnpq.br/6036582565120593',
		country: { name: 'Brazil', alpha2: 'br' },
		institution: { name: 'UFRGS', link: 'http://www.ufrgs.br/ufrgs/inicial' },
		pictureUrl: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K8471008E6'
	},
	{
		name: 'Leonardo A. Carbonera',
		link: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4445923J3',
		country: { name: 'Brazil', alpha2: 'br' },
		institution: { name: 'HMV', link: 'https://www.hospitalmoinhos.org.br/institucional' },
		pictureUrl: 'https://sbcb.inf.ufrgs.br/strapi/uploads/lcarbonera_65ad0aa5c2.png'
	},
	{
		name: 'Rafael Stubs Parpinelli',
		link: 'http://lattes.cnpq.br/4456007001373501',
		country: { name: 'Brazil', alpha2: 'br' },
		institution: { name: 'UDESC', link: 'https://www.udesc.br/' },
		pictureUrl: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4700260H1'
	}
];

export const committee = [
	{
		name: 'Márcio Dorn',
		link: 'http://lattes.cnpq.br/6355224981962273',
		country: { name: 'Brazil', alpha2: 'br' },
		institution: { name: 'UFRGS', link: 'http://www.ufrgs.br/ufrgs/inicial' },
		pictureUrl: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4130395T5'
	},
	{
		name: 'Juliana da Silva Bernardes',
		link: 'http://lattes.cnpq.br/5236549058240153',
		country: { name: 'France', alpha2: 'fr' },
		institution: { name: 'SU', link: 'https://www.sorbonne-universite.fr/' },
		pictureUrl: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4702214Y4'
	},
	{
		name: 'Mario Inostroza-Ponta',
		link: 'http://lattes.cnpq.br/9196917756710970',
		country: { name: 'Chile', alpha2: 'cl' },
		institution: { name: 'USACH', link: 'https://www.usach.cl/en' },
		pictureUrl: 'http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4337230Z6'
	}
];

export const schedule: Schedule = [
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
				title: 'Palestra Aula \u2013 I',
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
				title: 'Palestra Aula \u2013 II',
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
				title: 'Palestra Aula \u2013 III',
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
				title: 'Palestra Aula \u2013 IV',
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
				title: 'Palestra Aula \u2013 V',
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
				title: 'Palestra Aula \u2013 VI',
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
				title: 'Palestra Aula \u2013 VII',
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
				title: 'Palestra Aula \u2013 VIII',
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
				title: 'Palestra Aula \u2013 IX',
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
				title: 'Confraternização por Adesão \u2013 Aventura Gastronomia e Diversão',
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
				title: 'Palestra Aula \u2013 X',
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
				title: 'Palestra Aula \u2013 XI',
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
				title: 'Palestra Aula \u2013 XII',
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
				title: 'Palestra Aula \u2013 XIII',
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
				title: 'Confraternização por Adesão \u2013 4Beer Bela Vista',
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
				title: 'Palestra Aula \u2013 XIV',
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
				title: 'Palestra Aula \u2013 XV',
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
				title: 'Palestra Aula \u2013 XVI',
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
				title: 'Palestra Aula \u2013 XVII',
				startTime: '17:30',
				endTime: '18:30',
				people: []
			},
			{
				title: 'Confraternização por Adesão \u2013 Boteco Pedrini Protásio Alves',
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
				title: 'Palestra Aula \u2013 XVIII',
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
				title: 'Mesa Redonda \u2013 Regional Sul AB3C',
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
				title: 'Palestra Aula \u2013 XXI',
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
				title: 'Palestra Aula \u2013 XXII',
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
				title: 'Palestra Aula \u2013 XXIII',
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
