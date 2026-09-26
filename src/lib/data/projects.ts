export interface FeaturedProject {
	title: string;
	description: string;
	tech: string[];
	sourceUrl: string;
	linuxUrl: string;
	windowsUrl: string;
}

export interface OtherProject {
	title: string;
	description: string;
	url?: string;
}

export const featured: FeaturedProject = {
	title: 'Kermo Launcher',
	description:
		'Rewritten from scratch from C# to Rust + Tauri to achieve maximum performance and low memory usage.',
	tech: ['Rust', 'Tauri', 'Svelte', 'TypeScript'],
	sourceUrl: 'https://github.com/Kermo27/KermoLauncher',
	linuxUrl:
		'https://github.com/Kermo27/KermoLauncher/releases/download/v2.0.2/KermoLauncher_2.0.2_amd64.AppImage',
	windowsUrl:
		'https://github.com/Kermo27/KermoLauncher/releases/download/v2.0.2/KermoLauncher_2.0.2_x64-setup.exe'
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
