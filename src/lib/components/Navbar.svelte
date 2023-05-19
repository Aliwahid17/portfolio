<script lang="ts">
  import About from "$lib/assets/about.svg";
  import Project from "$lib/assets/projects.svg";
  import Blog from "$lib/assets/blog.svg";
	import { onMount } from "svelte";

  let nav = false;
  let bar = 0;

  onMount(() => {
    window.addEventListener('scroll',function(){
      bar = this.scrollY
    })
  })

</script>

<header
class={`${bar > 0 ? "bg-[#1e1f1f]/70 backdrop-blur " : nav && "bg-[#1e1f1f]/70  backdrop-blur"}  delay-500 duration-700 ease-in-out transition-all    z-10 sticky top-0  px-2 sm:px-4 py-2.5`}
>
<!-- class={`${bar > 0 && "bg-[#1e1f1f]/70 backdrop-blur"} ${nav && "bg-[#1e1f1f]/70 backdrop-blur"}  delay-500 duration-700 ease-in-out transition-all    z-10 sticky top-0  px-2 sm:px-4 py-2.5`} -->
<!-- class={`${bar > 0 && !nav && "bg-[#1e1f1f]/70 backdrop-blur"} delay-500 duration-700 ease-in-out transition-all backdrop-blur  z-10 sticky top-0  px-2 sm:px-4 py-2.5`} -->
  <!-- class={`${bar > 0 && !nav && "bg-[#1e1f1f]/70 backdrop-blur"} delay-500 duration-700 ease-in-out transition-all backdrop-blur  z-10 sticky top-0  px-2 sm:px-4 py-2.5`} -->
  <!-- class={`${bar > 0 && "bg-[#1e1f1f]/70 backdrop-blur"} ${nav && "bg-[#1e1f1f]/70 backdrop-blur"}  delay-500 duration-700 ease-in-out transition-all    z-10 sticky top-0  px-2 sm:px-4 py-2.5`} -->
  <!-- class={`bg-[#1e1f1f]/70 backdrop-blur z-10 sticky top-0 border-gray-200 px-2 sm:px-4 py-2.5`} -->
<!-- <header
  class="bg-[#1e1f1f]/70 backdrop-blur z-10 sticky top-0 border-gray-200 px-2 sm:px-4 py-2.5  "
> -->
  <div class="container flex flex-wrap items-center justify-between mx-auto ">
    <a
      data-sveltekit-preload-data="hover"
      href="/"
      class="text-white font-expletus font-extrabold text-2xl flex group  "
    >
      <span class="typewriter" data-value="WAHID ALI" >WAHID ALI</span>
      <span class=" group-hover:wave  ">👋</span>
    </a>

    <button
      class="md:hidden flex text-gray-500 w-10 h-10 relative focus:outline-none  "
      on:click={() => (nav = !nav)}
      title="menu"
    >
      <div
        class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2"
      >
        <span
          aria-hidden="true"
          class={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            !nav ? " -translate-y-1.5" : "rotate-45"
          }`}
        />
        <span
          aria-hidden="true"
          class={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
            nav && "opacity-0"
          } `}
        />
        <span
          aria-hidden="true"
          class={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
            nav ? "-rotate-45" : " translate-y-1.5"
          }`}
        />
      </div>
    </button>

    <nav
      class={`items-center ${
        !nav && "hidden  "
      } justify-between w-full md:flex md:w-auto md:order-1`}
    >
      <ul
        class="flex justify-center items-center flex-col p-4 mt-1 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"
      >
        <li>
          <a
            href="/blogs"
            class="flex lg:justify-center justify-between items-center group"
            on:click={() => (nav = !nav)}
            data-sveltekit-preload-data="hover"
          >
            <div
              class=" typewriter block transform  text-lg group-hover:underline mx-2   transition delay-100 duration-500 group-hover:scale-125  font-semibold py-2 pl-3 pr-4 rounded text-white group-hover:bg-transparent group-hover:text-cyan-400 md:p-0"
              data-value="BLOGS"
            >
              BLOGS
            </div>
            <!-- <img
              src={Blog}
              alt="Blogs"
              class="flex justify-center items-center group-hover:wave w-10 h-10 "  width="40" height="40"
              loading="lazy"
              title="Blogs"
            /> -->
          </a>
        </li>

        <li>
          <a
            href="/projects"
            class="flex lg:justify-center justify-between items-center group"
            on:click={() => (nav = !nav)}
            data-sveltekit-preload-data="hover"
          >

            <div
              class="typewriter block transform  text-lg group-hover:underline mx-2   transition delay-150 duration-700 group-hover:scale-125  font-semibold py-2 pl-3 pr-4 rounded text-white group-hover:bg-transparent group-hover:text-cyan-400 md:p-0 "
              data-value="PROJECTS"
            >
              PROJECTS
            </div>
            <!-- <img
              src={Project}
              alt="Projects"
              class="flex justify-center items-center group-hover:wave  w-10 h-10 " width="40" height="40"
              loading="lazy"
              title="Projects"
            /> -->
          </a>
        </li>

        

        <li>
          <a
            href="/about"
            class="flex lg:justify-center justify-between items-center group"
            on:click={() => (nav = !nav)}
            data-sveltekit-preload-data="hover"
          >
            <div
              class=" typewriter block transform  text-lg group-hover:underline mx-2   transition delay-100 duration-500 group-hover:scale-125  font-semibold py-2 pl-3 pr-4 rounded text-white group-hover:bg-transparent group-hover:text-cyan-400 md:p-0"
              data-value="ABOUT"
            >
              ABOUT
            </div>
            <!-- <img
              src={About}
              alt="About"
              class="flex justify-center items-center group-hover:wave w-10 h-10 " width="40" height="40"
              loading="lazy"
              title="About"
            /> -->
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
