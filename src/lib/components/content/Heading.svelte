<script lang="ts">
  import { dateFormat } from "$lib/date";
  import { color } from "$lib/tagIndex";

  export let heading: string;
  export let date: string;
  export let time: string;
  export let latest: string;
  export let tags: string;
</script>


<header class="my-3 ">
  <h1
    class="font-bold text-3xl lg:text-4xl xl:text-5xl first:capitalize flex justify-center items-center text-center "
  >
    {heading}
  </h1>

  <p class="my-2 flex justify-center items-center whitespace-nowrap">
    Published on <time datetime={date} >&nbsp;{dateFormat(date)}</time
    >&nbsp;—&nbsp;{time} minutes read
  </p>

  {#if latest}
    <p class="my-2 flex justify-center items-center  ">
      Recently Updated on <time datetime={latest}
        >&nbsp;{dateFormat(latest)}</time
      >
    </p>
  {/if}

  <div class=" flex  flex-wrap justify-center items-center gap-1  ">
    {#each tags.split(",") as tag}
      <a
        href={`/tags/${tag}`}
        class={`${color()} whitespace-nowrap first-letter:capitalize rounded-full  px-2.5 py-0.5 text-base font-semibold  bg-cyan-700 text-white`}
      >
        {`#${tag}`}
      </a>
    {/each}
  </div>
</header>
