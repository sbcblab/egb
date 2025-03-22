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
	<hr class="border-gray-200" />
	<div class="flex flex-col items-center gap-8 py-12">
		<div class="flex gap-6">
			{#each socialItems as { Icon, href, title }}
				<a {href} target="_blank" {title} class="text-gray-500 md:hover:opacity-60">
					<Icon font-size={24} />
				</a>
			{/each}
		</div>
		<div class="text-center text-sm text-gray-400">
			Copyright © {format(global.startDate, 'y')} SBCB Laboratory. {translations[lang].rights}
		</div>
	</div>
</footer>
