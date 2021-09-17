<template>
  <div>
    <img
      v-if="index === 0"
      :src="require('../../assets/images/ทักษิณ_ชินวัตร.svg')"
      class="h-[14px] md:h-[35px] mx-[1px] md:mx-[3px]"
    />
    <img
      v-if="index === 6"
      :src="require('../../assets/images/สุรยุทธ์_จุลานนท์.svg')"
      class="h-[14px] md:h-[35px] mx-[1px] md:mx-[3px]"
    />
    <img
      v-if="index === 9"
      :src="require('../../assets/images/สมัคร_สุนทรเวช.svg')"
      class="h-[14px] md:h-[35px] mx-[1px] md:mx-[3px]"
    />
    <img
      v-if="index === 10"
      :src="require('../../assets/images/สมชาย_วงศ์สวัสดิ์.svg')"
      class="h-[14px] md:h-[35px] mx-[1px] md:mx-[3px]"
    />
    <img
      v-if="index === 11"
      :src="require('../../assets/images/อภิสิทธิ์_เวชชาชีวะ.svg')"
      class="h-[14px] md:h-[35px] mx-[1px] md:mx-[3px]"
    />
    <img
      v-if="index === 13"
      :src="require('../../assets/images/ยิ่งลักษณ์_ชินวัตร.svg')"
      class="h-[14px] md:h-[35px] mx-[1px] md:mx-[3px]"
    />
    <img
      v-if="index === 18"
      :src="require('../../assets/images/ประยุทธ์_จันทร์โอชา.svg')"
      class="h-[14px] md:h-[35px] mx-[1px] md:mx-[3px]"
    />
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      required: false,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped></style>
