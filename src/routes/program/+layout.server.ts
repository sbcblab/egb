import { getCourses, getProgram } from '$lib/server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const program = await getProgram();
	const courses = await getCourses();

	return { program, courses };
};
