<script lang="ts">
  import Tags from "$lib/components/Tags.svelte";
  import { tag } from "$lib/tag";
  import SEO from "$lib/components/SEO/index.svelte";
	import type { PageData } from "../$types";

  export let data : PageData

  const seoProps = {
    title: "Wahid Ali - Tags",
    metadescription:"Page contains all hastags used in blogs.So,you can search according to it",
    slug: "tags",
    type:"website",
    image : 'home.webp',
    imageAlt : "If at first, you don't succeed you must be programmer."
  };
</script>

<SEO values={seoProps} />

<section class="text-white my-8 ">
  <h1 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Tags <span class="wave"> #️⃣</span>
  </h1>
  <Tags tags={tag(data.tags)} />
</section>
