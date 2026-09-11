export interface SiteLink {
	label: string;
	href: string;
	external: boolean;
}

export const name = 'kermo.dev';
export const githubUser = 'Kermo27';

export const bio =
	'Software developer building desktop apps, system tools, and web interfaces. Currently focusing on Rust, Go, TypeScript and C#.';

export const links: SiteLink[] = [
	{
		label: 'GitHub',
		href: 'https://github.com/Kermo27',
		external: true
	},
	{
		label: 'Discord',
		href: 'https://discord.com/users/314120091081900043',
		external: true
	},
	{
		label: 'Kontakt',
		href: 'mailto:hello@kermo.dev',
		external: false
	}
];
