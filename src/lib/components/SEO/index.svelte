<script lang="ts">
  export let values : any;
</script>

<svelte:head>
  <title>{values.title}</title>
  <meta name="description" content={values.metadescription} />
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"/>
  <link rel="canonical" href={`https://www.wahidali.com/${values.slug}`} />
  <meta property="og:site_name" content='Wahid Ali Portfolio And Blogs' />
  <meta property="og:locale" content="en" />
  <meta property="og:url" content={`https://www.wahidali.com/${values.slug}`} />
  <meta property="og:title" content={values.title} />
  <meta property="og:description" content={values.metadescription} />
</svelte:head>
