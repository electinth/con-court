<template>
  <div id="sharer-wrapper" class="flex space-x-2 md:space-x-4">
    <img
      :src="require(`assets/images/facebook.png`)"
      class="
        w-[25px]
        h-[25px]
        md:w-[39px] md:h-[39px]
        lg:h-[50px] lg:w-[50px]
        cursor-pointer
      "
      data-sharer="facebook"
      :data-url="BASE_URL"
      v-sharer
    />
    <img
      :src="require(`assets/images/twitter.png`)"
      class="
        w-[25px]
        h-[25px]
        md:w-[39px] md:h-[39px]
        lg:h-[50px] lg:w-[50px]
        cursor-pointer
      "
      data-sharer="twitter"
      :data-url="BASE_URL"
      v-sharer
    />
  </div>
</template>

<script>
import VueSharer from 'vue-sharer'
export default {
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      // BASE_URL: 'https://elect.in.th/con-court/',
      BASE_URL: 'https://electinth.github.io/con-court/',
    }
  },
}
</script>

<style lang="scss" scoped></style>
