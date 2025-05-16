<script lang="ts">
	import type { Global, LanguageCode } from '$lib/types';
	import { format } from 'date-fns';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';

	let { global, lang }: { global: Global; lang: LanguageCode } = $props();

	const socialItems = [
		{ title: 'Instagram', Icon: RiInstagramLine, href: global.instagramLink },
		{ title: 'Twitter', Icon: RiTwitterXFill, href: global.twitterLink },
		{ title: 'LinkedIn', Icon: RiLinkedinBoxFill, href: global.linkedinLink },
		{ title: 'GitHub', Icon: RiGithubFill, href: global.githubLink }
	];

	const translations = {
		'en-US': { rights: 'All Rights Reserved.' },
		'pt-BR': { rights: 'Todos os direitos reservados.' }
	};
</script>

<footer class="px-6">
	<hr class="border-slate-200" />
	<div class="flex flex-col items-center gap-6 pt-10 pb-12">
		<div class="flex gap-2">
			{#each socialItems.filter((i) => i.href) as { Icon, href, title }}
				<a {href} target="_blank" {title} class="p-2 text-slate-500 hover:text-slate-950">
					<Icon class="text-[1.25rem]" />
				</a>
			{/each}
		</div>
		<div class="text-center text-sm text-slate-400">
			Copyright © {format(global.eventStartDate, 'y')} SBCB Laboratory. {translations[lang].rights}
		</div>
	</div>
</footer>
