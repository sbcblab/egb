<script lang="ts">
	import type { Contact, SocialLinks } from '$lib/types';
	import { MailIcon, PhoneIcon } from 'lucide-svelte';
	import RiGithubFill from '~icons/ri/github-fill';
	import RiInstagramLine from '~icons/ri/instagram-line';
	import RiLinkedinBoxFill from '~icons/ri/linkedin-box-fill';
	import RiTwitterXFill from '~icons/ri/twitter-x-fill';

	let { contact, socialLinks }: { contact: Contact; socialLinks: SocialLinks } = $props();

	const contactItems = [
		{ Icon: MailIcon, value: contact.email },
		{ Icon: PhoneIcon, value: contact.phone }
	];
	const socialItems = [
		{ Icon: RiInstagramLine, href: socialLinks.instagram },
		{ Icon: RiTwitterXFill, href: socialLinks.twitter },
		{ Icon: RiLinkedinBoxFill, href: socialLinks.linkedin },
		{ Icon: RiGithubFill, href: socialLinks.github }
	];
</script>

<footer class=" bg-gray-50 px-8">
	<div class="flex flex-col items-center gap-3 py-8">
		{#each contactItems as { Icon, value }}
			<div class="flex items-center gap-2.5">
				<Icon strokeWidth={1.5} class="size-5 text-gray-400" />
				<span class="text-sm whitespace-nowrap text-gray-500">{value}</span>
			</div>
		{/each}
	</div>
	<hr class="w-full border-gray-200" />
	<div class="flex flex-col items-center gap-8 py-8">
		<div class="flex gap-4">
			{#each socialItems as { Icon, href }}
				<a {href} target="_blank">
					<Icon class="size-7 text-gray-400" />
				</a>
			{/each}
		</div>
		<div class="text-center text-xs font-light text-gray-400">
			Copyright © 2025 SBCB Laboratory. All Rights Reserved.
		</div>
	</div>
</footer>
