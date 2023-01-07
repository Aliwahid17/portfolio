<script lang="ts">
  import { dateFormat } from "$lib/date";
  import type { Github } from "src/app";
  export let value: Github[] = [];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mx-8 ">
  {#each value as content}
    <article
      class="rounded-xl my-5 md:mx-2 bg-gradient-to-r h-fit from-green-300 via-cyan-500 to-sky-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] shadow-gray-700/75"
    >
      <div class="rounded-[10px]   bg-gray-900 p-2 ">
        <div class="flex justify-between items-center ">
          <time
            datetime={content.created_at}
            class="block text-xs text-gray-400 px-2 "
          >
            {dateFormat(content.created_at)}
          </time>

          <time
            datetime={content?.pushed_at}
            class="block text-xs text-gray-400 px-2 "
          >
            Recent Commit: {dateFormat(content.pushed_at)}
          </time>
        </div>

        <a href={content.svn_url} target="_blank" rel="noreferrer">
          <h3 class="mt-0.5 px-2 text-lg font-bold text-white">
            {content.name}
          </h3>
        </a>

        <p class="mt-0.5 px-2 text-sm font-medium  text-white">
          {content.description}
        </p>

        <div
          class="mt-4 mb-2 flex flex-wrap gap-1 px-2 justify-between items-center text-white "
        >
          <span
            class="whitespace-nowrap rounded-full  px-2.5 py-0.5 text-xs font-semibold  bg-cyan-700 "
          >
            {content.language}
          </span>
          <span>
            👀 {content.watchers}
          </span>
        </div>
      </div>
    </article>
  {/each}
</div>
