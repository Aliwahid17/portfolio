<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import Tags from "$lib/components/Tags.svelte";
  import { tag } from "$lib/tag";
  import type { Blog } from "src/app";
  export let data: {
    contents: { parseTag: string[][] };
    slug: string;
    blogsTag: string[][];
    blogs: Blog[];
  };
</script>

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11  ">
    <span class="wave"> #️⃣</span>
    <p class="first-letter:capitalize">
      {data.slug}
    </p>
  </h2>
  <Tags tags={tag(data.contents.parseTag)} />
</section>

<Blogs parseTag={data.blogsTag} posts={data.blogs} />
