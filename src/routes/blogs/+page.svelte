<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import { blogs } from "$lib/store";
  import SEO from "$lib/components/SEO/index.svelte";

  const seoProps = {
    title: "Wahid Ali - Blogs",
    metadescription:"Read the interesting and detailed research blogs about technology worlds",
    slug: "blogs",
    type:"website"
  };
</script>

<SEO values={seoProps} />


<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Blogs <span class="wave"> 📖</span>
  </h2>
  <Blogs posts={$blogs.posts} parseTag={$blogs.parseTag} />
</section>
