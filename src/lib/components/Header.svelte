<script lang="ts">
	import PhDna from '~icons/ph/dna';
	import Nav from './Nav.svelte';
</script>

<header class="flex items-center justify-between px-5 py-6">
	<a href="/" class="flex items-center gap-1 text-sky-600">
		<PhDna class="size-10" />
		<div class="flex flex-col">
			<span class="text-2xl/[1] font-extrabold">EGB</span>
			<span class="text-sm/[1] tracking-[0.31em]">2025</span>
		</div>
	</a>
	<Nav />
</header>
