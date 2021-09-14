<template>
  <div id="era-card">
    <div
      id="card"
      class="
        w-[300px]
        h-[360px]
        mx-auto
        border border-black
        mt-6
        relative
        overflow-hidden
      "
    >
      <EventImageBG
        :index_image="data_list.number_event"
        v-if="data_list.role === 'event'"
      />
      <div
        class="h-[28px] border-b border-b-black"
        id="case-tab-color"
        v-if="data_list.role === 'case'"
        :class="
          data_list.side_case === 1 ? 'bg-positiveGreen' : 'bg-negativeRed'
        "
      />
      <p
        id="date"
        :class="
          data_list.role === 'case'
            ? 'bg-black text-white'
            : 'bg-white text-black'
        "
        class="px-4 py-1 mx-auto mt-4 w-max B_04"
      >
        {{ date }}
      </p>
      <p
        class="px-4 mt-3 font-bold text-center B_03"
        id="name"
        :class="data_list.role === 'case' ? 'text-black' : 'text-white'"
      >
        {{ data_list.name }}
      </p>
      <SeeMore :index="index" />
    </div>
  </div>
</template>

<script>
import FormatDate from '../util/FormatDate'
import EventImageBG from './EventImageBG.vue'
import SeeMore from './SeeMore.vue'
export default {
  components: {
    EventImageBG,
    SeeMore,
  },
  props: {
    data_list: {
      type: Object,
      required: false,
      default: {},
    },
    index: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      date: '',
    }
  },
  mounted() {
    // console.log(this.index, 'test')
  },
  watch: {
    data_list: {
      immediate: true,
      deep: true,
      handler() {
        if (this.data_list) this.date = FormatDate(this.data_list.date)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
