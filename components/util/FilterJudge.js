import Judge from 'static/contents/ตุลาการ.json'

function FilterJudge(side_case, number_case) {
    const result = Judge.filter(j => j[`case_${number_case}`] == side_case);
    return result
}
export default FilterJudge