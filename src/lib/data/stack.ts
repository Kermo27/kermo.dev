export interface TechGroup {
	label: string;
	items: string[];
}

export const stack: TechGroup[] = [
	{ label: 'Focus', items: ['Rust', 'Go', 'TypeScript', 'Svelte', 'Tauri'] },
	{ label: 'Also', items: ['Python', 'C#'] }
];
