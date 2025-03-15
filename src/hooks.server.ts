import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const acceptLanguage = event.request.headers.get('accept-language') ?? 'en-US';
	const preferredLanguage = acceptLanguage.split(',')[0];

	event.locals.lang = preferredLanguage.startsWith('pt') ? 'pt-BR' : 'en-US';

	return resolve(event);
};
