<script lang="ts">
	import { others } from '$lib/data/projects';
</script>

<section class="mt-24" aria-labelledby="other-title">
	<h2 id="other-title" class="font-mono text-2xl tracking-tight">Other Projects</h2>

	<ul class="mt-8 grid gap-4 sm:grid-cols-2">
		{#each others as project (project.title)}
		<li class="border border-border p-4">
			<h3 class="font-mono">
				{#if project.url}
					<a href={project.url} class="link" target="_blank" rel="noreferrer">
						{project.title}
					</a>
				{:else}
					{project.title}
				{/if}
			</h3>
			<p class="mt-2 text-sm text-muted">{project.description}</p>
		</li>
		{/each}
	</ul>
</section>
