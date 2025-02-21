<script lang="ts">
	import { MailIcon, PhoneIcon } from 'lucide-svelte';
	import MdiInstagram from '~icons/mdi/instagram';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';
</script>

<footer class="flex flex-col items-center gap-10 bg-sky-700 px-6 py-10">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-2.5">
			<MailIcon class="size-5 text-cyan-400" />
			<span class="text-sm whitespace-nowrap text-cyan-100">egb@inf.ufrgs.br</span>
		</div>
		<div class="flex items-center gap-2">
			<PhoneIcon class="size-5 text-cyan-400" />
			<span class="text-sm whitespace-nowrap text-cyan-100">+55 51 3308-6824</span>
		</div>
	</div>
	<div class="flex flex-wrap justify-end gap-4 text-xl text-cyan-400">
		<a href="https://www.instagram.com/sbcblab/" target="_blank">
			<MdiInstagram />
		</a>
		<a href="https://x.com/sbcblab" target="_blank">
			<RiTwitterXFill />
		</a>
		<a href="https://www.linkedin.com/company/sbcblab" target="_blank">
			<RiLinkedinBoxFill />
		</a>
		<a href="https://github.com/sbcblab" target="_blank">
			<RiGithubFill />
		</a>
	</div>
</footer>
