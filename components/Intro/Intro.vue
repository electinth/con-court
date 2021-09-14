<template>
  <div id="intro-wrapper">
    <IntroStep />
    <DivideGov />
    <div class="max-w-[815px] mx-auto text-center B_03 mt-16">
      นอกจากนี้ เราขอกล่าวถึงตัวอย่าง "6 เหตุการณ์สำคัญ" ในช่วงเวลาดังกล่าว
      ที่ส่งผลต่อการทำงานของศาลรัฐธรรมนูญ ในการสร้างผลลัพธ์สำคัญทางการเมือง
      เพื่อแสดงให้เห็นถึงความสัมพันธ์ของเหตุการณ์กับการทำงานของศาลรัฐธรรมนูญในเรื่องนี้
    </div>
    <div
      id="start"
      class="px-8 mx-auto font-bold border-2 border-b H_05 w-max mt-28"
    >
      <div class="relative top-1">เริ่ม!</div>
    </div>
  </div>
</template>

<script>
import IntroStep from './IntroStep.vue'
import DivideGov from './DivideGov.vue'
export default {
  components: {
    IntroStep,
    DivideGov,
  },
}
</script>
