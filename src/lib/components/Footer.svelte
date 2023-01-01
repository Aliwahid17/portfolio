<script lang="ts">
  import Gmail from "$lib/assets/gmail.svg";
  import Github from "$lib/assets/github.svg";
  import Instagram from "$lib/assets/instagram.svg";
  import Twitter from "$lib/assets/twitter.svg";
  import Linkedin from "$lib/assets/linkedin.svg";
</script>

<footer class="text-white mx-10 md:mx-36 my-20 lg:mx-96 ">
  <p class=" text-xl  md:mx-5 lg:mx-24 ">
    I'm a freelance Full Stack Web Developer who enjoys learning <span
      class="hover:wave">🏫</span
    >,building <span class="hover:wave">🏗</span>,sharing
    <span class="hover:wave">👩‍💻</span>
    and collaborating <span class="hover:wave">🙌</span> software with other Developers.
  </p>

  <div class="flex justify-evenly mt-8 mb-20 md:mx-5 lg:mx-24 ">
    <a href="/" target="_blank" class="hover:animate-pulse">
      <img src={Gmail} alt="gmail" class="w-9 h-9" loading="lazy" />
    </a>
    <a href="/" target="_blank" class="hover:animate-pulse">
      <img src={Github} alt="github" class="w-9 h-9" loading="lazy" />
    </a>
    <a href="/" target="_blank" class="hover:animate-pulse">
      <img src={Instagram} alt="instagram" class="w-9 h-9" loading="lazy" />
    </a>
    <a href="/" target="_blank" class="hover:animate-pulse">
      <img src={Twitter} alt="twitter" class="w-9 h-9" loading="lazy" />
    </a>
    <a href="/" target="_blank" class="hover:animate-pulse">
      <img src={Linkedin} alt="linkedin" class="w-9 h-9" loading="lazy" />
    </a>
  </div>

  <p class="flex text-lg md:mx-5 lg:mx-24">
    &#169; Copyright 2022 <a href="/" class="font-bold underline mx-1  ">
      Wahid Ali
    </a>
  </p>
  <p class="flex justify-evenly items-center text-lg my-5 md:mx-5 lg:mx-24">
    <!-- &#169; Copyright 2022 <a href="/" class="font-bold underline mx-1  ">
      Wahid Ali
    </a> -->
    <a href="/"  class="text-base font-semibold hover:underline hover:text-cyan-400"  data-sveltekit-preload-data="hover"  > Home </a>
    <span class="border-r-2 border-l-white">&nbsp;</span>
    <a href="/blogs"  class="text-base font-semibold hover:underline hover:text-cyan-400"  data-sveltekit-preload-data="hover"  > Blogs </a>
    <span class="border-r-2 border-l-white">&nbsp;</span>
    <a href="/projects" class="text-base font-semibold hover:underline hover:text-cyan-400" data-sveltekit-preload-data="hover" > Projects </a>
    <span class="border-r-2 border-l-white">&nbsp;</span>
    <a href="/about" class="text-base font-semibold hover:underline hover:text-cyan-400" data-sveltekit-preload-data="hover" > About </a>
    <span class="border-r-2 border-l-white">&nbsp;</span>
    <a href="/tags" class="text-base font-semibold hover:underline hover:text-cyan-400" data-sveltekit-preload-data="hover" > Tags </a>
  </p>
</footer>
