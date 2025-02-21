import type { Action } from 'svelte/action';

export const clickOutside: Action = (node) => {
	function handleClick(e: PointerEvent) {
		if (e.target instanceof Node && !node.contains(e.target)) {
			node.dispatchEvent(new CustomEvent('outsideclick'));
		}
	}
	window.addEventListener('pointerdown', handleClick);
	return {
		destroy() {
			window.removeEventListener('pointerdown', handleClick);
		}
	};
};
