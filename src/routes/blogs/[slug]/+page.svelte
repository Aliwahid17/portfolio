<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  const { page } = data;
</script>

<main class="text-white text-md">
  <div class="m-3 text-lg">
    <article class="m-3 md:mx-32 lg:mx-72">
      <svelte:component this={page} />
    </article>
  </div>
</main>
