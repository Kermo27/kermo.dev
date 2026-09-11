<script lang="ts">
    import Footer from '$lib/components/Footer.svelte';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
    <title>kermo.dev</title>
</svelte:head>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:bg-canvas focus:px-3 focus:py-2 focus:text-fg">
	Skip to content
</a>
<div class="mx-auto max-w-3xl px-6 py-16">
	<main id="main" tabindex="-1">
		{@render children()}
	</main>
	<Footer />
</div>
