<script>
	import { ArrowLeftIcon } from 'lucide-svelte';
</script>

<div class="mb-8 flex grow flex-col items-center justify-center px-6 pt-24 pb-40 text-center">
	<p class="text-lg font-semibold text-gray-700">404</p>
	<h1 class="mt-3 mb-7 text-5xl font-semibold tracking-tight">Page not found.</h1>
	<p class="mb-14 text-lg text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
	<a href="/" class="flex items-center gap-1.5 font-semibold text-gray-700 md:hover:opacity-60">
		<ArrowLeftIcon strokeWidth={2.5} class="size-3.5" />
		<span>Back to home</span>
	</a>
</div>
