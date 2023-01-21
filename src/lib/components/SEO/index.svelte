<script lang="ts">
  export let values: any;

  const siteURL = "https://www.wahidali.dev/";
  const facebookPage = "https://www.facebook.com/aliwahid17";
  const facebookAuthorPage = "https://www.facebook.com/aliwahid17";
  const twitterUsername = "https://www.facebook.com/aliwahid17";
  const author = "Wahid Ali";
  const image = `https://www.wahidali.dev/assets/${values.image}`;
</script>

<svelte:head>
  <title>{values.title}</title>
  <meta name="title" content={values.title} />
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
  <meta property="og:image" content={image} />
  <meta property="og:image:alt" content={values.imageAlt} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="628" />

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
  <meta property="twitter:url" content={`${siteURL}${values.slug}`} />
  <meta property="twitter:title" content={values.title} />
  <meta property="twitter:description" content={values.metadescription} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:creator" content={`@${twitterUsername}`} />
  <meta name="twitter:site" content={`@${twitterUsername}`} />
  <meta name="twitter:label1" content="Written by" />
  <meta name="twitter:data1" content={author} />
</svelte:head>
