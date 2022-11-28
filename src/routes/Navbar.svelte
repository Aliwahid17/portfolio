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

    <div class="flex md:order-2 font-semibold ">
      <button
        type="button"
        class="text-white md:flex hidden hover:text-white  bg-gradient-to-r from-red-500 to-red-800 hover:from-cyan-400 hover:to-sky-500 mx-2 hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  "
        >SignUp</button
      >

      <button
        data-collapse-toggle="navbar-cta"
        type="button"
        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
        aria-controls="navbar-cta"
        aria-expanded="false"
        on:click={() => (nav = !nav)}
      >
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
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
          <a href="/" class="flex justify-center items-center group">
            <div
              class="block transform  text-lg group-hover:underline mx-2   transition delay-75 duration-300 group-hover:scale-125  font-semibold py-2 pl-3 pr-4 text-white rounded group-hover:bg-gray-100 md:group-hover:bg-transparent md:group-hover:text-cyan-500 md:p-0"
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
          <a href="/" class="flex justify-center items-center group">
            <div
              class="block transform  text-lg group-hover:underline mx-2   transition delay-75 duration-300 group-hover:scale-125  font-semibold py-2 pl-3 pr-4 text-white rounded group-hover:bg-gray-100 md:group-hover:bg-transparent md:group-hover:text-cyan-500 md:p-0"
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
          <a href="/" class="flex justify-center items-center group">
            <div
              class="block transform  text-lg group-hover:underline mx-2   transition delay-75 duration-300 group-hover:scale-125  font-semibold py-2 pl-3  text-white rounded group-hover:bg-gray-100 md:group-hover:bg-transparent md:group-hover:text-cyan-500 md:p-0 pr-4  "
            >
              Projects
            </div>
            <img
              src="projects.svg"
              alt="About"
              width="40px"
              height="40px"
              class="flex justify-center items-center group-hover:wave -ml-4 lg:-ml-0 "
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
