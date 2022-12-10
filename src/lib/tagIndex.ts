import { sortContent } from "./content";


export const tagIndex = async (title: string) => {
    const value = await sortContent();
    return value.findIndex((position: any) => position.postTitle === title);
};