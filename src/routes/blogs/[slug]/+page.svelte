<script lang='ts'>

     import type { PageData } from "./$types";

     export let data : PageData

     const {page , post} = data

</script>

<section class="text-white ">
     <svelte:component this={page} />
</section>