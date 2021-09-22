<template>
  <div
    id="era-wrapper"
    class="sticky top-0 pt-14 md:pt-24 mx-auto w-max md:w-[708px] z-10 mb-[20%]"
  >
    <div
      class="relative flex justify-center px-3 py-1 text-white bg-black  md:px-1 md:py-0 H_05"
    >
      <div id="img_era" class="duration-700">
        <img
          :src="era_img"
          class="absolute top-[50%] translate-y-[-50%] md:w-[70px] w-[35px]"
        />
        <div class="w-[35px] md:w-[70px]" />
      </div>
      <p
        class="relative duration-700 top-1"
        v-html="era_title"
        id="this_is_title"
      ></p>
    </div>
  </div>
</template>

<script>
import FormatEraTilteStyle from '../util/FormatEraTilteStyle'
import ReturnEraImage from '../util/ReturnEraImage'
export default {
  props: {
    data: {
      type: Object,
      required: false,
      default: {},
    },
  },
  data() {
    return {
      era_title: '',
      era_img: '',
    }
  },

  watch: {
    data: {
      immediate: true,
      handler(newValue, oldValue) {
        const title_elem = document.getElementById('img_era')
        const era_img_elem = document.getElementById('this_is_title')
        if (
          (newValue.period === 'สุรยุทธ์ จุลานนท์' &&
            oldValue?.period === 'ทักษิณ ชินวัตร สมัยที่ 2') ||
          (newValue.period === 'สมัคร สุนทรเวช' &&
            oldValue?.period === 'สุรยุทธ์ จุลานนท์') ||
          (newValue.period === 'สมชาย วงศ์สวัสดิ์' &&
            oldValue?.period === 'สมัคร สุนทรเวช') ||
          (newValue.period === 'อภิสิทธิ์ เวชชาชีวะ' &&
            oldValue?.period === 'สมชาย วงศ์สวัสดิ์') ||
          (newValue.period === 'ยิ่งลักษณ์ ชินวัตร' &&
            oldValue?.period === 'อภิสิทธิ์ เวชชาชีวะ') ||
          (newValue.period === 'ประยุทธ์ จันทร์โอชา สมัยที่ 1' &&
            oldValue?.period === 'ยิ่งลักษณ์ ชินวัตร')
        ) {
          if (title_elem) title_elem.style.opacity = 0
          if (era_img_elem) era_img_elem.style.opacity = 0
          setTimeout(() => {
            this.era_title = FormatEraTilteStyle(this.data)
            this.era_img = ReturnEraImage(this.data)
            if (title_elem) title_elem.style.opacity = 1
            if (era_img_elem) era_img_elem.style.opacity = 1
          }, 500)
        } else {
          this.era_title = FormatEraTilteStyle(this.data)
          this.era_img = ReturnEraImage(this.data)
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
