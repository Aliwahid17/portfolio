<script lang="ts">
  export let image: string;
  export let imageAlt: string;
</script>

<picture class="flex justify-center items-center">
  <img class=" rounded-md  my-3  " src={image} alt={imageAlt} loading="lazy" />
</picture>
