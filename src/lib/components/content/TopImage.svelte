<script lang="ts">
  export let image: string;
  export let imageAlt: string;
  export let load : 'eager' | 'lazy'
</script>

<picture class="flex justify-center items-center">
  <img
    class="rounded-md  my-3"
    width="750"
    height="234"
    src={image}
    alt={imageAlt}
    loading={load}
  /></picture
>
