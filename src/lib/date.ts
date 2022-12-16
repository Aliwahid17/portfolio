export const dateFormat = (date : string) => {
    const monthName = [
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
    const wholeDateArray  = wholeDate.split("-")
    const publishDate = `${monthName[+wholeDateArray[1] - 1]} ${wholeDateArray[2]}, ${wholeDateArray[0]}`
    return publishDate

}