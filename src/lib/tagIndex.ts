export const tagIndex = (post: any, title: string) => {
    return post.findIndex((position: any) => position.postTitle === title);
};
