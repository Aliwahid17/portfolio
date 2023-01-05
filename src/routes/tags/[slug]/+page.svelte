<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import Tags from "$lib/components/Tags.svelte";
  import { tag } from "$lib/tag";
  import type { Blog } from "src/app";
  export let data: {
    blogs: Blog[];
    blogsTag: string[][];
    slug: string;
  };
</script>

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11  ">
    <span class="wave"> #️⃣</span>
    <p class="first-letter:capitalize">
      {data.slug}
    </p>
  </h2>
  <Tags tags={tag(data.blogsTag)} />
</section>

<Blogs parseTag={data.blogsTag} posts={data.blogs} />
