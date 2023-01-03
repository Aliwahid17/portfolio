<script lang="ts">
  import Intro from "$lib/components/Intro.svelte";
  import Rust from "$lib/assets/about/rust.svg";
  import Python from "$lib/assets/about/python.svg";
  import Typescript from "$lib/assets/about/typescript.svg";
  import C from "$lib/assets/about/c.svg";
  import Cplus from "$lib/assets/about/cplus.svg";
  import React from "$lib/assets/about/react.svg";
  import Django from "$lib/assets/about/django.svg";
  import Nextjs from "$lib/assets/about/next-js.svg";
  import Sveltekit from "$lib/assets/about/sveltekit.svg";
  import TailwindCss from "$lib/assets/about/tailwind-css.svg";
</script>

<Intro />

<section class="bg-[#181818] text-white pb-11 ">
  <section class="my-11">
    <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
      Languages <span class="wave">💻</span>
    </h2>

    <div class="flex justify-evenly ">
      <img src={Rust} alt="rust" class="  rust w-11 h-11 " />
      <img src={Python} alt="python" class="  pythonw-11 h-11 " />
      <img src={Typescript} alt="typescript" class=" typescript w-11 h-11 " />
      <img src={C} alt="c" class=" c w-11 h-11 " />
      <img src={Cplus} alt="cplus" class=" cplus w-11 h-11 " />
    </div>
  </section>
</section>

<section class=" text-white pb-11 ">
  <section class="my-11">
    <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
      FrameWorks <span class="wave">👩‍💻</span>
    </h2>

    <div class="flex justify-evenly ">
      <img src={React} alt="react" class="  reactw-11 h-11 " />
      <img src={Django} alt="django" class="  django w-11 h-11 " />
      <img src={Nextjs} alt="next-js" class=" next-js w-11 h-11 " />
      <img src={Sveltekit} alt="sveltekit" class=" sveltekit w-11 h-11 " />
      <img
        src={TailwindCss}
        alt="tailwind-css"
        class=" tailwind-css w-11 h-11 "
      />
    </div>
  </section>
</section>
