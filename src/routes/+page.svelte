<script lang="ts">
	import Dashboard from '$lib/components/Dashboard.svelte';
	import FeaturedProject from '$lib/components/FeaturedProject.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import OtherProjects from '$lib/components/OtherProjects.svelte';
	import TechStack from '$lib/components/TechStack.svelte';
	import { bio, siteUrl } from '$lib/data/site';
</script>

<svelte:head>
	<title>kermo.dev</title>
	<meta name="description" content={bio} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="{siteUrl}/" />
	<meta property="og:title" content="kermo.dev" />
	<meta property="og:description" content={bio} />
	<meta property="og:image" content="{siteUrl}/og.png" />
	<meta name="twitter:card" content="summary" />
	<meta name="theme-color" content="#0c0e12" />
</svelte:head>

<Hero />
<FeaturedProject />
<Dashboard />
<TechStack />
<OtherProjects />
