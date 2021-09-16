<template>
  <div id="table-person-wrapper" class="h-screen overflow-hidden">
    <div
      id="top-table"
      class="h-[241px] bg-tableHead flex flex-col justify-center relative"
    >
      <div class="container mx-auto">
        <div
          id="hint-track"
          class="
            bg-white
            border border-black
            w-[578px]
            mx-auto
            flex
            justify-center
            relative
            h-[36px]
          "
        >
          <HintTrack />
          <BottonSeeMoreCase />
        </div>
      </div>
      <HeaderTablePerson />
    </div>
    <TableJudge class="h-full overflow-y-auto" />
  </div>
</template>

<script>
import HintTrack from '../util/HintTrack.vue'
import BottonSeeMoreCase from './BottonSeeMoreCase.vue'
import TableJudge from './TableJudge.vue'
import HeaderTablePerson from './HeaderTablePerson.vue'
export default {
  components: {
    HintTrack,
    BottonSeeMoreCase,
    TableJudge,
    HeaderTablePerson,
  },
}
</script>

<style lang="scss" scoped></style>
