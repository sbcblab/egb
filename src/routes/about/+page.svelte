<script lang="ts">
	import { committee, speakers, title } from '$lib/data';
</script>

<svelte:head>
	<title>About &ndash; {title}</title>
</svelte:head>

<div class="mt-6">
	<h1 class="mx-6 mb-6 text-4xl font-semibold tracking-tight text-gray-950">What is EGB?</h1>
	<div class="mx-6 flex flex-col gap-7 text-lg/[1.75] text-gray-600">
		<p>
			EGB (<em>Escola Ga&uacute;cha de Bioinform&aacute;tica</em>) is an event that serves as a
			platform for training, collaborating, and developing research in the use of computational
			methods to study biological systems. It is organized by the Institute of Informatics and the
			Biotechnology Center at the Federal University of Rio Grande do Sul (UFRGS), along with the
			Graduate Program in Biosciences at the Federal University of Health Sciences of Porto Alegre
			(UFCSPA).
		</p>
		<p>
			From an interdisciplinary perspective, the event addresses challenges in <strong
				>genetics, molecular biology, big data analysis, artificial intelligence, molecular
				modeling, and structural biology</strong
			>, among other applications of computer science to biological issues.
		</p>
		<p class="overflow-hidden text-ellipsis">
			For a summary of past editions of EGB, you can refer to the article: <em
				>"Transdisciplinary Approach for Bioinformatics Education in Southern Brazil", Dorn M,
				Ligabue-Braun R, and Verli H (2021). Front. Educ. 6:725591</em
			>. DOI:
			<a
				href="https://doi.org/10.3389/feduc.2021.725591"
				target="_blank"
				rel="noopener"
				class="font-semibold text-sky-600">https://doi.org/10.3389/feduc.2021.725591</a
			>
		</p>
	</div>

	<h2 class="mx-6 mt-20 mb-8 text-4xl font-semibold tracking-tight text-gray-800">Committee</h2>
	<div class="mx-6 flex flex-col gap-6">
		{#each committee as { name, link, country, institution, pictureUrl }}
			<div class="flex items-center gap-4">
				<img src={pictureUrl} alt={name} class="size-18 rounded-2xl object-cover" />
				<div>
					<a href={link} target="_blank" class="text-lg">{name}</a>
					<div class="text-gray-500">{institution.name}, {country.name}</div>
				</div>
			</div>
		{/each}
	</div>

	<h2 class="mx-6 mt-20 mb-8 text-4xl font-semibold tracking-tight text-gray-800">Speakers</h2>
	<div class="mx-6 flex flex-col gap-6">
		{#each speakers as { name, link, country, institution, pictureUrl }}
			<div class="flex items-center gap-4">
				<img src={pictureUrl} alt={name} class="size-18 rounded-2xl object-cover" />
				<div>
					<a href={link} target="_blank" class="text-lg">{name}</a>
					<div class="text-gray-500">{institution.name}, {country.name}</div>
				</div>
			</div>
		{/each}
	</div>
</div>
