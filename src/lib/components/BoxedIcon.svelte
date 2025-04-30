<script lang="ts">
	let {
		Icon,
		strokeWidth = 1,
		size = 14,
		class: _class
	}: { Icon: any; strokeWidth?: number; size?: number; class?: string } = $props();
</script>

<div
	style:width="calc(var(--spacing) * {size})"
	style:height="calc(var(--spacing) * {size})"
	class="size-14 shrink-0 rounded-[27.5%] border border-primary-200 bg-primary-100 {_class}"
>
	<Icon {strokeWidth} class="size-full p-[20%] text-primary-800" />
</div>
