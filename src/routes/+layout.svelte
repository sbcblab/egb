<script>
	import MailIcon from '~icons/fa6-solid/envelope';
	import PhoneIcon from '~icons/fa6-solid/phone';
	import HugeiconsMenu11 from '~icons/hugeicons/menu-11';
	import PhDna from '~icons/ph/dna';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>EGB 2025 - Escola Gaúcha de Bioinformática</title>
</svelte:head>

<header class="top-0 left-0 right-0 flex justify-between p-6 absolute items-center">
	<a href="/" class="flex gap-1 items-center text-sky-600">
		<PhDna class="size-10" />
		<div class="flex flex-col">
			<span class="font-extrabold text-2xl/[1]">EGB</span>
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
<footer class="py-8 px-6 bg-sky-700 text-white flex flex-col items-center gap-8 text-center">
	<div class="flex flex-col gap-4">
		<div class="flex gap-3 items-center">
			<MailIcon class="text-sky-500 " />
			<span class="text-white text-sm">egb@inf.ufrgs.br</span>
		</div>
		<div class="flex gap-2.5 items-center">
			<PhoneIcon class="text-sky-500 " />
			<span class="text-white text-sm">+55 51 3308-6824</span>
		</div>
	</div>
	<hr class="w-full text-white/15" />
	<div class="flex gap-4 text-xl text-sky-300">
		<a href="https://www.instagram.com/sbcblab/"><RiInstagramLine class="size-6" /></a>
		<a href="https://x.com/sbcblab"><RiTwitterXFill /></a>
		<a href="https://www.linkedin.com/company/sbcblab"><RiLinkedinBoxFill /></a>
		<a href="https://github.com/sbcblab"><RiGithubFill /></a>
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
		@apply h-full flex flex-col;
	}
</style>
