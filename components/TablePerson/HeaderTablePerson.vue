<template>
  <div
    id="header-tabler-person"
    class="
      absolute
      w-max
      mx-auto
      left-[50%]
      bottom-[12px]
      flex
      h-[61px]
      border-2 border-absentGray
    "
    style="transform: translateX(-50%)"
  >
    <div
      v-for="item in era_case_list"
      :key="item.name"
      class="relative flex items-end h-full pb-3"
      :class="{
        'bg-headertable':
          item.name === 'ทักษิณ ชินวัตร' ||
          item.name === 'สมัคร สุนทรเวช' ||
          item.name === 'อภิสิทธิ์ เวชชาชีวะ' ||
          item.name === 'ประยุทธ์ จันทร์โอชา',
      }"
    >
      <img
        :src="ReturnEraImage(item.name)"
        class="absolute h-[32px]"
        style="top: 0%; transform: translate(-50%, -50%); left: 50%"
      />
      <div
        v-for="c in item.list_case"
        :key="c"
        class="flex w-[24px] h-[24px] justify-center B_05 font-bold mx-[6px]"
      >
        {{ c }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      era_case_list: [
        {
          name: 'ทักษิณ ชินวัตร',
          list_case: [1, 2, 3, 4],
        },
        {
          name: 'สุรยุทธ์ จุลานนท์',
          list_case: [5, 6],
        },
        {
          name: 'สมัคร สุนทรเวช',
          list_case: [7],
        },
        {
          name: 'สมชาย วงศ์สวัสดิ์',
          list_case: [8],
        },
        {
          name: 'อภิสิทธิ์ เวชชาชีวะ',
          list_case: [9, 10],
        },
        {
          name: 'ยิ่งลักษณ์ ชินวัตร',
          list_case: [11, 12, 13, 14],
        },
        {
          name: 'ประยุทธ์ จันทร์โอชา',
          list_case: [15, 16, 17, 18, 19, 20, 21, 22],
        },
      ],
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
  },
}
</script>

<style lang="scss" scoped></style>
