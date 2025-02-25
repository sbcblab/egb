<script>
	import { ArrowLeftIcon } from 'lucide-svelte';
</script>

<div class="mb-8 flex grow flex-col items-center justify-center px-6 pt-24 pb-40 text-center">
	<p class="font-semibold text-sky-500">404</p>
	<h1 class="mt-4 mb-6 text-5xl font-semibold tracking-tight text-gray-950">Page not found.</h1>
	<p class="mb-10 text-lg text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
	<a href="/" class="flex items-center gap-1.5 text-sm font-semibold text-sky-500">
		<ArrowLeftIcon strokeWidth={2.5} class="size-3.5" />
		<span>Back to home</span>
	</a>
</div>
