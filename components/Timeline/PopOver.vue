<template>
  <div id="popover-wrapper" class="mt-2 bg-white">
    <p class="font-bold B_05" id="name">
      {{ person.name_surname_person }}
    </p>
    <p id="position" class="B_05">
      ที่มา <span v-html="person.position_person" />
    </p>
    <div id="person-case-wrapper" class="grid grid-cols-2 mt-2">
      <div
        v-for="c in case_list_formated"
        :key="c.name"
        class="flex my-[2px]"
        v-if="SumAllInCaseList(c.list_case) > 0"
      >
        <img :src="ReturnEraImage(c.name)" class="h-[20px]" />
        <div class="grid grid-cols-4">
          <div
            v-for="(item, index) in c.list_case"
            :key="index"
            class="m-[1px]"
          >
            <div
              class="
                w-[8px]
                h-[8px]
                md:w-[11px] md:h-[11px]
                rounded-full
                border border-black
              "
              v-if="item"
              :class="item === 1 ? 'bg-positiveGreen' : 'bg-negativeRed'"
            />
            <div
              v-else
              class="
                w-[8px]
                h-[8px]
                md:w-[11px] md:h-[11px]
                rounded-full
                border border-absentGray
                bg-lightGrey
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: {
      type: Object,
      required: false,
      default: {},
    },
    case_list_formated: {
      type: Array,
      required: false,
      default: [],
    },
  },
  data() {
    return {
      era_img: '',
    }
  },

  methods: {
    ReturnEraImage(era) {
      if (era === 'ทักษิณ ชินวัตร')
        return require('assets/images/ทักษิณ_ชินวัตร.svg')
      if (era === 'สุรยุทธ์ จุลานนท์')
        return require('assets/images/สุรยุทธ์_จุลานนท์.svg')
      if (era === 'สมัคร สุนทรเวช')
        return require('assets/images/สมัคร_สุนทรเวช.svg')
      if (era === 'สมชาย วงศ์สวัสดิ์')
        return require('assets/images/สมชาย_วงศ์สวัสดิ์.svg')
      if (era === 'อภิสิทธิ์ เวชชาชีวะ')
        return require('assets/images/อภิสิทธิ์_เวชชาชีวะ.svg')
      if (era === 'ยิ่งลักษณ์ ชินวัตร')
        return require('assets/images/ยิ่งลักษณ์_ชินวัตร.svg')
      if (era === 'ประยุทธ์ จันทร์โอชา')
        return require('assets/images/ประยุทธ์_จันทร์โอชา.svg')
    },
    SumAllInCaseList(list) {
      return list.reduce((a, b) => a + b, 0)
    },
  },
}
</script>

<style lang="scss" scoped></style>
