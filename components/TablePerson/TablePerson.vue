<template>
  <div id="summary">
    <div class="relative">
      <div
        id="top-table"
        class="
          h-[133px]
          md:h-[241px]
          bg-tableHead
          flex flex-col
          justify-center
          sticky
          top-0
          z-50
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
      <HideMoreCase />
      <TableJudge class="z-20 h-full overflow-y-auto" />
    </div>
  </div>
</template>

<script>
import HintTrack from '../util/HintTrack.vue'
import BottonSeeMoreCase from './BottonSeeMoreCase.vue'
import TableJudge from './TableJudge.vue'
import HeaderTablePerson from './HeaderTablePerson.vue'
import HideMoreCase from './HideMoreCase.vue'
export default {
  components: {
    HintTrack,
    BottonSeeMoreCase,
    TableJudge,
    HeaderTablePerson,
    HideMoreCase,
  },
}
</script>

<style lang="scss" scoped></style>
