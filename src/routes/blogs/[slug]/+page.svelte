<script lang="ts">
  import { url } from "$lib/imageURL";
  import type { PageData } from "./$types";
  import SEO from "$lib/components/SEO/index.svelte";
  export let data: PageData;
  const { page, post, slug } = data;

  const seoProps = {
    title: `Wahid Ali - ${post?.postTitle}`,
    metadescription:post?.seoMetaDescription,
    slug: slug,
    type:"article",
    datePublished : post?.datePublished,
    lastUpdated : post?.lastUpdated,
    readingTime : post?.readingTime,
  };
</script>

<SEO values={seoProps} />

<main class="text-white text-md">
  <div class="m-3 text-lg">
    <article class="m-3 md:mx-32 lg:mx-72">
      <svelte:component this={page} />
    </article>
  </div>
</main>
