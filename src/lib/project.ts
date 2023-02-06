import type { Github } from 'src/app'

export const project = async () => {

    try {

        const response  = await fetch("https://api.github.com/users/aliwahid17/repos", {
            method: "GET",
        });

        const data  = await response.json();
        const details : Github[] = data.sort((first: { pushed_at: string }, second: { pushed_at: string }) => Date.parse(second.pushed_at) - Date.parse(first.pushed_at))
        return details


    } catch (e) {
        console.log(e)
    }
}
