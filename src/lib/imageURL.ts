import Best_Medium_Format_Camera_for_Starting_Out from '$lib/assets/content/demo/demo.webp'
import Best_Medium_Format_Camera_for_Starting_Out2 from '$lib/assets/content/demo2/demo2.webp'

const ImageURL  = {
    "Best-Medium-Format-Camera-for-Starting-Out" : Best_Medium_Format_Camera_for_Starting_Out,
    "Best-Medium-Format-Camera-for-Starting-Out2": Best_Medium_Format_Camera_for_Starting_Out2,
}  

export default ImageURL

export const url = (name: string|undefined) => {
    const title = name?.replaceAll(" ", "-") as string;
    return Object(ImageURL)[title];
};