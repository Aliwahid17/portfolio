<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import { blogs } from "$lib/store";
</script>

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Blogs <span class="wave"> 📖</span>
  </h2>
  <Blogs posts={$blogs.posts} parseTag={$blogs.parseTag} />
</section>
