import * as cookie from 'cookie';
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }:any)=> {
    const cookies = cookie.parse(event.request.headers.get('cookie') || '');
    event.locals.userid = cookies['userid'] || crypto.randomUUID();

    const response = await resolve(event);

    if (!cookies['userid'] ) {
        response.headers.set(
            'set-cookie',
            cookie.serialize('userid', event.locals.userid, {
                path: '/',
                httpOnly: true
            })
        );
    }

    return response;
};
