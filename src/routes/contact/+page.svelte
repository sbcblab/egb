<script lang="ts">
	import { title } from '$lib/data';
	import { MailIcon, PhoneIcon } from 'lucide-svelte';
	import { MapLibre, Marker, Popup, type LngLatLike } from 'svelte-maplibre';
	import PhMapPinFill from '~icons/ph/map-pin-fill';

	let { data } = $props();
	let { contact } = data;

	const lngLat: LngLatLike = [-51.121152, -30.068043];
	const contactItems = [
		{ Icon: MailIcon, value: contact.email },
		{ Icon: PhoneIcon, value: contact.phone }
	];

	let isPopupOpen = $state(true);
</script>

<svelte:head>
	<title>Contact &ndash; {title}</title>
</svelte:head>

<div class="mx-4 mt-4 mb-4 flex grow flex-col">
	<h1 class="mb-6 text-4xl font-semibold tracking-tight text-gray-800">Contact us</h1>
	<p class="text-lg/[1.75] text-gray-600">
		If you have any questions about EGB 2025, please feel free to contact us by any of the methods
		below.
	</p>
	<div class="mt-10 flex flex-col gap-4">
		{#each contactItems as { Icon, value }}
			<div class="flex items-center gap-3">
				<Icon strokeWidth={1.5} class="size-6 text-sky-500"></Icon>
				<span class="whitespace-nowrap text-gray-950">{value}</span>
			</div>
		{/each}
	</div>
	<MapLibre
		center={lngLat}
		zoom={14}
		attributionControl={false}
		style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
		class="z-0 mt-10 min-h-72 grow rounded-2xl bg-stone-50"
	>
		<Marker {lngLat} onclick={() => (isPopupOpen = true)}>
			<PhMapPinFill class="size-12 text-sky-500" />
			<Popup {lngLat} bind:open={isPopupOpen} openOn="manual" anchor="bottom" offset={[0, -22]}>
				<div class="flex flex-col gap-1 text-center font-sans">
					<div class="text-sm font-medium text-gray-950">INF-UFRGS</div>
					<div class="text-sm text-gray-600">
						Av. Bento Gonçalves, 9500<br />Agronomia, Porto Alegre - RS
					</div>
				</div>
			</Popup>
		</Marker>
	</MapLibre>
</div>

<style lang="postcss">
	@reference "tailwindcss/theme";

	:global(.maplibregl-popup-content) {
		@apply rounded-2xl px-8 py-5 shadow-xl;
	}
</style>
