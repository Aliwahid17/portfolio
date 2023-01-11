<script lang="ts">
  import Projects from "$lib/components/Projects.svelte";
  import { projects } from "$lib/store";
  import SEO from "$lib/components/SEO/index.svelte";

  const seoProps = {
    title: "Wahid Ali - Projects",
    metadescription: "Come join my journey in github and collaborate with me on my projects.So,We will learn from eachother",
    slug: "projects",
  };
</script>

<SEO values={seoProps} />

<section class="  text-white my-8 ">
  <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Projects <span class="wave"> 👩‍💻</span>
  </h2>
  <Projects value={$projects} />
</section>
