<script lang="ts">
  import { dateFormat } from "$lib/date";
  import { tagIndex } from "$lib/tagIndex";
  import type { Blog } from "src/app";
  export let posts: Blog[];
  export let parseTag: string[][];

  function getImageUrl(name: string) {
    return new URL(
      `../assets/content/${name.slice(0, -5)}/${name}`,
      import.meta.url
    ).href;
  }

  export function parseURL(rawURL: string) {
    return new URL(rawURL.replace(/#/g, "%23"), "file://");
  }

  export function extractEntries(searchParams: URLSearchParams) {
    const entries: Array<[string, string[]]> = [];

    for (const [key, value] of searchParams) {
      entries.push([key, value.split(";")]);
    }

    return entries;
  }



  // console.log(parseURL(getImageUrl(posts[0].featuredImage)).href)
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mx-8 text-white "
>
  {#each posts as post}
    <article
      class="rounded-xl my-5 h-fit md:mx-2 bg-gradient-to-r  from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
    >
      <!-- src={`./assets/content/${post.featuredImage.slice(0, -5)}/${
            post.featuredImage
          }`} -->
      <div class="rounded-[10px]   bg-gray-900 p-2 ">
        <img
          src={parseURL(getImageUrl(post.featuredImage)).href}
          alt={post.featuredImageAlt}
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
              href={`/tags/${tag}`}
              class="whitespace-nowrap first-letter:capitalize rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-700 text-white"
            >
              {`#${tag}`}
            </a>
          {/each}
        </div>
      </div>
    </article>
  {/each}
</div>
