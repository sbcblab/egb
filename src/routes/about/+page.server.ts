import { getAbout } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const about = await getAbout();
	return { about };
};
