<template>
  <div
    id="era-footer-tracking-index"
    class="
      sticky
      top-[85%]
      mx-auto
      lg:w-[828px]
      md:w-10/12
      w-11/12
      z-10
      flex flex-col
      mt-[30%]
      mb-[5%]
      bg-white
    "
  >
    <div
      id="tricking-index"
      class="flex flex-wrap items-center justify-center px-2 py-2 border border-black  md:px-5 lg:px-0"
    >
      <div v-for="(d, index) in data" :key="index" class="flex items-center">
        <div
          :id="`tracking_number_${index}`"
          class="
            w-[9px]
            h-[9px]
            md:w-[12px] md:h-[12px]
            rounded-full
            border-absentGray border
            md:mx-[3px]
            mx-[1px]
          "
        />

        <IntertImageInTracking :index="index" />
      </div>
    </div>
    <div
      id="hint-track"
      class="
        flex
        justify-center
        border border-t-0 border-black
        px-[6px]
        py-[2px]
      "
    >
      <HintTrack />
    </div>
  </div>
</template>

<script>
import IntertImageInTracking from './IntertImageInTracking.vue'
import HintTrack from '../util/HintTrack.vue'
export default {
  components: {
    IntertImageInTracking,
    HintTrack,
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

  watch: {
    current_step: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        const selected_data = this.data[newValue]
        setTimeout(() => {
          const elem_tracking_current = document.getElementById(
            `tracking_number_${newValue}`
          )
          const elem_tracking_old = document.getElementById(
            `tracking_number_${oldValue}`
          )

          if (selected_data.role === 'event' && elem_tracking_current) {
            elem_tracking_current.style.background = '#CFCFCF'
          }
          if (selected_data.role === 'case' && elem_tracking_current) {
            elem_tracking_current.style.background =
              selected_data.side_case === 1 ? '#B1FD97' : '#F0324B'
            elem_tracking_current.style.border = '1px solid #000000'
          }

          if (oldValue && elem_tracking_old && oldValue > newValue) {
            elem_tracking_old.style.background = 'white'
            elem_tracking_old.style.border = '1px solid #CFCFCF'
          }
        }, 0)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
