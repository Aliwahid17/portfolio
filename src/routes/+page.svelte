<script lang="ts">
  import concurrent from "svelte-typewriter/modes/concurrent";
  import Blogs from "./Blogs.svelte";
</script>

<main>
  <section class="text-white  md:my-24 my-16 ">
    <section
      class="flex justify-center items-center font-bold font-mono text-3xl md:text-4xl "
    >
      <h1 use:concurrent={{ interval: 150 }}>Hi,I'm Wahid Ali</h1>
      <span class="wave">👋</span>
    </section>

    <section
      class="mt-7  mx-2 font-sans text-lg font-medium md:text-2xl  lg:text-3xl lg:max-w-3xl lg:mx-96 "
    >
      <p class=" mx-7  ">
        I'm a self-taught <span
          class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black  "
        >
          Full Stack Developer
        </span>
        with good knowledge and experience with the latest
        <span
          class="bg-sky-300  whitespace-nowrap px-2 rounded-md font-semibold text-black "
        >
          web technologies.
        </span>
      </p>
      <p class=" mt-7 mx-7">
        My main goal is to work with <span
          class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black "
        >
          talented people
        </span> through my work and technical content.
      </p>

      <div class="flex justify-evenly mt-8">
        <a href="/" target="_blank" class="hover:animate-pulse">
          <img src="gmail.svg" alt="gmail" width="35" height="35" />
        </a>
        <a href="/" target="_blank" class="hover:animate-pulse">
          <img src="github.svg" alt="github" width="35" height="35" />
        </a>
        <a href="/" target="_blank" class="hover:animate-pulse">
          <img src="instagram.svg" alt="instagram" width="35" height="35" />
        </a>
        <a href="/" target="_blank" class="hover:animate-pulse">
          <img src="twitter.svg" alt="twitter" width="35" height="35" />
        </a>
        <a href="/" target="_blank" class="hover:animate-pulse">
          <img src="linkedin.svg" alt="linkedin" width="35" height="35" />
        </a>
      </div>
    </section>
  </section>

  <Blogs />
</main>
