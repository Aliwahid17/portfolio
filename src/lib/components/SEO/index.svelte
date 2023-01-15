<script lang="ts">
  import Image from "$lib/assets/home.webp";
  export let values: any;

  const siteURL = "https://www.wahidali.com/";
  const facebookPage = "";
  const facebookAuthorPage = "";
  const twitterUsername = "";
  const author = "Wahid Ali";
</script>

<svelte:head>
  <title>{values.title}</title>
  <meta name="description" content={values.metadescription} />
  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  <link rel="canonical" href={`${siteURL}${values.slug}`} />
  <meta property="og:site_name" content="Wahid Ali Portfolio And Blogs" />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={`${siteURL}${values.slug}`} />
  <meta property="og:title" content={values.title} />
  <meta property="og:type" content={values.type} />
  <meta property="og:description" content={values.metadescription} />
  <meta property="og:image" content={Image} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
  <meta
    property="og:image:alt"
    content="If at first, you don't succeed you must be programmer."
  />

  {#if values.type === "article"}
    <meta property="article:publisher" content={facebookPage} />
    <meta property="article:author" content={facebookAuthorPage} />
    <meta property="article:published_time" content={values.datePublished} />
    {#if values.lastUpdated}
      <meta property="article:modified_time" content={values.lastUpdated} />
    {/if}
    <meta name="twitter:label2" content="Est. reading time" />
    <meta name="twitter:data2" content={values.readingTime} />
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content={Image} />
  <meta name="twitter:creator" content={`@${twitterUsername}`} />
  <meta name="twitter:site" content={`@${twitterUsername}`} />
  <meta name="twitter:label1" content="Written by" />
  <meta name="twitter:data1" content={author} />
</svelte:head>
