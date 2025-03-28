import { getCourses, getProgram } from '$lib/server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const program = await getProgram();
	const courses = await getCourses();
	return { program, courses };
};
