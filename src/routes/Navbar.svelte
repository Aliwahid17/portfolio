<script lang="ts">
  let nav = false;
</script>

<nav
  class="bg-[#1e1f1f]  z-10 sticky top-0 border-gray-200 px-2 sm:px-4 py-2.5  "
>
  <div class="container flex flex-wrap items-center justify-between mx-auto ">
    <a
      href="/"
      class="text-white font-mono font-extrabold text-2xl flex group  "
    >
      <div>Wahid Ali</div>
      <div class=" group-hover:wave  ">👋</div>
    </a>

    <div class="flex md:order-2 font-semibold  ">
      <!-- <button
        type="button"
        class="text-white md:flex hidden hover:text-white  bg-gradient-to-r from-red-500 to-red-800 hover:from-cyan-400 hover:to-sky-500 mx-2 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center   "
        >SignUp</button
      > -->

      <!-- <a href="#_" class="relative inline-block px-4 py-2 font-medium group">
        <span
          class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0"
        />
        <span
          class="absolute inset-0 w-full h-full bg-black border-2 border-white group-hover:bg-white"
        />
        <span class="relative text-white group-hover:text-black"
          >Button Text</span
        >
      </a> -->

      <!-- href="/" -->
      <!-- class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group" -->
      <button
        class="relative inline-flex items-center justify-center px-6 py-2 mt-1 overflow-hidden font-mono font-medium tracking-tighter text-white bg-red-800 rounded-lg group"
      >
        <span
          class="absolute w-0 h-0 transition-all duration-500 ease-out bg-sky-500 rounded-full group-hover:w-56 group-hover:h-56"
        />
        <span
          class="absolute inset-0  -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-red-700"
        />

        <span class="relative flex ">
          <img
            src="google.svg"
            alt="google"
            width="20"
            height="20"
            class="mr-1"
          />SignUp
        </span>
      </button>

      <button
        class="  md:hidden flex text-gray-500 w-10 h-10 relative focus:outline-none bg-[#1e1f1f]"
        on:click={() => (nav = !nav)}
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
    </div>

    <div
      class={`items-center ${
        !nav && "hidden"
      } justify-between  w-full md:flex md:w-auto md:order-1`}
      id="navbar-cta"
    >
      <ul
        class="flex  flex-col p-4 mt-1 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0    "
      >
        <li>
          <a
            href="/"
            class="flex lg:justify-center justify-between items-center group"
          >
            <div
              class="block transform  text-lg group-hover:underline mx-2   transition delay-75 duration-300 group-hover:scale-125  font-semibold py-2 pl-3 pr-4 rounded text-white group-hover:bg-transparent group-hover:text-cyan-500 md:p-0"
            >
              About
            </div>
            <img
              src="about.svg"
              alt="About"
              width="40px"
              height="40px"
              class="flex justify-center items-center group-hover:wave "
            />
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex lg:justify-center justify-between items-center group"
          >
            <div
              class="block transform  text-lg group-hover:underline mx-2   transition delay-75 duration-300 group-hover:scale-125  font-semibold py-2 pl-3 pr-4 rounded text-white group-hover:bg-transparent group-hover:text-cyan-500 md:p-0"
            >
              Blogs
            </div>
            <img
              src="blog.svg"
              alt="About"
              width="40px"
              height="40px"
              class="flex justify-center items-center group-hover:wave "
            />
          </a>
        </li>
        <li>
          <a
            href="/"
            class="flex lg:justify-center justify-between items-center group"
          >
            <div
              class="block transform  text-lg group-hover:underline mx-2   transition delay-75 duration-300 group-hover:scale-125  font-semibold py-2 lg:pl-3 pl-1 pr-4 rounded text-white group-hover:bg-transparent group-hover:text-cyan-500 md:p-0  "
            >
              Projects
            </div>
            <img
              src="projects.svg"
              alt="About"
              width="40px"
              height="40px"
              class="flex justify-center items-center group-hover:wave  "
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
