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
  };

  const seoProps = {
    title: `Wahid Ali - ${data.slug.charAt(0).toUpperCase() + data.slug.slice(1)}`,
    metadescription:"Read the interesting and detailed research blogs about technology worlds sorted according to topics",
    slug: `tags/${data.slug}`,
    type:"website",
    image : 'home.webp',
    imageAlt : "If at first, you don't succeed you must be programmer."
  };

</script>

<SEO values={seoProps} />

<section class="  text-white my-8 ">
  <h1 class=" text-2xl font-semibold flex justify-center items-center py-11  ">
    <span class="wave"> #️⃣</span>
    <p class="first-letter:capitalize">
      {data.slug}
    </p>
  </h1>
  <Tags tags={tag(data.blogsTag)} />
</section>

<Blogs parseTag={data.blogsTag} posts={data.blogs} />

