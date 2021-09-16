<template>
  <div
    id="era-footer-tracking-index"
    class="
      sticky
      top-[85%]
      mx-auto
      w-[828px]
      z-10
      flex flex-col
      mt-[30%]
      mb-[5%]
      bg-white
    "
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
    <div
      id="hint-track"
      class="flex justify-center border border-t-0 border-black px-[6px]"
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
