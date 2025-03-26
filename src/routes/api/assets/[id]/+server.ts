import { API_TOKEN } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
	return await fetch(`${PUBLIC_API_URL}/assets/${params.id}`, {
		headers: { Authorization: `Bearer ${API_TOKEN}` }
	});
};
