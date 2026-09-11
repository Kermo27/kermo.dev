<script lang="ts">
	import icon from '$lib/assets/icon.png';
	import { bio, links, name } from '$lib/data/site';
</script>

<header>
	<div class="flex items-center gap-3">
		<img src={icon} alt="" width="40" height="40" class="size-10" />
		<h1 class="font-mono text-3xl tracking-tight">{name}</h1>
	</div>
	<p class="mt-4 max-w-prose text-muted">{bio}</p>
	<nav class="mt-8 flex flex-wrap gap-5" aria-label="Links">
		{#each links as link (link.href)}
			<a
				href={link.href}
				class="link"
				target={link.external ? '_blank' : undefined}
				rel={link.external ? 'noreferrer' : undefined}
			>
				{link.label}
			</a>
		{/each}
	</nav>
</header>
