<script lang="ts">
  import type { PageData } from "./$types";
  import SEO from "$lib/components/SEO/index.svelte";
  export let data: PageData;
  const { page, post, slug } = data;

  const seoProps = {
    title: `Wahid Ali - ${post?.postTitle}`,
    metadescription: post?.seoMetaDescription,
    slug: `blogs/${slug}`,
    type: "article",
    datePublished: post?.datePublished,
    lastUpdated: post?.lastUpdated,
    readingTime: post?.readingTime,
    image: `content/${post?.featuredImage}`,
    imageAlt: post?.featuredImageAlt,
  };
</script>

<SEO values={seoProps} />

<main class="text-white text-md">
  <div class="m-3 text-lg">
    <article class="m-3 md:mx-24 lg:mx-48 xl:mx-64">
      <svelte:component this={page} />
    </article>
  </div>
</main>
