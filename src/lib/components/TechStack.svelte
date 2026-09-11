<script lang="ts">
  import { stack } from '../data/stack';
</script>

<section class="mt-24" aria-labelledby="stack-title">
    <h2 id="stack-title" class="font-mono text-2xl tracking-tight">Tech Stack</h2>

    <div class="mt-8 grid gap-8 sm:grid-cols-2">
        {#each stack as group (group.label)}
            <div>
                <h3 class="font-mono text-sm text-muted">{group.label}</h3>
                <ul class="mt-3 space-y-1">
                {#each group.items as item (item)}
                    <li>{item}</li>
                {/each}
                </ul>
            </div>
        {/each}
    </div>
</section>
