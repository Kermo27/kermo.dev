export interface FeaturedProject {
	title: string;
	teaser: string;
	description: string;
	summary: string;
	tech: string[];
	sourceUrl: string;
	releasesUrl: string;
	linuxUrl: string;
	windowsUrl: string;
	features: string[];
	requirements: string[];
	admin: string;
	migration: string;
}

export interface OtherProject {
	title: string;
	description: string;
	url?: string;
}

export const featured: FeaturedProject = {
	title: 'Kermo Launcher',
	teaser: 'A desktop game library: install, update, and launch titles from one window.',
	description:
		'Rewritten from scratch from C# to Rust + Tauri to achieve maximum performance and low memory usage.',
	summary:
		'The catalog lives on a public Nextcloud share. The app installs and updates games with SHA-256 checks, tracks playtime, and runs Windows titles on Linux through Proton.',
	tech: ['Rust', 'Tauri', 'Svelte', 'TypeScript'],
	sourceUrl: 'https://github.com/Kermo27/KermoLauncher',
	releasesUrl: 'https://github.com/Kermo27/KermoLauncher/releases',
	linuxUrl:
		'https://github.com/Kermo27/KermoLauncher/releases/download/v2.0.2/KermoLauncher_2.0.2_amd64.AppImage',
	windowsUrl:
		'https://github.com/Kermo27/KermoLauncher/releases/download/v2.0.2/KermoLauncher_2.0.2_x64-setup.exe',
	features: [
		'Library from a public Nextcloud link (metadata.json)',
		'Cover grid with search, tags, and status filters',
		'Game details: hero art, Steam gallery, notes, file verify',
		'SHA-256 install, per-file delta updates, pause and resume',
		'Playtime tracking and last-launched date',
		'Windows games on Linux via Proton (Wine as fallback)',
		'Light, dark, or system theme — UI in Polish or English',
		'Self-update from GitHub Releases (2.x to 2.x)'
	],
	requirements: [
		'Windows 10/11 with WebView2, or Linux x64 with WebKitGTK 4.1',
		'A public Nextcloud share that hosts the game catalog'
	],
	admin:
		'KermoLauncher Admin is a separate app that publishes games into the synced Nextcloud folder with a SHA-256 delta copy. Screenshots and covers are not uploaded; the launcher fetches them from Steam.',
	migration:
		'2.0 is Tauri + Svelte. 1.x C# installs do not auto-update — install 2.0 separately. Playtime and settings stay on the same launcher.db paths as 1.x.'
};

export const others: OtherProject[] = [
	{
		title: 'vgrab',
		description: 'Desktop app for yt-dlp: local video library, tags, and in-app playback.',
		url: 'https://github.com/Kermo27/vgrab'
	},
	{
		title: 'LolStats',
		description:
			'League of Legends match tracker: Windows tray app, REST API, and a Blazor dashboard.',
		url: 'https://github.com/Kermo27/LolStats'
	},
	{
		title: 'KermoBot',
		description: 'Discord bot for my server, written in C#.',
		url: 'https://github.com/Kermo27/KermoBot'
	}
];
