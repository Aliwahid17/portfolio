<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
  const { page } = data;
</script>

<main class="text-white text-md">
  <article class="m-3 text-lg">
  <article class="m-3 md:mx-32 lg:mx-72">
  <svelte:component this={page} />
  </article>

  <!-- <div class=" w-full m-0 ">
    <div class="container  mx-auto px-3 md:px-20 lg:px-44 xl:px-56 ">
      <div class="flex flex-col items-center justify-center py-4">
        <svelte:component this={page} />
      </div>
    </div>
  </div> -->

</main>
