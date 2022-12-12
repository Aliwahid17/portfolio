<script lang="ts">
  import { dateFormat } from "$lib/date";
  import { tagIndex } from "$lib/tagIndex";
  import type { PageData } from "./$types";
  export let data: PageData;
  const { posts, parseTag } = data;
</script>

<section class="  text-white  ">
  <section class="my-8">
    <h2 class=" text-2xl font-semibold flex justify-center items-center py-11 ">
      All Blogs <span class="wave"> 📖</span>
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-8 ">
      {#each posts as post}
        <article
          class="rounded-xl my-5 md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
        >
          <div class="rounded-[10px]   bg-gray-900 p-2 ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
              alt=""
              class=" rounded-xl mb-3 "
              loading="lazy"
            />
            <time
              datetime={post.datePublished}
              class="block text-xs text-gray-400 px-2 "
            >
              {dateFormat(post.datePublished)}
            </time>

            <a href={`/blogs/${post.slug}`} data-sveltekit-preload-data="hover">
              <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
                {post.postTitle}
              </h3>
            </a>

            <p class="mt-0.5 px-2 text-sm font-medium  text-white">
              {post.seoMetaDescription}
            </p>

            <div class="mt-4 mb-2 flex flex-wrap gap-1 px-2 ">
              {#each parseTag[tagIndex(posts, post.postTitle)] as tag}
                <a
                  href="/tags"
                  class="whitespace-nowrap first-letter:capitalize rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-400 text-whte"
                >
                  {`#${tag}`}
                </a>
              {/each}
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>
</section>
