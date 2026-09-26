<script lang="ts">
	import screenshot from '$lib/assets/kermo-launcher.webp';
	import { featured } from '$lib/data/projects';
</script>

<section class="mt-24" aria-labelledby="featured-title">
	<p class="font-mono text-sm text-muted">Featured</p>
	<h2 id="featured-title" class="mt-2 font-mono text-2xl tracking-tight">{featured.title}</h2>

	<ul class="mt-3 flex flex-wrap items-baseline gap-x-2 font-mono">
		{#each featured.tech as item, index (item)}
			{#if index > 0}
				<li aria-hidden="true" class="text-muted">/</li>
			{/if}
			<li>{item}</li>
		{/each}
	</ul>

	<p class="mt-4 max-w-prose text-muted">{featured.description}</p>

	<figure class="mt-8 border border-border">
		<img
			src={screenshot}
			alt="Kermo Launcher showing the game library"
			width="1199"
			height="752"
			class="w-full"
		/>
	</figure>

	<nav class="mt-6 flex flex-wrap gap-5" aria-label="Project links">
		<a href={featured.sourceUrl} class="link" target="_blank" rel="noreferrer">
			View Source on GitHub
		</a>
		<a href={featured.linuxUrl} class="link">Download Linux</a>
		<a href={featured.windowsUrl} class="link">Download Windows</a>
		<a href="/launcher/" class="link">More about the launcher</a>
	</nav>
</section>
