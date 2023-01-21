<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import { blogs } from "$lib/store";
  import SEO from "$lib/components/SEO/index.svelte";

  const seoProps = {
    title: "Wahid Ali - Blogs",
    metadescription:"Read the interesting and detailed research blogs about technology worlds",
    slug: "blogs",
    type:"website",
    image : 'home.webp',
    imageAlt : "If at first, you don't succeed you must be programmer."
  };
</script>

<SEO values={seoProps} />


<section class="  text-white my-8 ">
  <h1 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Blogs <span class="wave"> 📖</span>
  </h1>
  <Blogs posts={$blogs.posts} parseTag={$blogs.parseTag} />
</section>
