<!-- <script context="module" lang="ts">
import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const mdModules = import.meta.glob("../../content/*.{md,svx}");
    
    const posts = await Promise.all(
        Object.keys(mdModules).map(async (path) => {
            const slug = path.slice(14, -3);
            const { metadata }: any = await mdModules[path]();
            const {
                author,
                postTitle,
                focusKeyphrase,
                datePublished,
                lastUpdated,
                seoMetaDescription,
                featuredImage,
                featuredImageAlt,
                ogImage,
                ogSquareImage,
                twitterImage,
                categories,
                tags,
            } = metadata;

            return {
                postTitle,
                focusKeyphrase,
                datePublished,
                lastUpdated,
                seoMetaDescription,
                featuredImage,
                featuredImageAlt,
                ogImage,
                ogSquareImage,
                twitterImage,
                categories,
                tags,
                author,
                slug,
            };
        })
    );
    return { posts };
};
</script>

<script lang="ts">
  // import type { PageData } from "./$types";
  // import {data} 
  //  let mdModules
  // console.log(mdModules)

  export let data ;

  console.log(data.posts)

  // // export let data: PageData;
  // // export let posts: PageData;
  // export let load: PageData;
  // console.log(load)
  // console.log(data)

  // console.log('../../content/demo.md'.slice(14,-3))
  // console.log(import.meta.glob("../../content/*.{md,svx}"))

  // const { posts } = data;
</script> -->

<script lang="ts">

  import type { PageData } from "./$types";

  export let posts : PageData;
  // const { posts } = data
  // console.log(data)

  // console.log(...posts[2])

  

</script>

<section class="bg-[#181818]   text-white  ">
  <section class="my-11">
    <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
      Recommended reading <span class="wave">📖</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-8 ">

{#each posts as post}



<article
        class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75">
        <div class="rounded-[10px]   bg-gray-900 p-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
            class=" rounded-xl mb-3 "
          />
          <time datetime="2022-10-10" class="block text-xs text-gray-400 px-2 ">
            <!-- 10th Oct 2022 -->
            {post.datePublished}
          </time>

          <a href={`/blogs/${post.slug}`}>
            <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
              <!-- How to center an element using JavaScript and jQuery -->
              {post.postTitle}
            </h3>
          </a>

          <p class="mt-0.5 px-2 text-sm font-medium  text-white">
            <!-- Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo rem officia aspernatur a earum minima est. Culpa
            animi quisquam praesentium quidem, fugit libero ducimus! Esse unde
            repellat dicta maiores, consectetur reprehenderit dolor quos
            similique? -->
            {post.seoMetaDescription}
          </p>
          
          <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">




            <span
              class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
            >
            Snippet
          </span>
         
        </div>
      </div>
    </article>
    
    {/each}



      <!-- <article
        class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75">
        <div class="rounded-[10px]   bg-gray-900 p-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
            class=" rounded-xl mb-3 "
          />
          <time datetime="2022-10-10" class="block text-xs text-gray-400 px-2 ">
            10th Oct 2022
          </time>

          <a href="/">
            <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <p class="mt-0.5 px-2 text-sm font-medium  text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo rem officia aspernatur a earum minima est. Culpa
            animi quisquam praesentium quidem, fugit libero ducimus! Esse unde
            repellat dicta maiores, consectetur reprehenderit dolor quos
            similique?
          </p>

          <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">
            <span
              class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
            >
              Snippet
            </span>
          </div>
        </div>
      </article>
      <article
        class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75">
        <div class="rounded-[10px]   bg-gray-900 p-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
            class=" rounded-xl mb-3 "
          />
          <time datetime="2022-10-10" class="block text-xs text-gray-400 px-2 ">
            10th Oct 2022
          </time>

          <a href="/">
            <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <p class="mt-0.5 px-2 text-sm font-medium  text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo rem officia aspernatur a earum minima est. Culpa
            animi quisquam praesentium quidem, fugit libero ducimus! Esse unde
            repellat dicta maiores, consectetur reprehenderit dolor quos
            similique?
          </p>

          <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">
            <span
              class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
            >
              Snippet
            </span>
          </div>
        </div>
      </article>
      <article
        class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75">
        <div class="rounded-[10px]   bg-gray-900 p-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
            class=" rounded-xl mb-3 "
          />
          <time datetime="2022-10-10" class="block text-xs text-gray-400 px-2 ">
            10th Oct 2022
          </time>

          <a href="/">
            <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <p class="mt-0.5 px-2 text-sm font-medium  text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo rem officia aspernatur a earum minima est. Culpa
            animi quisquam praesentium quidem, fugit libero ducimus! Esse unde
            repellat dicta maiores, consectetur reprehenderit dolor quos
            similique?
          </p>

          <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">
            <span
              class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
            >
              Snippet
            </span>
          </div>
        </div>
      </article> -->




    </div>

    <div class="flex justify-center items-center  py-10 ">
      <a
        href="/blogs"
        class="relative  inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span
          class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-400 rounded-md group-hover:mt-0 group-hover:ml-0"
        />
        <span class="absolute inset-0 w-full h-full bg-white rounded-md " />
        <span
          class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 "
        />
        <span
          class="relative text-cyan-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"
          >See More Articles</span
        >
      </a>
    </div>
  </section>
</section>


<!-- <section class="bg-[#181818]   text-white  ">
  <section class="my-11">
    <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
      Recommended reading <span class="wave">📖</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-8 ">
      <article
        class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
      >
        <div class="rounded-[10px]   bg-gray-900 p-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
            class=" rounded-xl mb-3 "
          />
          <time datetime="2022-10-10" class="block text-xs text-gray-400 px-2 ">
            10th Oct 2022
          </time>

          <a href="/">
            <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <p class="mt-0.5 px-2 text-sm font-medium  text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo rem officia aspernatur a earum minima est. Culpa
            animi quisquam praesentium quidem, fugit libero ducimus! Esse unde
            repellat dicta maiores, consectetur reprehenderit dolor quos
            similique?
          </p>

          <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">
            <span
              class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
            >
              Snippet
            </span>
          </div>
        </div>
      </article>
      <article
        class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
      >
        <div class="rounded-[10px]   bg-gray-900 p-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
            class=" rounded-xl mb-3 "
          />
          <time datetime="2022-10-10" class="block text-xs text-gray-400 px-2 ">
            10th Oct 2022
          </time>

          <a href="/">
            <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <p class="mt-0.5 px-2 text-sm font-medium  text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo rem officia aspernatur a earum minima est. Culpa
            animi quisquam praesentium quidem, fugit libero ducimus! Esse unde
            repellat dicta maiores, consectetur reprehenderit dolor quos
            similique?
          </p>

          <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">
            <span
              class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
            >
              Snippet
            </span>
          </div>
        </div>
      </article>
      <article
        class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
      >
        <div class="rounded-[10px]   bg-gray-900 p-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
            class=" rounded-xl mb-3 "
          />
          <time datetime="2022-10-10" class="block text-xs text-gray-400 px-2 ">
            10th Oct 2022
          </time>

          <a href="/">
            <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <p class="mt-0.5 px-2 text-sm font-medium  text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo rem officia aspernatur a earum minima est. Culpa
            animi quisquam praesentium quidem, fugit libero ducimus! Esse unde
            repellat dicta maiores, consectetur reprehenderit dolor quos
            similique?
          </p>

          <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">
            <span
              class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
            >
              Snippet
            </span>
          </div>
        </div>
      </article>
      <article
        class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
      >
        <div class="rounded-[10px]   bg-gray-900 p-2 ">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            alt=""
            class=" rounded-xl mb-3 "
          />
          <time datetime="2022-10-10" class="block text-xs text-gray-400 px-2 ">
            10th Oct 2022
          </time>

          <a href="/">
            <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
              How to center an element using JavaScript and jQuery
            </h3>
          </a>

          <p class="mt-0.5 px-2 text-sm font-medium  text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus illo rem officia aspernatur a earum minima est. Culpa
            animi quisquam praesentium quidem, fugit libero ducimus! Esse unde
            repellat dicta maiores, consectetur reprehenderit dolor quos
            similique?
          </p>

          <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">
            <span
              class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
            >
              Snippet
            </span>
          </div>
        </div>
      </article>
    </div>

    <div class="flex justify-center items-center  py-10 ">
      <a
        href="/blogs"
        class="relative  inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
      >
        <span
          class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-cyan-400 rounded-md group-hover:mt-0 group-hover:ml-0"
        />
        <span class="absolute inset-0 w-full h-full bg-white rounded-md " />
        <span
          class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-cyan-400 rounded-md opacity-0 group-hover:opacity-100 "
        />
        <span
          class="relative text-cyan-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white"
          >See More Articles</span
        >
      </a>
    </div>
  </section>
</section> -->




