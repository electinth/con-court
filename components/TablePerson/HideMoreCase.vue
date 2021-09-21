<template>
  <div
    id="hide-more-case-wrapper"
    class="
      lg:sticky
      fixed
      lg:w-[80%]
      w-screen
      h-full
      bg-tableHead
      z-20
      border border-black
      top-[133px]
      md:top-[241px]
      B_05
      py-7
      px-12
      flex flex-col
      lg:flex-row
      space-x-3
      hidden
      overflow-y-auto
      lg:overflow-y-visible
      mx-auto
      z-[60]
    "
  >
    <img
      :src="require('assets/images/close.svg')"
      class="
        absolute
        top-0
        right-0
        cursor-pointer
        w-[16px]
        md:w-[26px]
        m-3
        lg:m-0
      "
      @click="closeModal"
    />
    <div class="flex flex-col space-y-3 lg:flex-1">
      <div v-for="(item, index) in hint_1" :key="index + 1" class="flex">
        <div class="mr-5 font-bold">{{ item.number }}</div>
        <div>{{ item.content }}</div>
      </div>
    </div>
    <div class="flex flex-col space-y-3 lg:flex-1">
      <div v-for="(item, index) in hint_2" :key="index + 1" class="flex">
        <div class="mr-5 font-bold">{{ item.number }}</div>
        <div>{{ item.content }}</div>
      </div>
    </div>
    <div class="flex flex-col space-y-3 lg:flex-1">
      <div v-for="(item, index) in hint_3" :key="index + 1" class="flex">
        <div class="mr-5 font-bold">{{ item.number }}</div>
        <div>{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hint_1: [
        {
          number: 1,
          content: `วินิจฉัยว่าทักษิณ ชินวัตร ไม่หลุด
จากตำแหน่งนายกรัฐมนตรี
จากกรณี "คดีซุกหุ้น" `,
        },
        {
          number: 2,
          content: `วินิจฉัยว่า กฎหมายซึ่งอาจเอื้อประโยชน์
ทางธุรกิจแก่ บริษัท ชินคอร์ปอเรชั่น จำกัด
(มหาชน) โดยเฉพาะ ไม่มีปัญหาเรื่อง
ความชอบด้วยรัฐธรรมนูญ`,
        },
        {
          number: 3,
          content: `วินิจฉัยไม่รับคำร้องของ 28 สว. ที่ขอให้
ศาลรัฐธรรมนูญวินิจฉัยให้ ทักษิณ ชินวัตร
พ้นจากตำแหน่งนายกรัฐมนตรี`,
        },
        {
          number: 4,
          content: `วินิจฉัยว่า การเลือกตั้งสมาชิกสภาผู้แทนราษฎร
เมื่อวันที่ 2 เมษายน พ.ศ. 2549 เป็นโมฆะ`,
        },
        {
          number: 5,
          content: `วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบ
พรรคประชาธิปัตย์`,
        },
        {
          number: 6,
          content: `วินิจฉัยให้มีคําสั่งยุบพรรคไทยรักไทย
จากกรณี "จ้างพรรคเล็กลงเลือกตั้ง"`,
        },
        {
          number: 7,
          content: `วินิจฉัยให้สมัคร สุนทรเวช หลุดจาก
ตำแหน่งนายกรัฐมนตรี จากกรณี
"เป็นพิธีกรรายการทีวี"`,
        },
      ],
      hint_2: [
        {
          number: 8,
          content: `วินิจฉัยให้มีคําสั่งยุบพรรคพลังประชาชน
จากกรณี "ทุจริตการเลือกตั้ง"`,
        },
        {
          number: 9,
          content: `วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบพรรค
ประชาธิปัตย์`,
        },
        {
          number: 10,
          content: `วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบพรรค
ประชาธิปัตย์`,
        },
        {
          number: 11,
          content: `วินิจฉัยว่า การแก้ไขเพิ่มเติมรัฐธรรมนูญ
เกี่ยวกับที่มาและคุณสมบัติของสมาชิกวุฒิสภา
ขัดรัฐธรรมนูญ`,
        },
        {
          number: 12,
          content: `วินิจฉัยให้ร่าง พ.ร.บ.กู้เงิน 2 ล้านล้าน ตกไป`,
        },
        {
          number: 13,
          content: `วินิจฉัยว่า การเลือกตั้งสมาชิกสภาผู้แทนราษฎร
ที่จัดขึ้นเมื่อวันที่ 2 กุมภาพันธ์ พ.ศ. 2557 เป็นโมฆะ`,
        },
        {
          number: 14,
          content: `วินิจฉัยให้ยิ่งลักษณ์ ชินวัตร หลุดจากตำแหน่ง
นายกรัฐมนตรี จากกรณี "โยกย้ายข้าราชการ"`,
        },
        {
          number: 15,
          content: `วินิจฉัยให้มาตรา 61 วรรคสอง แห่งพระราชบัญญัติ
ว่าด้วยการออกเสียงประชามติร่างรัฐธรรมนูญ
พ.ศ. 2559 ไม่ขัดรัฐธรรมนูญ`,
        },
      ],
      hint_3: [
        {
          number: 16,
          content: `วินิจฉัยให้มีคําสั่งมีคำสั่งยุบพรรคไทยรักษาชาติ
จากกรณี "เสนอชื่อทูลกระหม่อมฯ เป็นแคนดิเดต
นายกรัฐมนตรี"`,
        },
        {
          number: 17,
          content: `วินิจฉัยว่า สูตรคำนวณ สส. ปาร์ตี้ลิสต์ ไม่ขัด
รัฐธรรมนูญ`,
        },
        {
          number: 18,
          content: `วินิจฉัยว่า พลเอกประยุทธ์ จันทร์โอชา ไม่หลุดจาก
ตำแหน่ง นายกรัฐมนตรี จากกรณี "ดำรงตำแหน่ง
หัวหน้า คสช."`,
        },
        {
          number: 19,
          content: `วินิจฉัยให้ธนาธร จึงรุ่งเรืองกิจ หลุดจากตำแหน่ง
สส. จากกรณี "คดีถือหุ้นสื่อ"`,
        },
        {
          number: 20,
          content: `วินิจฉัยให้มีคำสั่งยุบพรรคอนาคตใหม่ จากกรณี
"กู้ยืมเงินหัวหน้าพรรค"`,
        },
        {
          number: 21,
          content: `วินิจฉัยว่า พลเอกประยุทธ์ จันทร์โอชา ไม่หลุด
จากตำแหน่งนายกรัฐมนตรี  จากกรณี
"คดีบ้านพักหลวง"`,
        },
        {
          number: 22,
          content: `วินิจฉัยว่า ร้อยเอกธรรมนัส พรหมเผ่า ไม่หลุด
จากตำแหน่ง สส. และรัฐมนตรี ในกรณี
"คดียาเสพติดที่ออสเตรเลีย"`,
        },
      ],
    }
  },
  methods: {
    closeModal() {
      document.getElementById('hide-more-case-wrapper').style.display = 'none'
      document.getElementById('table-judge-wrapper').style.overflowY = 'auto'
      document.body.style.overflow = 'auto'
    },
  },
}
</script>

<style lang="scss" scoped></style>
