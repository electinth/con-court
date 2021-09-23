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
        <p>
          - ข้อมูลการวินิจฉัยของศาลรัฐธรรมนูญ และรูปของตุลาการศาลรัฐธรรมนูญ
          จาก<a
            href="https://www.constitutionalcourt.or.th/"
            target="_blank"
            class="font-bold"
            >เว็บไซต์ศาลรัฐธรรมนูญ</a
          >
        </p>
        <p>
          - ข้อมูลเหตุการณ์สำคัญที่มีผลต่อศาลรัฐธรรมนูญ จาก<a
            class="font-bold"
            href="https://www.the101.world/judicialization-of-politics-and-lawfare/"
            target="_blank"
            >บทความ “จาก ‘ตุลาการภิวัตน์’ ถึง ‘นิติสงคราม’ :
            สงครามไม่มีวันแล้วเสร็จของปีกขวาไทย” ของเข็มทอง ต้นสกุลรุ่งเรือง</a
          >
        </p>
        <p class="mt-5">
          * หมายเหตุ: ข้อมูลการวินิจฉัยของศาลรัฐธรรมนูญที่รวบรวมมานี้
          เป็นเพียงตัวอย่างส่วนหนึ่งที่ทางผู้จัดทำเห็นว่าน่าสนใจ
          และส่งผลลัพธ์สำคัญทางการเมือง
          ซึ่งผู้อื่นอาจมีความคิดเห็นที่แตกต่างหรือรวบรวมในจำนวนที่แตกต่างกันได้
        </p>
      </div>
    </div>
    <div id="reuse" class="w-4/5 lg:max-w-[829px] mx-auto mt-6 md:mt-28">
      <p class="font-bold H_05">นโยบายการนำข้อมูลไปใช้ต่อ</p>
      <div class="B_05 mt-7">
        <p>
          ELECT มีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
          และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
          Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้
          โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า
          และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน
        </p>
        <p class="mt-5">
          หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
          ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
          หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ contact [at] elect.in.th
        </p>
      </div>
    </div>
    <div id="develop-team" class="w-4/5 lg:max-w-[829px] mx-auto mt-6 md:mt-28">
      <p class="font-bold H_05">อาสาสมัครร่วมพัฒนา</p>
      <div class="B_05 mt-7">
        <p class="font-bold">เขียนโปรแกรม</p>
        <p class="mt-2">โสภณ จำปาซ่อนกลิ่น</p>
        <p class="mt-3 font-bold md:mt-7">ออกแบบ</p>
        <p class="mt-2">นัฐพล ไก่แก้ว</p>
        <p class="mt-3 font-bold md:mt-7">สืบค้นและรวบรวมข้อมู</p>
        <p class="mt-2">สิทธิกานต์ ธีระวัฒนชัย</p>
        <p class="mt-3 font-bold md:mt-7">บรรณาธิการ</p>
        <p class="mt-2">ธนิสรา เรืองเดช</p>
        <p class="mt-3 font-bold md:mt-7">ประสานงานและจัดการอื่นๆ</p>
        <p class="mt-2">Punch Up</p>
        <p class="mt-3 font-bold md:mt-7">ร่วมพัฒนาโครงการ</p>
        <p class="mt-2">
          ตรวจสอบ ติดตาม และร่วมพัฒนาโปรเจ็กต์ได้ทาง Github
          โค้ดบนเว็บไซต์ทั้งหมดถูกเปิดเผยแบบสาธารณะเพื่อความโปร่งใสในการดำเนินการและพัฒนา
          และร่วมเป็นส่วนหนึ่งในการพัฒนา Civic Tech ในประเทศไทย
        </p>
        <p class="mt-5">
          หากคุณต้องการแบ่งปันทักษะด้านพัฒนาระบบ ออกแบบ รวบรวมข้อมูล
          หรือแบ่งปันข้อมูล รวมทั้งความช่วยเหลือด้านอื่น ๆ สามารถติดต่อได้ที่
          contact [at] elect.in.th
        </p>
      </div>
    </div>
    <a
      href="https://docs.google.com/spreadsheets/d/1HjASiOaEyTt--Yz3bj0sEuCOw6C_Kx76kO8Myvm_lYA/edit?pli=1#gid=0"
      target="_blank"
      id="download_data"
      class="flex items-center px-6 py-2 mx-auto mt-20 border-2 border-black cursor-pointer  w-max"
    >
      <img
        :src="require(`assets/images/icon_download.svg`)"
        class="mr-5 pointer-events-none"
      />
      <p class="pointer-events-none H_05">ดาวน์โหลดข้อมูล</p>
    </a>
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
