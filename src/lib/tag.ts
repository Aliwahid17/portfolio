export const tag = (data: any[]) => {
    let result = new Set();

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