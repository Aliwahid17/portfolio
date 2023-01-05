<script lang="ts">
  import Tags from "$lib/components/Tags.svelte";
  import { tag } from "$lib/tag";
  import { blogs } from "$lib/store";
</script>

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Tags <span class="wave"> #️⃣</span>
  </h2>
  <Tags tags={tag($blogs.parseTag)} />
</section>
