<script lang="ts">
    import screenshot from '$lib/assets/kermo-launcher.webp';
	import { featured } from '$lib/data/projects';
</script>

<section class="mt-24" aria-labelledby="featured-title">
	<p class="font-mono text-sm text-muted">Featured</p>
	<h2 id="featured-title" class="mt-2 font-mono text-2xl tracking-tight">{featured.title}</h2>

	<ul class="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm text-muted">
		{#each featured.tech as item (item)}
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

	<nav class="mt-6 flex gap-5" aria-label="Project links">
		<a
			href={featured.sourceUrl}
			class="link"
			target="_blank"
			rel="noreferrer">
			View Source on GitHub
		</a>
		<a
			href={featured.releaseUrl}
			class="link"
			target="_blank"
			rel="noreferrer">
			Download Release
		</a>
	</nav>
</section>
