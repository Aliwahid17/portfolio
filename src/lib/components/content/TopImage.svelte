<script lang="ts">
  export let image: string;
  export let imageAlt: string;


//   function getImageUrl(image : string) {
//   return new URL(`lib/assets/content/${image.slice(0,-4)}/${image}`, import.meta.resolve(`lib/assets/content/${image.slice(0,-4)}/${image}`,)).href
// }

// console.log(getImageUrl(image))

</script>

<!-- <img src={   `   lib/assets/content/${image.slice(0,-4)}/${image}     ` } alt={imageAlt}> -->
<picture>
    <img src={image} alt={imageAlt} loading='lazy' />
</picture>