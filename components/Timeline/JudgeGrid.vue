<template>
  <div
    id="judge-grid-wrapper"
    class="grid grid-cols-3 grid-rows-3 w-[240px] my-auto gap-4"
  >
    <div
      v-for="j in jusdge_list"
      :key="j.number_person"
      class="self-center justify-self-center"
    >
      <el-popover placement="bottom" width="227" trigger="click">
        <PopOver :person="j" :case_list_formated="PersonCase(j)" />
        <img
          slot="reference"
          class="
            w-[70px]
            h-[70px]
            rounded-full
            border-black border
            cursor-pointer
          "
          :class="side_case === '1' ? 'bg-positiveGreen' : 'bg-negativeRed'"
          :src="
            require(`assets/images/ภาพตุลาการ/${ReplaceString(
              j.name_surname_person
            )}.png`)
          "
          alt=""
        />
      </el-popover>
    </div>
  </div>
</template>

<script>
import FilterJudge from '../util/FilterJudge'
import PopOver from './PopOver.vue'
import FormatPersonCase from '../util/FormatPersonCase'
export default {
  components: {
    PopOver,
  },
  props: {
    side_case: {
      type: String,
      required: false,
      default: 0,
    },
    number_case: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      jusdge_list: [],
    }
  },
  mounted() {
    this.jusdge_list = FilterJudge(this.side_case, this.number_case)
  },
  methods: {
    ReplaceString(name) {
      return name.replaceAll(' ', '_')
    },
    PersonCase(list) {
      const case_list = FormatPersonCase(list)
      return this.SortPersonCaseNumber(case_list)
    },
    SortPersonCaseNumber(list) {
      return list.map((l) => ({
        name: l.name,
        list_case: l.list_case.sort((a, b) => b - a),
      }))
    },
  },
}
</script>

<style lang="scss" scoped></style>
