<script lang="ts">
	import { stack } from '$lib/data/stack';
</script>

<section class="mt-24" aria-labelledby="stack-title">
	<h2 id="stack-title" class="font-mono text-2xl tracking-tight">Tech Stack</h2>

	<ul class="mt-8 space-y-1">
		{#each stack as item (item)}
			<li>{item}</li>
		{/each}
	</ul>
</section>
