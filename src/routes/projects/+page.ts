import { project } from '$lib/project';
import type { PageLoad } from '../$types';


export const load: PageLoad = async () => {
    return {
        projects : (await project())?.details,
        color : (await project())?.githubColor
    };
}