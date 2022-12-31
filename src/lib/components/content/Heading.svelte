<script lang="ts">
  import { dateFormat } from "$lib/date";

  export let heading: string;
  export let date: string;
  export let time: string;
  export let latest: string;
</script>

<!-- <header class="my-5  md:mx-14 lg:mx-[372px] "> -->
<header class="my-5 ">
  <h1 class="font-semibold text-3xl first:capitalize flex justify-center items-center text-center ">{heading}</h1>

  <p class="my-2 flex justify-center items-center   ">
    Published on <time datetime={date}>&nbsp;{dateFormat(date)}</time
    >&nbsp;—&nbsp;{time} minutes read
  </p>

  {#if latest}
    <p class="my-2 flex justify-center items-center  ">
      Recently Updated on <time datetime={latest}>&nbsp;{dateFormat(latest)}</time>
    </p>
  {/if}
</header>

<!-- <header class="my-5 mx-3 md:mx-10 lg:mx-96 ">
  <h1 class="font-semibold text-4xl first:capitalize flex justify-center items-center   ">{heading}</h1>

  <p class="my-2 md:flex md:justify-center md:items-center   ">
    Published on <time datetime={date}>{dateFormat(date)}</time
    >&nbsp;—&nbsp;{time} minutes read
  </p>

  {#if latest}
    <p class="my-2 md:flex md:justify-center md:items-center  ">
      Recently Updated on  <time datetime={latest}>{dateFormat(latest)}</time>
    </p>
  {/if}
</header> -->


