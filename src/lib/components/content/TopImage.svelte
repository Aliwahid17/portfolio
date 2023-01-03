<script lang="ts">
  export let image: string;
  export let imageAlt: string;
</script>

<picture class="flex justify-center items-center">
  <img class="rounded-md  my-3" width="750" height="268"  src={image} alt={imageAlt} loading="lazy" />
  <!-- <img class="rounded-md  my-3" width="750" height="150" src={image} alt={imageAlt} loading="lazy" /> -->
</picture>
