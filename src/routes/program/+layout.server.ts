import { getActivities, getCourses } from '$lib/server';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const [courses, activities] = await Promise.all([getCourses(), getActivities()]);
	return { courses, activities };
};
