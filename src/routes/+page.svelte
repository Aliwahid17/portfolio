<script async lang="ts">
  import Blogs from "$lib/components/Blogs.svelte";
  import Intro from "$lib/components/Intro.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import type { Blog, Github } from "src/app";
  import type { PageData } from "./$types";
  export let data: PageData;

  const { projects, contents } = data;
  const { posts, parseTag } = contents;

  const homeContent: Blog[] = [];
  const projectContent: Github[] = [];

  for (let index = 0; index < 1; index++) {
    homeContent.push(posts[index]);
    // if (typeof projects !== 'undefined') {
    //   projectContent.push(projects[index]);
    // }
  }
  for (let index = 0; index < 4; index++) {
    if (typeof projects !== "undefined") {
      projectContent.push(projects[index]);
    }
  }

</script>

<main class="mx-2">
  <Intro />
  <section class="bg-[#181818] my-11  text-white  ">
    <h2
      class=" text-2xl font-semibold flex justify-center items-center py-11  "
    >
      Recommended Reading <span class="wave">📖</span>
    </h2>

    <Blogs posts={homeContent} {parseTag} />

    <div class="flex justify-center items-center  py-10 ">
      <a
        data-sveltekit-preload-data="hover"
        href="/blogs"
        class="relative  inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span
          class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-400 rounded-md group-hover:mt-0 group-hover:ml-0"
        />
        <span class="absolute inset-0 w-full h-full bg-white rounded-md " />
        <span
          class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 "
        />
        <span
          class="relative text-cyan-700  transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"
          >See More Articles</span
        >
      </a>
    </div>
  </section>

  <section class="  text-white  ">
    <section class="my-11">
      <h2
        class=" text-xl md:text-2xl font-semibold flex justify-center items-center py-11 "
      >
        Check out some of the stuff I've built & Collaborate <span class="animate-bounce"
          >👇</span
        >
      </h2>

      <Projects value={projectContent} />

      <div class="flex justify-center items-center  py-10 ">
        <a
          data-sveltekit-preload-data="hover"
          href="/projects"
          class="relative  inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
        >
          <span
            class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-400 rounded-md group-hover:mt-0 group-hover:ml-0"
          />
          <span class="absolute inset-0 w-full h-full bg-white rounded-md " />
          <span
            class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 "
          />
          <span
            class="relative text-cyan-700 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"
            >See More Projects</span
          >
        </a>
      </div>
    </section>
  </section>
</main>
