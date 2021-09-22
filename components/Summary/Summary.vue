<template>
  <div
    id="summary-wrapper"
    class="container flex flex-col items-center mx-auto mb-36"
  >
    <div class="w-11/12 lg:max-w-[745px] mx-auto mt-36 B_03 text-center">
      จากรายละเอียดของงานแสดงให้เห็นว่า
      มีการวินิจฉัยของศาลรัฐธรรมนูญหลายครั้งที่สร้างผลลัพธ์สำคัญทางการเมือง
      และเหตุการณ์สำคัญหลายครั้งเชื่อมโยงกับการทำงานของศาลรัฐธรรมนูญในเรื่องนี้
      โดยในรอบระยะเวลา 10 กว่าปีที่ผ่านมา มีตัวอย่างที่ชัดเจนอยู่หลายประการ เช่น
      ...
    </div>
    <Summary01 />
    <Summary02 />
    <Summary03 />
    <Summary04 />
    <div
      class="
        B_03
        w-10/12
        mx-auto
        lg:max-w-[673px]
        text-center
        md:py-10
        py-3
        md:px-14
        px-6
        border border-black
        my-[60px]
      "
    >
      เมื่อสังเกตการลงมติของตุลาการรัฐธรรมนูญที่เกี่ยวข้องกับการวินิจฉัยทั้งหมดของตนเอง
      ในจำนวนตั้งแต่ 2 ครั้งขึ้นไป
      ก็แสดงให้เห็นถึงแนวโน้มของการลงมติที่น่าสนใจอยู่เหมือนกัน
      โดยสามารถแบ่งได้เป็น 2 กลุ่มหลัก ๆ ดังนี้
    </div>
    <div class="mb-7 B_05 text-darkGrey">(คลิกที่รูปเพื่อดูผลการลงมติ)</div>
    <SummaryGroup01 />
    <SummaryGroup02 />
    <div
      class="
        w-10/12
        mx-auto
        lg:w-[673px]
        border border-black
        md:py-11
        py-6
        md:px-5
        px-2
        B_03
        text-center
        md:mt-36
        mt-20
      "
    >
      ทั้งหมดนี้ก็แสดงให้เห็นชัดเจนว่า
      คำวินิจฉัยศาลรัฐธรรมนูญหลายครั้งสร้างผลทางการเมืองอย่างชัดเจน
      และหลายครั้งตุลาการศาลรัฐธรรมนูญก็มีส่วนในการสร้างผลลัพธ์ทางการเมืองที่สร้างประโยชน์ให้ฝ่ายใดฝ่ายหนึ่งอย่างมีนัยสำคัญ
      ซึ่งความเชื่อมโยงที่มาจากเหตุการณ์สำคัญทางเมือง
      ก็ส่งผลต่อการทำงานของศาลรัฐธรรมนูญและตุลาการรัฐธรรมนูญด้วยเช่นกัน
    </div>
    <Sharer class="mt-24" />
  </div>
</template>

<script>
import Sharer from '../util/Sharer.vue'
export default {
  components: {
    Sharer,
  },
}
</script>

<style lang="scss">
#list-dot {
  min-width: 4px;
  height: 4px;
  border-radius: 4px;
  background: #000;
  display: inline-block;
  margin: 0 8px;
  position: relative;
  top: -2.5px;
  transform: translateY(-50%);
  @media screen and (max-width: 767px) {
    top: -1.5px;
    min-width: 3px;
    height: 3px;
    margin-right: 5px;
  }
}
</style>
