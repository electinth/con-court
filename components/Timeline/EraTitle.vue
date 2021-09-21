<template>
  <div
    id="era-wrapper"
    class="sticky top-0 pt-10 md:pt-24 mx-auto w-max md:w-[708px] z-10 mb-[20%]"
  >
    <div
      class="relative flex justify-center px-3 py-1 text-white bg-black  md:px-1 md:py-0 H_05"
    >
      <div id="img_era">
        <img
          :src="era_img"
          class="absolute top-[50%] translate-y-[-50%] md:w-[70px] w-[35px]"
        />
        <div class="w-[35px] md:w-[70px]" />
      </div>
      <p class="relative top-1" v-html="era_title"></p>
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
      handler() {
        this.era_title = FormatEraTilteStyle(this.data)
        this.era_img = ReturnEraImage(this.data)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
