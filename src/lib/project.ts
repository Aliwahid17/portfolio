import type { Github, GithubColor} from 'src/app'

export const project = async () => {

    try {

        const response  = await fetch("https://api.github.com/users/aliwahid17/repos", {
            method: "GET",
        });

        const res = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json", {
            method: "GET",
        });

        const githubColor : GithubColor = await res.json()

        const data  = await response.json();
        const details : Github[] = data.sort((first: { pushed_at: string }, second: { pushed_at: string }) => Date.parse(second.pushed_at) - Date.parse(first.pushed_at))
        return {details,githubColor}


    } catch (e) {
        console.error(e)
    }
}

// export const githubColor = async() => {
//     try{
//         const response = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json", {
//             method: "GET",
//         });
//         const data = await response.json()
//         return data
//     } catch(e){
//         console.error(e)
//     }
// }