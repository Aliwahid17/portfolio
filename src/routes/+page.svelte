<script lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import SEO from '$lib/components/SEO/index.svelte'
	import type { PageData } from "./$types";
  export let data:PageData

  const seoProps  = {
    title : "Wahid Ali - Home",
    metadescription:"I'm Wahid Ali, Full Stack Developer creating innovative projects. Expertise & experience in web development. Explore my latest work on my personal website.",
    slug : '',
    type : 'website',
    image : 'home.webp',
    imageAlt : "If at first, you don't succeed you must be programmer."
  }


</script>

<SEO values={seoProps} />

<main class="mx-2">
  <Intro />
  <section class="bg-[#181818] my-11   text-white  ">
    <p class=" text-2xl font-semibold flex justify-center items-center py-12  ">
      Recommended Reading <span class="wave">📖</span>
    </p>

    <Blogs posts={data.posts} parseTag={data.tags} />

    <div class="flex justify-center items-center  py-10 ">
      <a
        data-sveltekit-preload-data="hover"
        href="/blogs"
        class="relative  inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-400 rounded-md group-hover:mt-0 group-hover:ml-0" />
        <span class="absolute inset-0 w-full h-full bg-white rounded-md " />
        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 " />
        <span class="relative text-cyan-800  transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">See More Articles</span>
      </a>
    </div>
  </section>

  <section class="  text-white  ">
    <section class="my-11">
      <p class=" text-xl md:text-2xl font-semibold flex justify-center items-center py-11 ">Check out the stuff I've built & Collab <span class="animate-bounce">👇</span></p>

      <Projects value={data.projects} color={data.color} />

      <div class="flex justify-center items-center  py-10 ">
        <a
          data-sveltekit-preload-data="hover"
          href="/projects"
          class="relative  inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-400 rounded-md group-hover:mt-0 group-hover:ml-0" />
          <span class="absolute inset-0 w-full h-full bg-white rounded-md " />
          <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 " />
          <span class="relative text-cyan-800 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white" >See More Projects</span>
        </a>
      </div>
    </section>
  </section>
</main>
