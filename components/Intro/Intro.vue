<template>
  <div id="intro-wrapper">
    <div class="relative">
      <div class="h-screen" />
      <div class="absolute top-[7%] z-20 w-full md:h-[2%] h-[50px]">
        <div
          class="
            left-[50%]
            absolute
            H_title
            whitespace-nowrap
            md:bottom-[18%]
            bottom-[45%]
          "
          style="transform: translateX(-50%); z-index: 25"
        >
          ศาลรัฐธรรมนูญ
        </div>
        <div
          class="left-[50%] absolute H_title z-40 top-[20%] whitespace-nowrap"
          style="transform: translateX(-50%)"
        >
          กับการเมือง
        </div>
        <img
          :src="require(`assets/images/logo.png`)"
          class="
            md:w-[82px] md:h-[82px]
            w-[37px]
            h-[37px]
            z-30
            left-[50%]
            absolute
          "
          style="transform: translateX(-50%)"
        />
        <img
          :src="require(`assets/images/star_bg.png`)"
          class="
            absolute
            z-20
            h-screen
            object-cover
            md:w-[80%]
            left-[50%]
            top-[50%]
          "
          style="transform: translate(-50%, -50%)"
        />
      </div>
      <img
        :src="require(`assets/images/concourt_building.svg`)"
        class="
          absolute
          top-0
          z-20
          w-[200px]
          md:w-[500px] md:top-[12%]
          top-[14%]
          left-[48%]
        "
        style="transform: translateX(-50%)"
      />
      <img
        :src="require(`assets/images/bg.png`)"
        class="absolute top-0 z-0 h-[50%] object-cover"
      />
      <img
        :src="require(`assets/images/desktop_newspaper.png`)"
        class="absolute top-[15%] z-10 h-[60%] object-cover hidden md:block"
      />
      <img
        :src="require(`assets/images/mobile_newspaper.png`)"
        class="absolute top-[15%] z-10 h-[50%] object-cover md:hidden"
      />

      <IntroStep />
    </div>
    <DivideGov />
    <div class="w-10/12 lg:max-w-[815px] mx-auto text-center B_03 mt-16">
      นอกจากนี้ เราขอกล่าวถึงตัวอย่าง "6 เหตุการณ์สำคัญ" ในช่วงเวลาดังกล่าว
      ที่ส่งผลต่อการทำงานของศาลรัฐธรรมนูญ ในการสร้างผลลัพธ์สำคัญทางการเมือง
      เพื่อแสดงให้เห็นถึงความสัมพันธ์ของเหตุการณ์กับการทำงานของศาลรัฐธรรมนูญในเรื่องนี้
    </div>
    <div
      id="start"
      class="px-8 py-1 mx-auto mt-20 font-bold border border-black  md:border-2 H_05 w-max md:mt-28"
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
