import { getRegistration } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const registration = await getRegistration();
	return { registration };
};
