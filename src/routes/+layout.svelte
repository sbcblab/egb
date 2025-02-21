<script>
	import { MailIcon, PhoneIcon } from 'lucide-svelte';
	import HugeiconsMenu11 from '~icons/hugeicons/menu-11';
	import MdiInstagram from '~icons/mdi/instagram';
	import PhDna from '~icons/ph/dna';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>EGB 2025 - Escola Gaúcha de Bioinformática</title>
</svelte:head>

<header class="absolute top-0 right-0 left-0 flex items-center justify-between p-6">
	<a href="/" class="flex items-center gap-1 text-sky-600">
		<PhDna class="size-10" />
		<div class="flex flex-col">
			<span class="text-2xl/[1] font-extrabold">EGB</span>
			<span class="text-sm/[1] tracking-[0.31em]">2025</span>
		</div>
	</a>
	<button>
		<HugeiconsMenu11 class="text-2xl" />
	</button>
</header>
<main class="grow">
	{@render children?.()}
</main>
<footer class="flex flex-col items-center gap-8 bg-sky-700 p-8 text-center text-white">
	<div class="flex flex-col items-center gap-3">
		<div class="flex items-center gap-2.5">
			<MailIcon class="size-5 text-cyan-400" />
			<span class="text-sm text-cyan-100">egb@inf.ufrgs.br</span>
		</div>
		<div class="flex items-center gap-2">
			<PhoneIcon class="size-5 text-cyan-400" />
			<span class="text-sm text-cyan-100">+55 51 3308-6824</span>
		</div>
	</div>
	<hr class="w-full text-cyan-100/20" />
	<div class="flex justify-center gap-4 text-xl text-cyan-400">
		<a href="https://www.instagram.com/sbcblab/">
			<MdiInstagram />
		</a>
		<a href="https://x.com/sbcblab">
			<RiTwitterXFill />
		</a>
		<a href="https://www.linkedin.com/company/sbcblab">
			<RiLinkedinBoxFill />
		</a>
		<a href="https://github.com/sbcblab">
			<RiGithubFill />
		</a>
	</div>
</footer>

<!-- <nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/about">About</a></li>
		<li><a href="/program">Program</a></li>
		<li><a href="/submission">Submission</a></li>
		<li><a href="/registration">Registration</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav> -->

<style lang="postcss">
	:global(html, body) {
		@apply flex h-full flex-col;
	}
</style>
