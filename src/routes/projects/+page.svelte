<script lang="ts">
  import Projects from "$lib/components/Projects.svelte";
  import type { Github } from "src/app";
  export let data: { projects: Github[] };
</script>

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Projects <span class="wave"> 👩‍💻</span>
  </h2>
  <Projects value={data.projects} />
</section>
