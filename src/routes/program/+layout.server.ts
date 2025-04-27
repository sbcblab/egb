import { getActivities, getCourses, getProgram } from '$lib/server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const [courses, activities, program] = await Promise.all([
		getCourses(),
		getActivities(),
		getProgram()
	]);
	return { courses, activities, program };
};
