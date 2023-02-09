import { content } from '$lib/content';
import type { PageLoad } from '../$types';


export const load: PageLoad = async () => {
    return {
        tags: (await content()).parseTag,
    };
}