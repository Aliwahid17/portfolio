<script lang="ts">
  import "../app.css";
  import Footer from "./Footer.svelte";
  import Navbar from "./Navbar.svelte";
  import { inject } from "@vercel/analytics";
  inject();
</script>


<Navbar />
<slot />
<Footer />
