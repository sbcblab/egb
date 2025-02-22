<script lang="ts">
	import { MailIcon, PhoneIcon } from 'lucide-svelte';
	import { MapLibre, Marker, Popup, type LngLatLike } from 'svelte-maplibre';
	import PhMapPinFill from '~icons/ph/map-pin-fill';

	const lngLat: LngLatLike = [-51.121152, -30.068043];
	const items = [
		{ Icon: MailIcon, value: 'egb@inf.ufrgs.br' },
		{ Icon: PhoneIcon, value: '+55 51 3308-6824' }
	];

	let isPopupOpen = $state(true);
</script>

<div class="flex grow flex-col">
	<div class="px-6 py-4">
		<h1 class="mb-6 text-4xl font-semibold tracking-tight text-zinc-800">Get in touch</h1>
		<p class="text-lg/[1.75] text-zinc-600">
			If you have any questions about EGB 2025, please feel free to contact us by any of the methods
			below.
		</p>
		<div class="mt-8 flex flex-col gap-4">
			{#each items as { Icon, value }}
				<div class="flex items-center gap-3">
					<Icon strokeWidth={1} class="size-7 text-sky-600"></Icon>
					<span class="whitespace-nowrap text-zinc-800">{value}</span>
				</div>
			{/each}
		</div>
	</div>
	<MapLibre
		center={lngLat}
		zoom={14}
		attributionControl={false}
		style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
		class="z-0 mt-12 min-h-72 grow bg-stone-50"
	>
		<Marker {lngLat} onclick={() => (isPopupOpen = true)}>
			<PhMapPinFill class="size-12 text-sky-600" />
			<Popup
				{lngLat}
				bind:open={isPopupOpen}
				openOn="manual"
				anchor="bottom"
				onclose={() => console.log('close')}
				offset={[0, -22]}
			>
				<div class="flex flex-col gap-1 text-center font-sans">
					<div class="text-sm font-medium text-zinc-900">INF-UFRGS</div>
					<div class="text-sm text-zinc-600">
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
