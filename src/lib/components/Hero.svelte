<script lang="ts">
	import { bio, links, name } from '$lib/data/site';
</script>

<header>
	<h1 class="font-mono text-3xl tracking-tight">{name}</h1>
	<p class="mt-4 max-w-prose text-muted">{bio}</p>
	<nav class="mt-8 flex flex-wrap gap-5" aria-label="Links">
		{#each links as link (link.href)}
			<a
				href={link.href}
				class="link"
				target={link.external ? '_blank' : undefined}
				rel={link.external ? 'noreferrer' : undefined}>
				{link.label}
			</a>
		{/each}
	</nav>
</header>
