export interface TechGroup {
  label: string;
  items: string[];
}

export const stack: TechGroup[] = [
  { label: 'Systems', items: ['Rust', 'Go'] },
  { label: 'Frontend', items: ['TypeScript', 'Svelte'] },
  { label: 'Other', items: ['Python', 'C#'] }
];
