<template>
  <div id="about-wrapper">
    <elect-navbar
      title-text="Constitutional Court"
      dark="false"
      class="absolute z-[99] w-full"
    >
      <div class="flex items-center space-x-5 text-white B_06">
        <NuxtLink to="/" @click.native="Timeline">Timeline</NuxtLink>
        <NuxtLink to="/" @click.native="Summary">Summary</NuxtLink>
        <NuxtLink to="/about"> About </NuxtLink>
      </div>
    </elect-navbar>
    <div class="pt-20 text-center md:pt-32 H_04" id="about-title">
      เกี่ยวกับโครงการ
    </div>
    <div
      id="target"
      class="w-4/5 lg:max-w-[829px] mx-auto mt-6 md:mt-14 lg:mt-28"
    >
      <p class="font-bold H_05">เป้าหมาย</p>
      <div class="B_05 mt-7">
        นับตั้งแต่ที่ศาลรัฐธรรมนูญถูกจัดตั้งขึ้นเป็นองค์กรตุลาการตามรัฐธรรมนูญจนถึงปัจจุบัน
        ศาลรัฐธรรมนูญได้ออกคำวินิจฉัยในเรื่องต่าง ๆ ไปแล้วมากกว่า 350 เรื่อง
        ซึ่งปฏิเสธไม่ได้เลยว่า
        คำวินิจฉัยของศาลในหลายเรื่องสร้างผลลัพธ์สำคัญต่อเรื่องการเมืองของประเทศไทยอย่างเห็นได้ชัด
        <br /><br />
        การวินิจฉัยให้ยุบหรือไม่ยุบพรรคการเมือง
        การวินิจฉัยให้นายกรัฐมนตรีพ้นหรือไม่พ้นจากตำแหน่ง
        การวินิจฉัยให้กฎหมายที่เป็นหรือสอดคล้องกับความต้องการของรัฐบาลนั้น ๆ
        ไปต่อได้หรือไม่ได้ ตัวอย่างเหล่านี้เกิดขึ้นโดยศาลรัฐธรรมนูญ
        ที่ตุลาการรัฐธรรมนูญแต่ละคน แต่ละชุด
        มีส่วนร่วมในเรื่องนี้ผ่านการลงมติของตนเองในคำวินิจฉัยเรื่องนั้น ๆ
        <br /><br />
        นอกจากนั้น
        เหตุการณ์สำคัญในทางการเมืองจำนวนหนึ่งก็ส่งผลการทำงานของศาลรัฐธรรมนูญในการทำคำวินิจฉัยที่สร้างผลลัพธ์สำคัญทางการเมืองเช่นกัน
        โดยบางเหตุการณ์ก็สามารถส่งผลให้การทำงานของศาลรัฐธรรมนูญ
        เกิดแนวโน้มของของผลลัพธ์บางอย่างที่น่าสนใจ
        <br /><br />
        ELECT
        ขอพาทุกคนดูตัวอย่างคำวินิจฉัยศาลรัฐธรรมนูญที่ก่อให้เกิดผลลัพธ์สำคัญทางการเมืองไทย
        พร้อมกับเหตุการณ์สำคัญทางการเมืองที่ส่งผลการทำคำวินิจฉัยที่สร้างผลลัพธ์สำคัญทางการเมือง
        รวมถึงผลงานของตุลาการรัฐธรรมนูญแต่ละคนในศาลรัฐธรรมนูญแต่ละชุด
        ว่าลงมติในคำวินิจฉัยที่สร้างผลลัพธ์สำคัญทางการเมืองอย่างไรกันบ้าง
      </div>
    </div>
    <div id="source" class="w-4/5 lg:max-w-[829px] mx-auto mt-6 md:mt-28">
      <p class="font-bold H_05">ที่มาของข้อมูล & ข้อจำกัด</p>
      <div class="B_05 mt-7">
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </div>
    </div>
    <div id="develop-team" class="w-4/5 lg:max-w-[829px] mx-auto mt-6 md:mt-28">
      <p class="font-bold H_05">อาสาสมัครร่วมพัฒนา</p>
      <div class="B_05 mt-7">
        <p class="font-bold">เขียนโปรแกรม</p>
        <p class="mt-2">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>
        <p class="mt-3 font-bold md:mt-7">ออกแบบ</p>
        <p class="mt-2">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>
        <p class="mt-3 font-bold md:mt-7">สืบค้นและรวบรวมข้อมู</p>
        <p class="mt-2">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>
        <p class="mt-3 font-bold md:mt-7">บรรณาธิการ</p>
        <p class="mt-2">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>
        <p class="mt-3 font-bold md:mt-7">ประสานงานและจัดการอื่นๆ</p>
        <p class="mt-2">
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley
        </p>
      </div>
    </div>
    <div class="flex items-center justify-center mt-24 mb-32 h-max">
      <div class="mr-[10px] B_05">share</div>
      <Sharer />
    </div>
    <elect-footer />
  </div>
</template>

<script>
import Sharer from '../components/util/Sharer.vue'
export default {
  components: {
    Sharer,
  },
  methods: {
    Timeline() {
      setTimeout(() => {
        document
          .getElementById('timeline')
          .scrollIntoView({ behavior: 'smooth' })
      }, 300)
    },
    Summary() {
      setTimeout(() => {
        document
          .getElementById('summary')
          .scrollIntoView({ behavior: 'smooth' })
      }, 300)
    },
  },
}
</script>

<style lang="scss" scoped></style>
