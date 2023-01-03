<script lang="ts">
  import concurrent from "svelte-typewriter/modes/concurrent";
  import Social from "./Social.svelte";
</script>

<section class="text-white my-16   mx-2   ">
  <section
    class="flex justify-center items-center font-bold font-mono text-3xl md:text-4xl "
  >
    <h1 use:concurrent={{ interval: 150 }}>Hi,I'm Wahid Ali</h1>
    <span class="wave p-0">👋</span>
  </section>

  <section
    class=" font-sans font-medium flex justify-center items-center mt-7 mx-2 md:mx-20 lg:mx-32 "
  >
    <article class="  text-lg md:text-2xl lg:max-w-2xl lg:text-3xl ">
      <p class=" mx-7  ">
        I'm a self-taught <span
          class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black  "
          style="line-height: 45px;"
        >
          Full Stack Developer
        </span>
        with good knowledge and experience with the latest
        <span
          class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black  "
          style="line-height: 45px;"
        >
          Web Technologies.
        </span>
      </p>

      <p class=" mt-7 mx-7 ">
        My main goal is to work with <span
          class="bg-sky-300 whitespace-nowrap px-2 rounded-md font-semibold text-black  "
          style="line-height: 45px;"
          >Talented People
        </span> through my work and technical content.
      </p>
    </article>
  </section>

  <div class="mx-2 md:mx-16 lg:mx-72 xl:mx-96">
    <Social />
  </div>
</section>
