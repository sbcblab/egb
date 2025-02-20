<script lang="ts">
	let { data } = $props();
	let { committeeMembers } = data;
</script>

<ul>
	{#each committeeMembers as { name, link, institution, institutionLink, country }}
		<li>
			<a href={link} target="_blank">{name}</a>
			<span> - </span>
			<a href={institutionLink} target="_blank">{institution}</a>
			<span> - </span>
			<span>{country.emoji} {country.name}</span>
		</li>
	{/each}
</ul>
