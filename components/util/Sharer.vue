<template>
  <div id="sharer-wrapper" class="flex space-x-2 md:space-x-4">
    <img
      :src="require(`assets/images/facebook_share.svg`)"
      class="
        w-[30px]
        h-[30px]
        md:w-[39px] md:h-[39px]
        lg:h-[50px] lg:w-[50px]
        cursor-pointer
        sharer
        button
      "
      data-sharer="facebook"
      :data-url="BASE_URL"
      v-sharer
    />
    <img
      :src="require(`assets/images/twitter_share.svg`)"
      class="
        w-[30px]
        h-[30px]
        md:w-[39px] md:h-[39px]
        lg:h-[50px] lg:w-[50px]
        cursor-pointer
        sharer
        button
      "
      data-sharer="twitter"
      :data-url="BASE_URL"
      v-sharer
    />
    <img
      :src="require(`assets/images/line_share.svg`)"
      class="
        w-[30px]
        h-[30px]
        md:w-[39px] md:h-[39px]
        lg:h-[50px] lg:w-[50px]
        cursor-pointer
        sharer
        button
      "
      data-sharer="line"
      :data-url="BASE_URL"
      facebook_share.svg
    />
    <script src="https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js" />
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
      BASE_URL: 'https://elect.in.th/con-court/',
      // BASE_URL: 'https://electinth.github.io/con-court/',
    }
  },
}
</script>

<style lang="scss" scoped></style>
