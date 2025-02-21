import { API_TOKEN } from '$env/static/private';
import { PUBLIC_API_URL } from '$env/static/public';
import type { Schema } from '$lib/types';
import { createDirectus, rest, staticToken } from '@directus/sdk';

export const client = createDirectus<Schema>(PUBLIC_API_URL)
	.with(staticToken(API_TOKEN))
	.with(rest());
