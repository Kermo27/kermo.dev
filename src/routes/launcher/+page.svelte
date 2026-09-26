<script lang="ts">
	import screenshot from '$lib/assets/kermo-launcher.webp';
	import { featured } from '$lib/data/projects';
	import { siteUrl } from '$lib/data/site';
</script>

<svelte:head>
	<title>{featured.title} · kermo.dev</title>
	<meta name="description" content={featured.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{siteUrl}/launcher/" />
	<meta property="og:title" content={featured.title} />
	<meta property="og:description" content={featured.description} />
	<meta property="og:image" content="{siteUrl}/og-launcher.webp" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="theme-color" content="#0c0e12" />
</svelte:head>

<p class="font-mono text-sm text-muted">
	<a href="/" class="link">← kermo.dev</a>
</p>

<h1 class="mt-4 font-mono text-3xl tracking-tight">{featured.title}</h1>

<ul class="mt-3 flex flex-wrap items-baseline gap-x-2 font-mono">
	{#each featured.tech as item, index (item)}
		{#if index > 0}
			<li aria-hidden="true" class="text-muted">/</li>
		{/if}
		<li>{item}</li>
	{/each}
</ul>

<p class="mt-6 max-w-prose text-muted">{featured.description}</p>
<p class="mt-4 max-w-prose text-muted">{featured.summary}</p>

<figure class="mt-8 border border-border">
	<img
		src={screenshot}
		alt="Kermo Launcher showing the game library"
		width="1199"
		height="752"
		class="w-full"
	/>
</figure>

<section class="mt-12" aria-labelledby="download-title">
	<h2 id="download-title" class="font-mono text-2xl tracking-tight">Download</h2>
	<nav class="mt-6 flex flex-wrap gap-5" aria-label="Downloads">
		<a href={featured.linuxUrl} class="link">Linux AppImage</a>
		<a href={featured.windowsUrl} class="link">Windows installer</a>
		<a href={featured.releasesUrl} class="link" target="_blank" rel="noreferrer">All releases</a>
		<a href={featured.sourceUrl} class="link" target="_blank" rel="noreferrer">Source on GitHub</a>
	</nav>
</section>

<section class="mt-12" aria-labelledby="features-title">
	<h2 id="features-title" class="font-mono text-2xl tracking-tight">Features</h2>
	<ul class="mt-6 max-w-prose list-disc space-y-2 pl-5 text-muted">
		{#each featured.features as item (item)}
			<li>{item}</li>
		{/each}
	</ul>
</section>

<section class="mt-12" aria-labelledby="requirements-title">
	<h2 id="requirements-title" class="font-mono text-2xl tracking-tight">Requirements</h2>
	<ul class="mt-6 max-w-prose list-disc space-y-2 pl-5 text-muted">
		{#each featured.requirements as item (item)}
			<li>{item}</li>
		{/each}
	</ul>
</section>

<section class="mt-12" aria-labelledby="admin-title">
	<h2 id="admin-title" class="font-mono text-2xl tracking-tight">Admin Tool</h2>
	<p class="mt-6 max-w-prose text-muted">{featured.admin}</p>
</section>

<p class="mt-12 max-w-prose text-sm text-muted">{featured.migration}</p>
