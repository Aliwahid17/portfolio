<script lang="ts">
  import "../app.css";
  import Footer from "./Footer.svelte";
  import Navbar from "./Navbar.svelte";
  import { inject } from "@vercel/analytics";
  import { webVitals } from "$lib/vitals";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId,
    });
  }
  inject();
</script>

<Navbar />
<slot />
<Footer />
