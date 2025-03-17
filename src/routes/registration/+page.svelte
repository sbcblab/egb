<script lang="ts">
	import { format } from 'date-fns';

	let { data } = $props();
	let { lang, global } = data;

	const translations = {
		'en-US': { pageTitle: 'Registration' },
		'pt-BR': { pageTitle: 'Inscrição' }
	};
</script>

<svelte:head>
	<title>EGB {format(global.startDate, 'y')} &ndash; {translations[lang].pageTitle}</title>
</svelte:head>
