<script lang="ts">
  import { color } from "$lib/tagIndex";
  export let tags: string[];
</script>

<div
  class="mt-4 mb-2  flex items-center justify-center gap-2 px-2  md:px-20 lg:px-80 flex-wrap "
>
  {#each tags as tag}
    <a
      href={`/tags/${tag}`}
      class={`whitespace-nowrap rounded-full first-letter:capitalize  px-2.5 py-0.5 text-2xl font-semibold  ${
        color()
      }`}
      data-sveltekit-reload=""
    >
      <span class={``}>
        {`#${tag}`}
      </span>
    </a>
  {/each}
</div>
