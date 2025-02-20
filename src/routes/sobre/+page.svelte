<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';

	let { data } = $props();
	let { about, previousEditions } = data;
</script>

{@html about.body}

{#each previousEditions as { title, description, image }}
	<div>
		<h3>{title}</h3>
		<p>{description}</p>
		<img src="{PUBLIC_API_URL}/assets/{image.id}" alt={image.description} />
	</div>
{/each}
