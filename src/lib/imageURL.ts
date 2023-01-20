import What_things_sveltekit_offer_better_than_other_javascript_frameworks from '$lib/assets/content/what-things-sveltekit-offer-better-than-other-javascript-frameworks/Svelte-based-meta-framework-sveltekit_320x240.webp'

const ImageURL  = {
    "What-things-sveltekit-offer-better-than-other-javascript-frameworks?": What_things_sveltekit_offer_better_than_other_javascript_frameworks
}  

export default ImageURL

export const url = (name: string|undefined) => {
    const title = name?.replaceAll(" ", "-") as string;
    return Object(ImageURL)[title];
};