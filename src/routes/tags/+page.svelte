<script lang="ts">
  import Tags from "$lib/components/Tags.svelte";
  import type { PageData } from "../$types";
  import { tag } from "$lib/tag";
  export let data: PageData;
</script>

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Tags <span class="wave"> #️⃣</span>
  </h2>
  <Tags tags={tag(data.contents.parseTag)} />
</section>
