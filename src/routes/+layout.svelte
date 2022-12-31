<script lang="ts">
  import "../app.css";
  import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import { inject } from "@vercel/analytics";
  import { webVitals } from "$lib/vitals";
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import type { PageData } from "./$types";

  export let data: PageData;
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

      <!-- <div class=" w-full m-0 ">
        <div class="container  mx-auto px-3 md:px-20 lg:px-44 xl:px-56 ">
          <div class="flex flex-col items-center justify-center py-4"> -->

  <Navbar />
  <slot {data} />
  <Footer />
  
<!-- </div>
</div>
</div> -->