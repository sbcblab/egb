<script lang="ts">
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global } = data;

	const translations = {
		'en-US': { pageTitle: 'Program' },
		'pt-BR': { pageTitle: 'Programa' }
	};
</script>

<svelte:head>
	<title>EGB {format(global.startDate, 'y')} &ndash; {translations[lang].pageTitle}</title>
</svelte:head>
