<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
  const { posts, parseTag } = data.contents;
</script>

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Blogs <span class="wave"> 📖</span>
  </h2>
  <Blogs {posts} {parseTag} />
</section>
