export const project = async () => {
    const data = await (await fetch('https://api.github.com/users/aliwahid17/repos')).json()
    const details = data.sort((first: { pushed_at: string }, second: { pushed_at: string }) => Date.parse(second.pushed_at) - Date.parse(first.pushed_at)) 
    return details
}