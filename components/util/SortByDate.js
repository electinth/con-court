function SortByDate(data) {
    data.sort(function (a, b) {
        var aa = a.date.split('-').reverse().join(),
            bb = b.date.split('-').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
    return data

}
export default SortByDate