<template>
  <div id="timeline" v-if="data.length" class="mt-3">
    <div class="relative h-full" id="main-timeline">
      <div
        class="absolute w-full h-full pointer-events-none"
        id="sticky-wrapper"
      >
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
            <EventLeftWing v-if="d.role === 'event'" />
            <EraCard :data_list="d" :index="index" class="md:px-[50px]" />
            <EventRightWing v-if="d.role === 'event'" />
            <JudgeGrid
              side_case="2"
              :number_case="d.number_case"
              v-if="d.role === 'case'"
            />
          </div>
        </div>
      </Scrollama>
    </div>
    <div class="flex items-center h-screen" id="intro">
      <div
        class="
          w-[244px]
          md:w-[403px]
          border
          md:border-2
          border-black
          mx-auto
          B_03
          text-center
          px-5
          py-9
        "
      >
        หลังจากที่ได้เห็นรายละเอียดตัวอย่างการวินิจฉัย
        และเหตุการณ์สำคัญที่เกี่ยวข้องกับการสร้างผลลัพธ์สำคัญทางการเมืองของศาลรัฐธรรมนูญกันไปแล้ว
        เราขอพาดูผลงานส่วนตัวของตุลาการศาลรัฐธรรมนูญแต่ละคน ในแต่ละชุด
        ว่าพวกเขาลงมติอย่างไรบ้างในการวินิจฉัยที่สร้างผลลัพธ์สำคัญทางการเมือง
        และพวกเขาเหล่านั้นมาดำรงตำแหน่งตุลาการรัฐธรรมนูญได้อย่างไร
      </div>
    </div>
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
import EventLeftWing from './EventLeftWing.vue'
import EventRightWing from './EventRightWing.vue'
export default {
  components: {
    Scrollama,
    EraTitle,
    EraYear,
    EraCard,
    EraFooterTack,
    JudgeGrid,
    EventLeftWing,
    EventRightWing,
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
  },
  methods: {
    stepEnterHandler({ element, index, direction }) {
      this.current_step = index
    },
  },
}
</script>

<style lang="scss" scoped></style>
