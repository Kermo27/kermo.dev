export interface FeaturedProject {
	title: string;
	description: string;
	tech: string[];
	sourceUrl: string;
	releaseUrl: string;
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
	releaseUrl: 'https://github.com/Kermo27/KermoLauncher/releases'
};

export const others: OtherProject[] = [
  {
    title: 'vgrab',
    description: 'Desktop app for yt-dlp: local video library, tags, and in-app playback.',
    url: 'https://github.com/Kermo27/vgrab'
  },
  {
    title: 'KermoBot',
    description: 'Discord bot',
    url: 'https://github.com/Kermo27/KermoBot'
  },
  {
    title: 'test',
    description: 'test',
    url: 'https://github.com/Kermo27/test'
  },
];
