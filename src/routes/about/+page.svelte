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
      <img src={Rust} title="Rust" alt="rust" class="  rust w-11 h-11 "  width="44" height="44"/>
      <img src={Python} title="Python" alt="python" class="  pythonw-11 h-11 " width="44" height="44" />
      <img src={Typescript} title="Typescript" alt="typescript" class=" typescript w-11 h-11 " width="44" height="44" />
      <img src={C} title="C" alt="C" class=" c w-11 h-11 " width="44" height="44" />
      <img src={Cplus} title="C++" alt="C++" class=" cplus w-11 h-11 " width="44" height="44" />
    </div>
  </section>
</section>

<section class=" text-white pb-11 ">
  <section class="my-11">
    <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
      FrameWorks <span class="wave">👩‍💻</span>
    </h2>

    <div class="flex justify-evenly ">
      <img src={React} title="React" alt="React" class="  reactw-11 h-11 "  width="44" height="44" />
      <img src={Django} title="Django" alt="Django" class="  django w-11 h-11 " width="44" height="44" />
      <img src={Nextjs} title="Nextjs" alt="Nextjs" class=" next-js w-11 h-11 "  width="44" height="44"/>
      <img src={Sveltekit} title="Sveltekit" alt="Sveltekit" class=" sveltekit w-11 h-11 " width="44" height="44" />
      <img
        src={TailwindCss} title="TailwindCss"
        alt="tailwind-css"
        class=" tailwind-css w-11 h-11 " width="44" height="44"
      />
    </div>
  </section>
</section>
