import { content } from '$lib/content';
import type { PageLoad } from '../$types';


export const load: PageLoad = async () => {
    return {
        posts: (await content()).posts,
        tags: (await content()).parseTag,
    };
}