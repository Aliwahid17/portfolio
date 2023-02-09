<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import SEO from "$lib/components/SEO/index.svelte";
	import type { PageData } from "../$types";

  export let data : PageData

  const seoProps = {
    title: "Wahid Ali - Blogs",
    metadescription:"Stay informed with Wahid Ali's blog. Full Stack Developer sharing insights on web development, technology, and beyond.",
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
  <Blogs posts={data.posts} parseTag={data.tags} />
</section>
