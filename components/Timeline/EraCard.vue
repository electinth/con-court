<template>
  <div id="era-card">
    <div
      id="card"
      class="
        w-[190px]
        h-[270px]
        md:w-[300px] md:h-[360px]
        mx-auto
        border border-black
        mt-6
        relative
        overflow-hidden
      "
      :class="{ 'bg-white': data_list.role === 'case' }"
    >
      <EventImageBG
        :index_image="data_list.number_event"
        v-if="data_list.role === 'event'"
      />
      <div
        class="h-[14px] md:h-[28px] border-b border-b-black"
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
        class="px-4 py-1 mx-auto mt-3 md:mt-4 w-max B_04"
      >
        {{ date }}
      </p>
      <p
        class="px-2 mt-2 font-bold text-center md:px-4 md:mt-3 B_03"
        id="name"
        :class="data_list.role === 'case' ? 'text-black' : 'text-white'"
        v-html="data_list.name"
      ></p>
      <SeeMore :index="index" :data="data_list" />
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
