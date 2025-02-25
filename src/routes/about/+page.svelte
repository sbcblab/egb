<script lang="ts">
	import { speakers, title } from '$lib/data';
</script>

<svelte:head>
	<title>About &ndash; {title}</title>
</svelte:head>

<div class="mt-4 mb-16">
	<h1 class="mx-4 mb-6 text-4xl font-semibold tracking-tight text-gray-950">The event</h1>
	<div class="mx-4 flex flex-col gap-7 text-base/[1.75rem] text-gray-600">
		<p>
			<i>Escola Gaúcha de Bioinformática</i> (EGB) is a collaborative initiative organized by the Institute
			of Informatics and the Biotechnology Center at the Federal University of Rio Grande do Sul (UFRGS),
			in partnership with the Graduate Program in Biosciences at the Federal University of Health Sciences
			of Porto Alegre (UFCSPA). This event serves as a dynamic platform for training, collaboration,
			skill development, and research activities that leverage computational methods to explore and understand
			biological systems.
		</p>
		<p>
			With a strong emphasis on interdisciplinary collaboration, EGB addresses a wide range of
			topics, including genetics, molecular biology, big data analysis, artificial intelligence,
			molecular modeling, and structural biology. By bridging the gap between computer science and
			biological sciences, the event fosters innovative solutions to complex biological challenges.
		</p>
		<p>
			A summary of previous EGB editions can be found in the article: <i
				>"Transdisciplinary Approach for Bioinformatics Education in Southern Brazil", Dorn M,
				Ligabue-Braun R, and Verli H (2021). Front. Educ. 6:725591</i
			>. DOI:
			<a
				href="https://doi.org/10.3389/feduc.2021.725591"
				target="_blank"
				class="font-semibold text-sky-600">https://doi.org/10.3389/feduc.2021.725591</a
			>.
		</p>
	</div>
	<h2 class="mx-4 mt-16 mb-8 text-4xl font-semibold tracking-tight text-gray-800">Speakers</h2>
	<div class="flex flex-col gap-6">
		{#each speakers as { name, link, country, institution, pictureUrl }}
			<div class="mx-4 flex items-center gap-4">
				<img src={pictureUrl} alt={name} class="size-18 rounded-2xl" />
				<div>
					<a href={link} target="_blank" class="text-lg">{name}</a>
					<div class="text-gray-500">{institution.name}, {country.name}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
