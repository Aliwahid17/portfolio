<script lang="ts">
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { inject } from "@vercel/analytics";
  import { webVitals } from "$lib/vitals";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import type { PageData } from "./$types";
  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  }
  inject();

  export let data: PageData;
</script>

<Navbar />
<slot {data} />
<Footer />
