<script lang="ts">
  export let source: string;
  export let title: string;
</script>

<a
  href={source}
  target="_blank"
  rel="noreferrer"
  class="text-[#FFE77AFF]  font-semibold hover:text-red-500 hover:underline"
>
  <span>
  {title}
  </span>
</a>
