<script lang="ts">
  export let tags: string[];

  const color = [
    "bg-red-700",
    "bg-blue-400",
    "bg-yellow-500",
    "bg-gray-700",
    "bg-green-700 ",
    "bg-teal-700",
    "bg-cyan-500",
    "bg-indigo-700",
    "bg-lime-500",
    "bg-emerald-500",
  ];
</script>

<div
  class="mt-4 mb-2  flex items-center justify-center gap-2 px-2  md:px-20 lg:px-80 flex-wrap "
>
  {#each tags as tag}
    <a
      href={`/tags/${tag}`}
      class={`whitespace-nowrap rounded-full first-letter:capitalize  px-2.5 py-0.5 text-2xl font-semibold  ${
        color[Math.floor(Math.random() * 10)]
      } text-white`}
      data-sveltekit-preload-data="hover"
    >
      <span>
        {`#${tag}`}
      </span>
    </a>
  {/each}
</div>
