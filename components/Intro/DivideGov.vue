<template>
  <div id="divide-gov-wrapper">
    <p class="font-bold text-center B_02" id="title">
      โดยเราจะแบ่งรัฐบาลออกเป็น 2 กลุ่มหลัก
    </p>
    <div
      id="divide-era"
      class="
        flex
        max-w-[821px]
        mx-auto
        mt-8
        space-x-20
        pb-16
        border-b-2 border-b-black
      "
    >
      <div id="tony-wrapper">
        <div class="px-4 py-1 font-bold text-white bg-black B_03">
          {{ tony.title }}
        </div>
        <div id="list-gov" class="flex flex-col mt-3 ml-5">
          <div
            v-for="(gov, index) in tony.list"
            :key="index"
            class="flex flex-1 mt-3"
          >
            <img
              :src="gov.img"
              :alt="gov.name"
              class="max-h-[60px] rotate-[-9deg] mr-3"
            />

            <div id="inside" class="flex flex-col justify-center">
              <div class="font-bold B_05">{{ gov.name }}</div>
              <div class="B_05" v-html="gov.date" />
            </div>
          </div>
        </div>
      </div>
      <div id="soldier-wrapper">
        <div class="px-4 py-1 font-bold text-white bg-black B_03">
          {{ soldier.title }}
        </div>
        <div id="list-gov" class="flex flex-col mt-3 ml-5">
          <div
            v-for="(gov, index) in soldier.list"
            :key="index"
            class="flex flex-1 mt-3"
          >
            <img
              :src="gov.img"
              :alt="gov.name"
              class="max-h-[60px] rotate-[-9deg] mr-3"
            />

            <div id="inside" class="flex flex-col justify-center">
              <div class="font-bold B_05">{{ gov.name }}</div>
              <div class="B_05" v-html="gov.date" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tony: {
        title: 'กลุ่มรัฐบาลสายทักษิณ ชินวัตร',
        list: [
          {
            name: 'รัฐบาลทักษิณ ชินวัตร',
            date: ' (สมัยที่ 1 พ.ศ. 2544 - 2548<br/> สมัยที่ 2 พ.ศ. 2548 - 2549)',
            img: require('../../assets/images/ทักษิณ_ชินวัตร.svg'),
          },
          {
            name: 'รัฐบาลสมัคร สุนทรเวช',
            date: '(พ.ศ. 2551) ',
            img: require('../../assets/images/สมัคร_สุนทรเวช.svg'),
          },
          {
            name: 'รัฐบาลสมชาย วงศ์สวัสด',
            date: '(พ.ศ. 2551)',
            img: require('../../assets/images/สมชาย_วงศ์สวัสดิ์.svg'),
          },
          {
            name: 'รัฐบาลยิ่งลักษณ์ ชินวัตร',
            date: '(พ.ศ. 2554 - 2557) ',
            img: require('../../assets/images/ยิ่งลักษณ์_ชินวัตร.svg'),
          },
        ],
      },
      soldier: {
        title: 'กลุ่มรัฐบาลกลุ่มอำนาจเก่า และทหาร',
        list: [
          {
            name: 'รัฐบาลสุรยุทธ์ จุลานนท์',
            date: ' (พ.ศ. 2549 - 2551) ',
            img: require('../../assets/images/สุรยุทธ์_จุลานนท์.svg'),
          },
          {
            name: 'รัฐบาลอภิสิทธิ์ เวชชาชีวะ',
            date: '(พ.ศ. 2551 - 2554)',
            img: require('../../assets/images/อภิสิทธิ์_เวชชาชีวะ.svg'),
          },
          {
            name: 'รัฐบาลประยุทธ์ จันทร์โอชา',
            date: '(สมัยที่ 1 พ.ศ. 2557 - 2562<br/> สมัยที่ 2 พ.ศ. 2562 - ปัจจุบัน)',
            img: require('../../assets/images/ประยุทธ์_จันทร์โอชา.svg'),
          },
        ],
      },
    }
  },
}
</script>
