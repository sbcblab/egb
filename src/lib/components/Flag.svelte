<script lang="ts">
	import { Ar, Br, Cl, It } from 'svelte-flag-icons';

	let { alpha2, class: class_ }: { alpha2: string; class: string } = $props();

	const iconMap: { [alpha2: string]: any } = {
		br: Br,
		ar: Ar,
		it: It,
		cl: Cl
	};

	let Icon = $derived(iconMap[alpha2]);
</script>

<Icon class={class_} />
