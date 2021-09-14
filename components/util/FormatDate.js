function FormatDate(date) {

    const date_list = date.split('-')
    const day = parseInt(date_list[0], 10)
    const month = date_list[1]
    const year = date_list[2]
    const format_date = new Date(year, month, day)
    const result = format_date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const result_list = result.split(' ')
    return result_list[0] + ' ' + result_list[1]
}
export default FormatDate