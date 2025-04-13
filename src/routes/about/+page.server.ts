import { getAbout, getHome, getPreviousEditions } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [home, about, previousEditions] = await Promise.all([
		getHome(),
		getAbout(),
		getPreviousEditions()
	]);

	return { home, about, previousEditions };
};
