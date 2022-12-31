<script lang="ts">
  import concurrent from "svelte-typewriter/modes/concurrent";
  import Gmail from "$lib/assets/gmail.svg";
  import Github from "$lib/assets/github.svg";
  import Instagram from "$lib/assets/instagram.svg";
  import Twitter from "$lib/assets/twitter.svg";
  import Linkedin from "$lib/assets/linkedin.svg";
</script>

<section class="text-white  md:my-24 my-16 ">
  <section
    class="flex justify-center items-center font-bold font-mono text-3xl md:text-4xl "
  >
    <h1 use:concurrent={{ interval: 150 }}>Hi,I'm Wahid Ali</h1>
    <span class="wave p-0">👋</span>
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
        <img src={Gmail} alt="gmail" class='w-9 h-9' loading="lazy" />
      </a>
      <a href="/" target="_blank" class="hover:animate-pulse">
        <img src={Github} alt="github" class='w-9 h-9' loading="lazy" />
      </a>
      <a href="/" target="_blank" class="hover:animate-pulse">
        <img
          src={Instagram}
          alt="instagram" class='w-9 h-9'
          loading="lazy"
        />
      </a>
      <a href="/" target="_blank" class="hover:animate-pulse">
        <img
          src={Twitter}
          alt="twitter" class='w-9 h-9'
          loading="lazy"
        />
      </a>
      <a href="/" target="_blank" class="hover:animate-pulse">
        <img
          src={Linkedin}
          alt="linkedin" class='w-9 h-9'
          loading="lazy"
        />
      </a>
    </div>
  </section>
</section>
