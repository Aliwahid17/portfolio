export function typewriter() {
    let iteration = 0;
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: string | number | NodeJS.Timeout | undefined = undefined;
    const target = event?.target as HTMLElement | null;
    const dataValue = target?.dataset.value;

    clearInterval(interval)

    if (!target || !dataValue) {
        return;
    }

    if (typeof window !== "undefined") {

        interval = window.setInterval(() => {
            target.innerText = target.innerText.split("").map((letter, index) => {
                if (index < iteration) {
                    return dataValue[index]
                }
                return letters[Math.floor(Math.random() * 26)]

            }).join("")

            if (iteration >= dataValue.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;

        }, 30)
    }
}