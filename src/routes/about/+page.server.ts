import { getAbout, getPreviousEditions } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [about, previousEditions] = await Promise.all([getAbout(), getPreviousEditions()]);

	return { about, previousEditions };
};
