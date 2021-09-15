function ReturnEraImage(era) {
    if (era.period === 'ทักษิณ ชินวัตร สมัยที่ 1' || era.period === 'ทักษิณ ชินวัตร สมัยที่ 2' || era.period === 'ทักษิณ ชินวัตร')
        return require('../../assets/images/ทักษิณ_ชินวัตร.svg')
    if (era.period === 'สุรยุทธ์ จุลานนท์')
        return require('../../assets/images/สุรยุทธ์_จุลานนท์.svg')
    if (era.period === 'สมัคร สุนทรเวช')
        return require('../../assets/images/สมัคร_สุนทรเวช.svg')
    if (era.period === 'สมชาย วงศ์สวัสดิ์')
        return require('../../assets/images/สมชาย_วงศ์สวัสดิ์.svg')
    if (era.period === 'อภิสิทธิ์ เวชชาชีวะ')
        return require('../../assets/images/อภิสิทธิ์_เวชชาชีวะ.svg')
    if (era.period === 'ยิ่งลักษณ์ ชินวัตร')
        return require('../../assets/images/ยิ่งลักษณ์_ชินวัตร.svg')
    if (era.period === 'ประยุทธ์ จันทร์โอชา สมัยที่ 1' || era.period === 'ประยุทธ์ จันทร์โอชา สมัยที่ 2' || era.period === 'ประยุทธ์ จันทร์โอชา')
        return require('../../assets/images/ประยุทธ์_จันทร์โอชา.svg')
}
export default ReturnEraImage