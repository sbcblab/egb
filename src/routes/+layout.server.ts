import { getGlobal } from '$lib/server';
import type { LanguageCode } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const lang = locals.lang as LanguageCode;
	const global = await getGlobal();

	return { lang, global };
};
