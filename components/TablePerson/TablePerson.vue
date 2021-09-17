<template>
  <div id="table-person-wrapper" class="h-screen overflow-hidden">
    <div
      id="top-table"
      class="
        h-[133px]
        md:h-[241px]
        bg-tableHead
        flex flex-col
        justify-center
        relative
      "
    >
      <div class="container mx-auto">
        <div
          id="hint-track"
          class="
            bg-white
            border border-black
            lg:w-[578px]
            md:w-[450px]
            w-max
            mx-auto
            flex
            justify-center
            relative
            md:h-[36px]
            h-[20px]
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
