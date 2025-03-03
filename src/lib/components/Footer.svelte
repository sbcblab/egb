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

<footer class="px-6">
	<hr class="border-gray-200" />
	<div class="flex flex-col items-center gap-8 py-12">
		<div class="flex gap-6">
			{#each socialItems as { Icon, href }}
				<a {href} target="_blank">
					<Icon class="size-7 text-gray-500" />
				</a>
			{/each}
		</div>
		<div class="text-center text-sm text-gray-400">
			Copyright © 2025 SBCB Laboratory. All Rights Reserved.
		</div>
	</div>
</footer>
