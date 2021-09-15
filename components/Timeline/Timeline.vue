<template>
  <div id="timeline-wrapper" v-if="data.length" class="relative h-full">
    <div class="absolute w-full h-full pointer-events-none" id="sticky-wrapper">
      <EraTitle :data="data[current_step]" />
      <EraFooterTack :data="data" :current_step="current_step" />
    </div>
    <Scrollama @step-enter="stepEnterHandler">
      <div
        v-for="(d, index) in data"
        :key="index"
        :class="index"
        class="flex flex-col items-center justify-center h-screen"
        :data-step="index"
      >
        <EraYear :date="d.date" />
        <div class="container flex justify-center w-full">
          <JudgeGrid
            side_case="1"
            :number_case="d.number_case"
            v-if="d.role === 'case'"
          />
          <EraCard :data_list="d" :index="index" class="px-[50px]" />
          <JudgeGrid
            side_case="2"
            :number_case="d.number_case"
            v-if="d.role === 'case'"
          />
        </div>
      </div>
    </Scrollama>
  </div>
</template>

<script>
import data_event from 'static/contents/เหตุการณ์สำคัญ'
import data_case from 'static/contents/ข้อมูลคดี'
import CombileData from '../util/CombileData'
import SortByDate from '../util/SortByDate'
import Scrollama from 'vue-scrollama'
import EraYear from './EraYear.vue'
import EraTitle from './EraTitle.vue'
import EraCard from './EraCard.vue'
import EraFooterTack from './EraFooterTack.vue'
import JudgeGrid from './JudgeGrid.vue'
export default {
  components: {
    Scrollama,
    EraTitle,
    EraYear,
    EraCard,
    EraFooterTack,
    JudgeGrid,
  },
  data() {
    return {
      data: {},
      current_step: 0,
    }
  },
  mounted() {
    this.data = CombileData(data_case, data_event)
    this.data = SortByDate(this.data)
    // console.log(this.index)
    // console.log('this.data => ', this.data)
  },
  methods: {
    stepEnterHandler({ element, index, direction }) {
      this.current_step = index
      //   console.log({ element, index, direction })
      //   console.log(element.dataset.step)
    },
  },
}
</script>

<style lang="scss" scoped></style>
