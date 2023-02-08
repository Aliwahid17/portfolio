<script lang="ts">
	import type { PageData } from './$types';
	import SEO from '$lib/components/SEO/index.svelte';
	export let data: PageData;
	let seoProps: {
		title: string;
		metadescription: string | undefined;
		slug: string;
		type: string;
		datePublished: string | undefined;
		lastUpdated: string | undefined;
		readingTime: string | undefined;
		image: string;
		imageAlt: string | undefined;
	};
	$: data;
	// const { page, post, slug , seoProps } = data;

	$: seoProps = {
		title: `Wahid Ali - ${data.post?.postTitle}`,
		metadescription: data.post?.seoMetaDescription,
		slug: `blogs/${data.slug}`,
		type: 'article',
		datePublished: data.post?.datePublished,
		lastUpdated: data.post?.lastUpdated,
		readingTime: data.post?.readingTime,
		image: `content/${data.post?.featuredImage}`,
		imageAlt: data.post?.featuredImageAlt
	};

	// console.log(seoProps)
</script>

<SEO values={seoProps} />

<main class="text-white text-md">
	<div class="m-3 text-lg">
		<article class="m-3 md:mx-24 lg:mx-48 xl:mx-64">
			<svelte:component this={data.page} />
		</article>
	</div>
</main>

<!-- <script lang="ts">
  import type { PageData } from "./$types";
  import SEO from "$lib/components/SEO/index.svelte";
  export let data: PageData;
  const { page, post, slug  } = data;
  // const { page, post, slug , seoProps } = data;

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
  
  // console.log(seoProps)
</script>

<SEO values={seoProps} />

<main class="text-white text-md">
  <div class="m-3 text-lg">
    <article class="m-3 md:mx-24 lg:mx-48 xl:mx-64">
      <svelte:component this={page} />
    </article>
  </div>
</main> -->
