import { getContact } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const contact = await getContact();
	return { contact };
};
