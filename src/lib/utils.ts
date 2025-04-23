import type { Action } from 'svelte/action';

export const levelMap = {
	'en-US': { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced' },
	'pt-BR': { 1: 'Básico', 2: 'Intermediário', 3: 'Avançado' }
};

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

export function getFlagEmoji(alpha2: string): string {
	const codePoints = Array.from(alpha2).map((char) => 0x1f1e6 - 65 + char.charCodeAt(0));
	return String.fromCodePoint(...codePoints);
}

export function getDatesBetween(startDateStr: string, endDateStr: string): string[] {
	const dates: string[] = [];
	const currentDate = new Date(startDateStr);
	const endDate = new Date(endDateStr);

	while (currentDate <= endDate) {
		dates.push(`${new Date(currentDate).toISOString().slice(0, 10)}T00:00:00`);
		currentDate.setDate(currentDate.getDate() + 1);
	}

	return dates;
}
