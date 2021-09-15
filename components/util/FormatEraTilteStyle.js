function FormatEraTilteStyle(era) {
    if (era.role === 'case') {
        if (era.period === 'ทักษิณ ชินวัตร สมัยที่ 1')
            return `ยุคของรัฐบาล<span class='${era.side_case === 1 ? 'text-positiveGreen' : 'text-negativeRed'
                }'>ทักษิณ</span> สมัยที่ 1`
        if (era.period === 'ทักษิณ ชินวัตร สมัยที่ 2')
            return `ยุคของรัฐบาล<span class='${era.side_case === 1 ? 'text-positiveGreen' : 'text-negativeRed'
                }'>ทักษิณ</span> สมัยที่ 2`
        if (era.period === 'สุรยุทธ์ จุลานนท์')
            return `ยุคของรัฐบาล<span class='${era.side_case === 1 ? 'text-positiveGreen' : 'text-negativeRed'
                }'>สุรยุทธ์</span>`
        if (era.period === 'สมัคร สุนทรเวช')
            return `ยุคของรัฐบาล<span class='${era.side_case === 1 ? 'text-positiveGreen' : 'text-negativeRed'
                }'>สมัคร</span>`
        if (era.period === 'สมชาย วงศ์สวัสดิ์')
            return `ยุคของรัฐบาล<span class='${era.side_case === 1 ? 'text-positiveGreen' : 'text-negativeRed'
                }'>สมชาย</span>`
        if (era.period === 'อภิสิทธิ์ เวชชาชีวะ')
            return `ยุคของรัฐบาล<span class='${era.side_case === 1 ? 'text-positiveGreen' : 'text-negativeRed'
                }'>อภิสิทธิ์</span>`
        if (era.period === 'ยิ่งลักษณ์ ชินวัตร')
            return `ยุคของรัฐบาล<span class='${era.side_case === 1 ? 'text-positiveGreen' : 'text-negativeRed'
                }'>ยิ่งลักษณ์</span>`
        if (era.period === 'ประยุทธ์ จันทร์โอชา สมัยที่ 1' || era.period === 'ประยุทธ์ จันทร์โอชา สมัยที่ 2')
            return `ยุคของรัฐบาล<span class='${era.side_case === 1 ? 'text-positiveGreen' : 'text-negativeRed'
                }'>ประยุทธ์</span>`
    } else {
        if (era.period === 'ทักษิณ ชินวัตร สมัยที่ 1')
            return `ยุคของรัฐบาลทักษิณ สมัยที่ 1`
        if (era.period === 'ทักษิณ ชินวัตร สมัยที่ 2')
            return `ยุคของรัฐบาลทักษิณ สมัยที่ 2`
        if (era.period === 'สุรยุทธ์ จุลานนท์')
            return `ยุคของรัฐบาลสุรยุทธ์`
        if (era.period === 'สมัคร สุนทรเวช')
            return `ยุคของรัฐบาลสมัคร`
        if (era.period === 'สมชาย วงศ์สวัสดิ์')
            return `ยุคของรัฐบาลสมชาย`
        if (era.period === 'อภิสิทธิ์ เวชชาชีวะ')
            return `ยุคของรัฐบาลอภิสิทธิ์`
        if (era.period === 'ยิ่งลักษณ์ ชินวัตร')
            return `ยุคของรัฐบาลยิ่งลักษณ์`
        if (era.period === 'ประยุทธ์ จันทร์โอชา สมัยที่ 1' || era.period === 'ประยุทธ์ จันทร์โอชา สมัยที่ 2')
            return `ยุคของรัฐบาลประยุทธ์`
    }
}

export default FormatEraTilteStyle