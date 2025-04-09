import { getActivities, getCourses, getProgram } from '$lib/server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const [program, courses, activities] = await Promise.all([
		getProgram(),
		getCourses(),
		getActivities()
	]);

	return { program, courses, activities };
};
