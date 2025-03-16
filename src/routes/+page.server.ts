import { getHome } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const home = await getHome();
	return { home };
};
