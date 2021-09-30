<template>
  <div
    id="summary"
    class="container flex flex-col items-center mx-auto overflow-x-hidden mb-36"
  >
    <div class="w-11/12 lg:max-w-[745px] mx-auto mt-36 B_03 text-center">
      จากตัวอย่างข้อมูลทั้งหมด สะท้อนว่า
      ศาลรัฐธรรมนูญได้สร้างผลลัพธ์สำคัญทางการเมืองหลายครั้งในรอบระยะเวลา 10
      กว่าปีที่ผ่านมา
      และหลายเหตุการณ์สำคัญมีส่วนเชื่อมโยงกับการวินิจฉัยของศาลรัฐธรรมนูญในเรื่องนี้
      อย่างเช่น
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
      จากผลลงมติรายบุคคลของตุลาการรัฐธรรมนูญซึ่งมีส่วนร่วมกับการวินิจฉัยที่สร้างผลลัพธ์สำคัญทางการเมืองมากกว่า
      2 ครั้งขึ้นไป สามารถแบ่งได้ 2 กลุ่ม ดังนี้
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
      ผลลัพธ์สำคัญทางการเมืองเกิดขึ้นจากการวินิจฉัยของศาลรัฐธรรมนูญและการลงมติของตุลาการรัฐธรรมนูญได้
      ซึ่งสามารถถูกใช้เป็นเครื่องมือสร้างประโยชน์หรือโทษทางการเมืองแก่ฝ่ายใดฝ่ายหนึ่ง
      และในประเทศไทย
      เหตุการณ์สำคัญบางอย่างส่งผลต่อการทำงานของศาลรัฐธรรมนูญและตุลาการรัฐธรรมนูญในการสร้างผลลัพธ์สำคัญทางการเมืองด้วยเช่นกัน
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
