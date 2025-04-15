import { getSubmissions } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const submissions = await getSubmissions();
	return { submissions };
};
