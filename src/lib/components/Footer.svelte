<script lang="ts">
  import Social from "./Social.svelte";
</script>

<footer class="text-white my-10 mx-10 md:mx-40 lg:mx-72 xl:mx-96 ">
  <article>
    <p class=" text-xl  text-center ">
      I'm a freelance Full Stack Web Developer who enjoys learning <span
        class="hover:wave">🏫</span
      >,building <span class="hover:wave">🏗</span>,sharing
      <span class="hover:wave">👩‍💻</span>
      and collaborating <span class="hover:wave">🙌</span> software works with other
      Developers.
    </p>
  </article>

  <div class="mb-16">
    <Social />
  </div>

  <span class=" text-lg ">
    &#169; Copyright 2022 <a href="/" class="font-bold underline mx-1  ">
      Wahid Ali
    </a>
  </span>

  <p class="flex justify-evenly items-center text-lg my-5  ">
    <a
      href="/"
      class="text-base font-semibold hover:underline hover:text-cyan-400"
      data-sveltekit-preload-data="hover"
    >
      Home
    </a>
    <span class="border-r-2 border-l-white">&nbsp;</span>
    <a
      href="/blogs"
      class="text-base font-semibold hover:underline hover:text-cyan-400"
      data-sveltekit-preload-data="hover"
    >
      Blogs
    </a>
    <span class="border-r-2 border-l-white">&nbsp;</span>
    <a
      href="/projects"
      class="text-base font-semibold hover:underline hover:text-cyan-400"
      data-sveltekit-preload-data="hover"
    >
      Projects
    </a>
    <span class="border-r-2 border-l-white">&nbsp;</span>
    <a
      href="/about"
      class="text-base font-semibold hover:underline hover:text-cyan-400"
      data-sveltekit-preload-data="hover"
    >
      About
    </a>
    <span class="border-r-2 border-l-white">&nbsp;</span>
    <a
      href="/tags"
      class="text-base font-semibold hover:underline hover:text-cyan-400"
      data-sveltekit-preload-data="hover"
    >
      Tags
    </a>
  </p>
</footer>
