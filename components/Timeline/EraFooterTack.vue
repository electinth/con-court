<template>
  <div
    id="era-footer-tracking-index"
    class="sticky top-[85%] mx-auto w-[828px] z-10 flex flex-col bg-white"
  >
    <div
      id="tricking-index"
      class="flex items-center justify-center py-2 border border-black"
    >
      <div v-for="(d, index) in data" :key="index" class="flex items-center">
        <div
          :id="`tracking_number_${index}`"
          class="
            w-[12px]
            h-[12px]
            rounded-full
            border-absentGray border
            mx-[3px]
          "
        />

        <IntertImageInTracking :index="index" />
      </div>
    </div>
    <div id="hint-track" class="flex border border-t-0 border-black">
      {{ current_step }}
    </div>
  </div>
</template>

<script>
import IntertImageInTracking from './IntertImageInTracking.vue'
export default {
  components: {
    IntertImageInTracking,
  },
  props: {
    data: {
      type: Array,
      required: false,
      default: [],
    },
    current_step: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  mounted() {
    // console.log(this.data, 'data')
  },
  watch: {
    current_step: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        // console.log(newValue)
        // console.log(this.data[newValue])
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
