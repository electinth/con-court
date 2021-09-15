<template>
  <div id="era-wrapper" class="sticky top-0 pt-24 mx-auto w-[708px] z-10">
    <div class="relative flex justify-center px-1 text-white bg-black H_05">
      <div id="img_era">
        <img
          :src="era_img"
          width="70px"
          class="absolute top-[50%] translate-y-[-50%]"
        />
        <div class="w-[70px]" />
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
