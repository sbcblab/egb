import { getAbout, getHome, getPreviousEditions } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const home = await getHome();
	const about = await getAbout();
	const previousEditions = await getPreviousEditions();

	return { home, about, previousEditions };
};
