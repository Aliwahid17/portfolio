import type { Blog } from "src/app";

export const tagIndex = (post: Blog[] , title: string) : number => {
    return post.findIndex((position : Blog ) => position.postTitle === title);
};
