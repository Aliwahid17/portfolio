import { content } from '$lib/content';
import { project } from '$lib/project';
import type { PageLoad } from './$types';

export const load : PageLoad = async () => {
    return {
        posts : (await content()).posts.slice(0,4),
        tags : (await content()).parseTag.slice(0,4),
        projects : (await project())?.slice(0,4)
    };
}