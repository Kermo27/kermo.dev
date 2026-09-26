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

	<p class="mt-4 max-w-prose text-muted">{featured.teaser}</p>

	<figure class="mt-8 border border-border">
		<img
			src={screenshot}
			alt="Kermo Launcher showing the game library"
			width="1199"
			height="752"
			class="w-full"
		/>
	</figure>

	<p class="mt-6">
		<a href="/launcher/" class="link">More about the launcher</a>
	</p>
</section>
