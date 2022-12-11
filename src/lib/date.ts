export const dateFormat = (date : string) => {
    const MONTH_NAME = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ]

    const wholeDate = date.split("T")[0]
    const wholeDateArray : any  = wholeDate.split("-")
    const publishDate : string = `${MONTH_NAME[wholeDateArray[1] - 1]} ${wholeDateArray[2]}, ${wholeDateArray[0]} `
    return publishDate

}