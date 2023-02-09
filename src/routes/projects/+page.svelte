<script lang="ts">
  import Projects from "$lib/components/Projects.svelte";
  import SEO from "$lib/components/SEO/index.svelte";
	import type { PageData } from "../$types";

  export let data : PageData

  const seoProps = {
    title: "Wahid Ali - Projects",
    metadescription: "Explore the latest Full Stack Developer projects by Wahid Ali. Get a glimpse into my expertise & experience in web development on my project page.",
    slug: "projects",
    type:"website",
    image : 'home.webp',
    imageAlt : "If at first, you don't succeed you must be programmer."
  };
</script>

<SEO values={seoProps} />

<section class="  text-white my-8 ">
  <h1 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
    All Projects <span class="wave"> 👩‍💻</span>
  </h1>
  <Projects value={data.projects} color={data.color} />
</section>
