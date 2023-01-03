export const tag = (data: string[][])  => {
    let result = new Set<string>();

    for (let index = 0; index < data.length; index++) {
        for (
            let position = 0;
            position < data[index].length;
            position++
        ) {
            result.add(data[index][position]);
        }
    }
    return [...result]
}