import { getAbout, getPreviousEditions } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const about = await getAbout();
	const previousEditions = await getPreviousEditions();

	return { about, previousEditions };
};
