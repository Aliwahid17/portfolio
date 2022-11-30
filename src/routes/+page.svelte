<script lang="ts">
  // import { concurrent } from "svelte-typewriter";
  import concurrent from "svelte-typewriter/modes/concurrent";
</script>

<main>
  <section class="text-white  mt-12 ">
    <section
      class="flex justify-center items-center font-bold font-mono text-3xl md:text-4xl "
    >
      <h1 use:concurrent={{ interval: 150 }}>Hi,I'm Wahid Ali</h1>
      <span class="wave">👋</span>
    </section>

    <section class="mt-7  mx-3 font-sans text-lg font-medium md:text-2xl ">
      <p class=" mx-7 ">
        I'm a self-taught <span
          class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black  "
        >
          Full Stack Developer
        </span>
        with good knowledge and experience with the latest
        <span
          class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black "
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
    </section>
  </section>
</main>
