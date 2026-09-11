<script lang="ts">
  import { onMount } from "svelte";
  import { githubUser } from "$lib/data/site";
  import { fetchPublicRepos, totalStars, type GitHubRepo } from "$lib/github";

  type Status = 'loading' | 'ok' | 'error';

  let status = $state<Status>('loading');
  let stars = $state(0);
  let repos = $state<GitHubRepo[]>([]);

  onMount(() => {
    fetchPublicRepos(githubUser)
      .then((data) => {
        stars = totalStars(data);
        repos = [...data]
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 5);
        status = 'ok';
      })
      .catch(() => {
        status = 'error';
      });
  })
</script>

<div aria-busy={status === 'loading'} aria-live="polite">
	<h3 class="font-mono text-sm text-muted">GitHub</h3>
	{#if status === 'loading'}
		<p class="mt-3 font-mono text-sm text-muted">Loading…</p>
	{:else if status === 'error'}
		<p class="mt-3 font-mono text-sm text-muted">Could not load GitHub stats.</p>
	{:else}
		<p class="mt-3 font-mono">{stars} stars</p>
		<ul class="mt-3 space-y-1">
			{#each repos as repo (repo.name)}
				<li>
					<a
						href={repo.html_url}
						class="link"
						target="_blank"
						rel="noreferrer">
						{repo.name}
					</a>
					<span class="font-mono text-sm text-muted">{repo.stargazers_count}</span>
				</li>
			{/each}
		</ul>
	{/if}
</div>
