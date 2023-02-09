<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import Tags from "$lib/components/Tags.svelte";
  import { tag } from "$lib/tag";
  import type { Blog } from "src/app";
  import SEO from "$lib/components/SEO/index.svelte";
  export let data: {
    blogs: Blog[];
    blogsTag: string[][];
    slug: string;
    tags: string[][]
    seoProps: string
  };

</script>

<SEO values={data.seoProps} />

<section class="text-white my-8 ">
  <h1 class=" text-2xl font-semibold flex justify-center items-center py-11  ">
    <span class="wave"> #️⃣</span>
    <p class="first-letter:capitalize">
      {data.slug}
    </p>
  </h1>
  <Tags tags={tag(data.tags)} />
</section>

<Blogs parseTag={data.blogsTag} posts={data.blogs} />

